import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Websocket for DHS inhouse Chat service!';
  }
}
