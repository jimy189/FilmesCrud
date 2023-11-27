import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dtos/create-filme.dto';

@Controller('filmes')
export class FilmeController {
  constructor(private readonly filmesService: FilmesService) {}

  @Get('/list')
  findAll() {
    return this.filmesService.findAll();
  }

  @Post('/post')
  create(@Body() filme: CreateFilmeDto) {
    return this.filmesService.create(filme);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() filme: CreateFilmeDto) {
    return this.filmesService.update(id, filme);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.filmesService.delete(id);
  }
}
