import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dtos/create-filme.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FilmeEntity } from './filme.entity';
import { Repository } from 'typeorm';

global.filmes = ['Batman'];

@Injectable()
export class FilmesService {
  constructor(
    @InjectRepository(FilmeEntity)
    private readonly filmeRepository: Repository<FilmeEntity>,
  ) {}

  findAll(): any {
    return this.filmeRepository.find();
  }

  create(filme: CreateFilmeDto) {
    if (!filme.titulo || !filme.categoria)
      throw new BadRequestException('Titulo e Nome precisam ser fornecedidos');
    this.filmeRepository.save(filme);
  }

  update(id: number, filme: CreateFilmeDto) {
    const filmeObtido = this.filmeRepository.findOne({ where: { id } });
    if (!filmeObtido) {
      throw new BadRequestException('ID e o Body precisam ser fornecedidos');
    }

    this.filmeRepository.update({ id }, filme);
  }

  delete(id: number) {
    const filmeObtido = this.filmeRepository.findOne({ where: { id } });
    if (!filmeObtido) {
      throw new BadRequestException('ID precisa ser fornecedidos');
    }

    this.filmeRepository.delete({ id });
  }
}
