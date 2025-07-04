import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Decorator que define a classe como uma entidade do TypeORM, mapeada para uma tabela no banco de dados.
// A tabela será criada automaticamente com base nas propriedades da classe.
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;
}