import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.REACT_APP_DOMAIN_URL,
  });
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
