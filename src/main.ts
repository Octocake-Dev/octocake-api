import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  app.enableCors({ origin: 'http://localhost:3000/' });

  await app.listen(
    configService.get<number>('app.port'),
    configService.get<string>('app.host'),
  );
}
bootstrap();
