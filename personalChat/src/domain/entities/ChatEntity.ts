import { randomUUID } from "crypto";

export class Chat {
  constructor(
    public messageText: string,
    public senderId: string,
    public receiverId: string,
    public timestamp = new Date(),
    public chatId = randomUUID().toString()
  ) {}
}
