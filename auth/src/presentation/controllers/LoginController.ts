import { Request, Response } from "express";
import { Login } from "../../application/use-cases/Login";
import { User } from "../../domain/entities/UserEntity";
import { ValidationError } from "../../shared/errors/ValidationError";
import { BadRequestError } from "../../shared/errors/BadRequestError";

export class LoginController {
  constructor(private login: Login) {}

  async handle(req: Request, res: Response) {
    const { username, password } = req.body;

    console.log(username, password, "[username, passwrd]");

    const user = new User(username, "", password);
    try {
      const token = await this.login.execute(user);
      res.cookie("token", token);
      console.log("[login successfull]");
      res.status(200).send({ msg: "Login Successfully" });
    } catch (err) {
      if (err instanceof ValidationError) {
        return res.status(422).json({ msg: "Validation failed" });
      } else if (err instanceof BadRequestError) {
        return res.status(400).send({ msg: "Incorrect username or password" });
      }
      console.log(err);
      return res.status(500).json(err);
    }
  }
}
