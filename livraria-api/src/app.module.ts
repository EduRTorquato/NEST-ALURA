import { LivroModule } from './livros/livros.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Livro } from './livros/livro.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12335544',
      database: 'livraria',
      entities: [Livro],
      synchronize: true,
      autoLoadEntities: true,
      }),
     LivroModule
  ]
})
export class AppModule {}
