/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Livro {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nome: string;

    @Column()
    codigo: string;

    @Column()
    valor:number;
}