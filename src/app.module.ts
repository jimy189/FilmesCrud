import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesModule } from './filmes/filmes.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    FilmesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      database: 'FilmeDB',
      username: 'postgres',
      password: '123',
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.js, .ts}'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
