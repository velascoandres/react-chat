import { UserService } from './../user/user.service';
import { WsAuthStrategy } from 'src/modules/auth/strategies/ws-auth.strategy';
import { UserDocument } from './../user/entities/user.entity';
import { Logger } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { getUserFromWSToken } from '../auth/utils/validate-user-ws';

interface SocketWithUserData extends Record<string, any> {
  user: Partial<UserDocument>;
}

@WebSocketGateway(3002, { namespace: 'chat' })
export class ChatGateway {
  constructor(
    private readonly wsAuthStrategy: WsAuthStrategy,
    private readonly userService: UserService,
  ) {}

  async handleConnection(socket: SocketWithUserData): Promise<void> {
    const logger = new Logger();
    try {
      const userFromSocket = await this.wsAuthStrategy.validate(
        getUserFromWSToken(socket.handshake),
      );
      const updatedUser = await this.userService.update(userFromSocket.id, {
        online: true,
      });
      socket.user = updatedUser;
      logger.verbose('Client connected to chat');
    } catch (e) {
      logger.error(
        'Socket disconnected within handleConnection() in AppGateway:',
        e,
      );
      socket.disconnect();
      return;
    }
  }

  async handleDisconnect(client: SocketWithUserData) {
    const logger = new Logger();
    try {
      const user = client.user;
      const updatedUser = await this.userService.update(user.id, {
        online: false,
      });
      logger.warn('Client disconnected: chat');
    } catch (error) {
      logger.error('Disconection with errors');
    }
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    console.log(client);
    return 'Hello world!';
  }
}
