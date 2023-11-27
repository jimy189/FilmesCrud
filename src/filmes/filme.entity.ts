import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'filme' })
export class FilmeEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'titulo' })
  titulo: string;

  @Column({ name: 'categoria' })
  categoria: string;
}
