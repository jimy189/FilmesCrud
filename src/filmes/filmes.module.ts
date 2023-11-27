import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { FilmeController } from './filmes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmeEntity } from './filme.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FilmeEntity])],
  providers: [FilmesService],
  controllers: [FilmeController],
})
export class FilmesModule {}
