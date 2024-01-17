import { User } from "../../domain/entities/UserEntity";

export interface IUserRepository {
  save: (user: User) => Promise<User>;
  findUserByUsername: (username: string) => Promise<User | null>;
  findUserByEmail: (email: string) => Promise<User | null>;
}
