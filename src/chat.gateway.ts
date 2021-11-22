import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ChatService } from './modules/chat/chat.service';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';



@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly chatDataStorageService: ChatService) { }
  @WebSocketServer()
  server:Server;

  private logger: Logger = new Logger('ChatGateWay');

  @SubscribeMessage('message')
  async handleMessage(client: any, payload: any): Promise<string> {
    console.log(payload)
    let createChat =  this.chatDataStorageService.createChat({
      username: payload.username,
      designation: payload.designation,
      message: payload.message,
      sentAt: payload.sentAt
    })
    console.log(createChat, "websocket works")
    this.server.emit('message', payload)
    return 'Hello world!';
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
