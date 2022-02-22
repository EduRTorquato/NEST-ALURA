/* eslint-disable prettier/prettier */
import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosService {
    
    constructor(
       @InjectRepository(Livro)
        private readonly livroRepository: Repository<Livro>,
    ){}

    async findAll(): Promise<Livro[]> {    
        return this.livroRepository.find();
      }
    
    async addLivro(livro: Livro){
      this.livroRepository.save(livro)
    }


    async alteraLivro(livro: Livro){
      this.livroRepository.save(livro);
    }

    async apagaLivro(id: number){
      this.livroRepository.delete(id);
    }

    async encontraUm(livro: Livro){
      this.livroRepository.findOne(livro)
    }

    // criar(livro: Livro){
    //     this.livros.push(livro)
    // }

    // alterar(livro: Livro){
    //     return this.livros
    // }
    
    // apagar(livro: Livro){
    //     this.livros.pop();
    // }
}