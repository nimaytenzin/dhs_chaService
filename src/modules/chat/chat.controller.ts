import { Body, Controller, Get, HttpStatus, Param, Post, Query, Res } from '@nestjs/common';
import { Schema as MongooseSchema } from 'mongoose';
import { ChatService } from './chat.service';

import {CreateChatDto } from "./dto/create-chat.dto"



@Controller('chat')
export class ChatController {
    constructor(private chatService: ChatService) {}

    @Post('/createChat')
    async createClient(@Body() createChat: CreateChatDto, @Res() res: any) {
      console.log("New chat message recieved!")
        const newChat = await this.chatService.createChat(createChat);
        return res.status(HttpStatus.OK).send(newChat);
    }

    @Get('')
    async getChat( @Res() res: any) {
      let chats=  await this.chatService.getChats();
      return res.status(HttpStatus.OK).send(chats);

    }

}