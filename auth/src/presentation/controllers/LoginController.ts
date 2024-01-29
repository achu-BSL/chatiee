import { Request, Response } from "express";
import { Login } from "../../application/use-cases/Login";
import { User } from "../../domain/entities/UserEntity";
import { BadRequestError, ValidationError } from "@achubsl-chatiee/common";

export class LoginController {
  constructor(private login: Login) {}

  async handle(req: Request, res: Response) {
    const { username, password } = req.body;
    const user = new User(username, "", password);
    try {
      const token = await this.login.execute(user);
      res.cookie("token", token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      res
        .status(200)
        .send({ msg: "Login Successfully", data: { username, token } });
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
