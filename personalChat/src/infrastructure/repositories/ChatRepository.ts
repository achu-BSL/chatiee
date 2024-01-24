import { IChatRepository } from "../../application/interfaces/IChatRepository";
import { Chat } from "../../domain/entities/ChatEntity";
import chatModel from "../database/models/chatModel";

export class ChatRepository implements IChatRepository {
  async findChatsBySenderIdAndRecieverId(senderId: string, receiverId: string) {
    const chats = await chatModel.find({ senderId, receiverId });
    return chats.map(
      (chat) =>
        new Chat(
          chat.message_text,
          chat.senderId,
          chat.receiverId,
          chat.createdAt,
          chat._id.toString()
        )
    );
  }

  async save(chat: Chat) {
    const { messageText, senderId, receiverId } = chat;
    const mongoChat = await chatModel.create({
      message_text: messageText,
      senderId,
      receiverId,
    });
    return new Chat(
      mongoChat.message_text,
      mongoChat.senderId,
      mongoChat.receiverId,
      mongoChat.createdAt,
      mongoChat._id.toString()
    );
  }
}
