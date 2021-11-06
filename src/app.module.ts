import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndiaModule } from './india/india.module';

@Module({
  imports: [IndiaModule,
  MongooseModule.forRoot('mongodb+srv://nigga1969:euYOQIu2vewfNTv5@india-covid-data.zil1e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
