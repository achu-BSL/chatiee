import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';


@Schema()
export class Chat {
  @Prop({ unique: true, required: true })
  message_id: string;

  @Prop({ type: mongoose.Types.ObjectId, required: true })
  sender_id: mongoose.Types.ObjectId;

  @Prop({ type: mongoose.Types.ObjectId, required: true })
  recipient_id: mongoose.Types.ObjectId;

  @Prop({ required: true })
  content: string;
}


export const ChatSchema = SchemaFactory.createForClass(Chat);