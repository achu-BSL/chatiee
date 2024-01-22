import { User } from "../../domain/entities/UserEntity";
import { UserRepository } from "../../infrastructure/repositories/UserRepository";
import { BadRequestError } from "../../shared/errors/BadRequestError";
import { ValidationError } from "../../shared/errors/ValidationError";

export class Register {
  constructor(private readonly userRepo: UserRepository) {}
  /**
   *
   * @param user
   * @throws {Error("Validation failed")}
   * @throws {Error("Email already taken")}
   * @throws {Error("Username already taken")}
   */
  async execute(user: User) {
    if (!this.validateFields(user)) throw new ValidationError();

    if (await this.userRepo.findUserByEmail(user.email))
      throw new BadRequestError("Email already taken");
    if (await this.userRepo.findUserByUsername(user.username))
      throw new BadRequestError("Username already taken");

    const result = await this.userRepo.save(user);

    return result;
  }

  private validateFields(user: User) {
    if (!user.email || !user.password || !user.username) return false;
    if (user.password.length < 6) return false;
    if (user.username.length < 4) return false;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(user.email)) return false;
    return true;
  }
}
