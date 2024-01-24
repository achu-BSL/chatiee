import { Chat } from "../../domain/entities/ChatEntity";

export interface IChatRepository {
  save: (chat: Chat) => Promise<Chat | null>;
  findChatsBySenderIdAndRecieverId: (
    senderId: string,
    receiverId: string
  ) => Promise<Chat[]>;
}
