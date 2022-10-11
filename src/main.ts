import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,

      //trasnforma la data de los dto
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  //Habilitar el prefijo
  app.setGlobalPrefix('api/v2');

  await app.listen(3000);
}
bootstrap();
