import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from './chat.entity';
import { ChatRepository } from './chat.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }])],
  providers: [ChatService,ChatRepository],
  controllers: [ChatController],
  exports:[ChatService]
})
export class ChatModule {}
