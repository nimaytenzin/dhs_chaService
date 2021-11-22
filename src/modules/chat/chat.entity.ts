import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatDocument = Chat & Document;

@Schema()
export class Chat {
  @Prop()
  username: string;
  @Prop()
  designation:string;

  @Prop()
  message: string;

  @Prop({type:Date, default:Date.now})
  sentAt:Date;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);