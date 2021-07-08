import { UserDocument } from './../user/entities/user.entity';
import { JwtAuthGuard } from './../auth/guards/jwt.guard';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';

@UseGuards(JwtAuthGuard)
@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Req() { user }: any, @Body() createMessageDto: CreateMessageDto) {
    createMessageDto.from = (user as UserDocument).id;
    return this.messageService.create(createMessageDto);
  }

  @Get('from/:from')
  findMessages(
    @Req() { user }: { user: UserDocument },
    @Param('from') from: string,
  ) {
    return this.messageService.findAll({ from, to: user.id });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageService.remove(id);
  }
}
