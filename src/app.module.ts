import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Console } from 'console';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndiaModule } from './india/india.module';
require('dotenv').config();

@Module({
  imports: [IndiaModule,
  MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
