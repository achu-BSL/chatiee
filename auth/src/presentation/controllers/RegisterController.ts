import { Request, Response } from "express";
import { Register } from "../../application/use-cases/Register";
import { User } from "../../domain/entities/UserEntity";

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
      res.status(201).send(response);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Validation failed")
          return res.status(422).send("Validation failed");
        return res.status(400).send("User Already Exist");
      }
    }
  }
}
