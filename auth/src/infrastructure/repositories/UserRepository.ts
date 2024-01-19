import { IUserRepository } from "../../application/interface/IUserRepository";
import { User } from "../../domain/entities/UserEntity";
import userModel from "../database/models/UserModel";
import bcrypt from "bcrypt";

export class UserRepository implements IUserRepository {
  async save(user: User) {
    const hashedPassword = bcrypt.hash(user.password, 10);
    const { username, email, _id } = await userModel.create({
      ...user,
      password: hashedPassword,
    });
    const mongoUser = new User(username, email, "x", _id.toString());
    return mongoUser;
  }

  async findUserByEmail(email: string) {
    const mongoUser = await userModel.findOne({ email });
    if (!mongoUser) return null;
    return new User(
      mongoUser.username,
      mongoUser.email,
      "x",
      mongoUser._id.toString()
    );
  }

  async findUserByUsername(username: string) {
    const mongoUser = await userModel.findOne({ username });
    if (!mongoUser) return null;
    return new User(
      mongoUser.username,
      mongoUser.email,
      "x",
      mongoUser._id.toString()
    );
  }
}
