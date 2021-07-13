import { UserModule } from './../user/user.module';
import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';

@Module({
  providers: [ChatGateway],
  imports: [AuthModule, UserModule],
})
export class ChatModule {}
