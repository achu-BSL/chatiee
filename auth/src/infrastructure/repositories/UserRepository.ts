import { IUserRepository } from "../../application/interface/IUserRepository";
import { User } from "../../domain/entities/UserEntity";

export class UserRepository implements IUserRepository {
    async save (user: User) {
        //save logic
        return user;
    }

    async findUserByEmail(email: string) {
        return null;
    }

    async findUserByUsername (username: string) {
        return null;
    }
}