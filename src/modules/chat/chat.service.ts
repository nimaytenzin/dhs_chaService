import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Schema as MongooseSchema } from 'mongoose';
import { ChatRepository } from './chat.repository';
import { CreateChatDto } from './dto/create-chat.dto';


@Injectable()
export class ChatService {
    constructor(private readonly chatRepository: ChatRepository) {}

    async createChat(createChat: CreateChatDto) {
        const newChat = await this.chatRepository.createUser(createChat);
        return newChat;
    }

    async getChats() {
       return await this.chatRepository.getChats();
    }

}