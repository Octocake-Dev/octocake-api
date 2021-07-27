import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PostsModule } from './posts/posts.module';
import appConfig from './config/app.config';

@Module({
  imports: [ConfigModule.forRoot({ load: [appConfig] }), PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
