import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.enableCors(
  //   {
  //     methods: 'GET',
  //     preflightContinue: true,
  //     optionsSuccessStatus: 204,
  //     credentials: true,
  //     origin: ['http://localhost:4200/'],
  //   }
  // );
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.enableCors({
    allowedHeaders:"*",
    origin: "*",
});


  await app.listen(3000);
}
bootstrap();
