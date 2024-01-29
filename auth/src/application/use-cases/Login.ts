import { User } from "../../domain/entities/UserEntity";
import { IUserRepository } from "../interface/IUserRepository";
import { BadRequestError, ValidationError } from "@achubsl-chatiee/common";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class Login {
  constructor(private userRepo: IUserRepository) {
    const secret = process.env.JWT_KEY;
    if (!secret) throw new Error("JWT_KEY NOT FOUND");
  }

  async execute(user: User) {
    const { username, password } = user;
    if (!username || !password) throw new ValidationError();

    const mongoUser = await this.userRepo.findUserByUsername(username);
    if (!mongoUser) throw new BadRequestError("User not found");

    const passwordMatch = await bcrypt.compare(password, mongoUser.password);
    if (!passwordMatch) throw new BadRequestError("Password mismatch");

    const secret = process.env.JWT_KEY!;

    const token = jwt.sign({ userId: mongoUser.userId, username }, secret);

    return token;
  }
}
