import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()//Com essa notação eu mostro que a classe tasks é uma tabela
export class Tasks{

    @PrimaryGeneratedColumn()
    id: number

    @Column() //por padrão é not null
    title: string

    @Column()
    description: string

    @Column({
        default: false //para sempre que criar uma task, ele ser salvo como falso
    })
    finished: boolean

    @CreateDateColumn()
    created_at: Date

    @CreateDateColumn()
    update_at: Date
}