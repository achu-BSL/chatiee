import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ChatService } from './chat.service';

@Module({
  providers: [AppService, ChatService],
  controllers: [AppController]
})
export class AppModule {}
