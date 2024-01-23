import { Request, Response } from "express";
import { Register } from "../../application/use-cases/Register";
import { User } from "../../domain/entities/UserEntity";
import { BadRequestError, ValidationError } from "@achubsl-chatiee/common";


class RegisterUserDto {
  constructor(private readonly userId: string) {}
}

export class RegisterController {
  constructor(private readonly register: Register) {}

  async handle(req: Request, res: Response) {
    const { username, email, password } = req.body;
    const user = new User(username, email, password);
    try {
      const result = await this.register.execute(user);
      const response = new RegisterUserDto(result.userId);
      console.log("[Register Controll]: Register Success [response]", response);
      res.status(201).send(response);
    } catch (err) {
      if (err instanceof ValidationError) {
        return res.status(422).json({ msg: "Validation failed" });
      } else if (err instanceof BadRequestError) {
        return res.status(400).send({ msg: "User Already Exist" });
      }
      console.log(err);
      return res.status(500).json(err);
    }
  }
}
