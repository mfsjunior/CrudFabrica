import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity() // Decorator que define a classe como uma entidade do TypeORM, mapeada para uma tabela no banco de dados.
// A tabela será criada automaticamente com base nas propriedades da classe.
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;
    
    @Column({ nullable: true })
    description: string;

    @Column({ type: 'decimal', precision: 6, scale: 2 })
    price:number;
        
    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;

}
