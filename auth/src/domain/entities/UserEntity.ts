import { randomUUID } from "crypto";

export class User {
  constructor(
    public username: string,
    public email: string,
    public password: string,
    public userId = randomUUID().toString()
  ) {}
}
