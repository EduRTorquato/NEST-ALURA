import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';
import { Livro } from './livro.model';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Livro])],
  exports: [TypeOrmModule], 
  providers: [LivrosService],
  controllers: [LivrosController]
})
export class LivroModule {}