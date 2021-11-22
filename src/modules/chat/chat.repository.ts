
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';

import { Chat } from './chat.entity';
import { CreateChatDto } from './dto/create-chat.dto';

export class ChatRepository {
    constructor(@InjectModel(Chat.name) private readonly chatModel: Model<Chat>) { }

    async createUser(createChat: CreateChatDto) {

        const newChat = new this.chatModel({
            username: createChat.username,
            designation: createChat.designation,
            message: createChat.message,
            sentAt: createChat.sentAt
        });

        try {
            const createdChat = await newChat.save();
            return createdChat;
        } catch (error) {
            throw new InternalServerErrorException(error);
        }

    }


    async getChats() {

        let chats = await this.chatModel
            .find()
            .sort({'sentAt':-1})
            .limit(10)
            .exec();

        return chats;

}


}