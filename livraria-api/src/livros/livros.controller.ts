/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivrosService } from "./livros.service";

@Controller('livros')

export class LivrosController {

    constructor(private livroService: LivrosService){
    }
    
   @Get()
   async retornaTodos(): Promise<Livro[]> {
        return this.livroService.findAll();
   }

   @Post()
   async adicionaLivro(@Body() livro: Livro){
        return this.livroService.addLivro(livro)
   }

   @Put()
   async editaLivro(@Body() livro: Livro){
        return this.livroService.alteraLivro(livro);
   }

   @Delete('/:id')
   async apagaLivro(@Param() livro: Livro){
        return this.livroService.apagaLivro(livro.id);
   }

   @Get('/id/:id')
   async encontraUm(@Param() livro: Livro ){
         return this.livroService.encontraUm(livro)
   }

//     @Get(':id')
//     obterUm(@Param() params): Livro{
//         return this.livroService.obterUm(params.id);
//     }

//     @Post()
//     criar(@Body() livro: Livro){
//        this.livroService.criar(livro);
//     }

//     @Put()
//     alterar(@Body() livro){
//        this.livroService.alterar(livro);
//     }

//     @Delete(':id')
//     apagar(@Param() params){
//         this.livroService.apagar(params.id);
//     }

}