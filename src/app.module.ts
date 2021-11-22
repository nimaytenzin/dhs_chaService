import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatModule } from './modules/chat/chat.module';
import { ConfigModule } from './config/config/config.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://dhs:overlord123@127.0.0.1/chatservice?retryWrites=true&w=majority'), ChatModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService, ChatGateway,ChatModule],
})
export class AppModule {}
