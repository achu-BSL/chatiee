import { User } from "../../domain/entities/UserEntity";
import { BadRequestError } from "../../shared/errors/BadRequestError";
import { ValidationError } from "../../shared/errors/ValidationError";
import { IUserRepository } from "../interface/IUserRepository";
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class Login {
    constructor (private userRepo: IUserRepository) {}

    async execute (user: User) {
        const {username, password} = user;
        if(!username || !password) throw new ValidationError();

        const mongoUser = await this.userRepo.findUserByUsername(username);
        if(!mongoUser) throw new BadRequestError('User not found');
        console.log('found');


        const passwordMatch = await bcrypt.compare(password, mongoUser.password);
        console.log(password, mongoUser.password);
        if(!passwordMatch) throw new BadRequestError('Password mismatch');

        const token = jwt.sign({userId: mongoUser.userId, username}, 'dev-secret');

        return token;
    }

    
}