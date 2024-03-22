import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ChatGateway } from './chat.gateway';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://personalchat-mongo-srv:27017/personalchat')],
  providers: [AppService, ChatGateway],
  controllers: [AppController]
})
export class AppModule {}
