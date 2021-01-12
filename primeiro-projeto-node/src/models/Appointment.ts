import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import User from './User';

// chamamos de Entidade algo que será salvo no banco de dados

/**
 * Decorators
 * São expressões iniciadas com arroba (@)
 * Basicamente são funções que recebem a classe inteira como parâmetro
 *
 * @Entity('table') - indica para salvar as informações dentro de uma tabela no banco de dados
 * É necessário informar com outros decorators quais propriedades são colunas no banco de dados.
 * Dessa forma é possível ter propriedades que não correspondem e não serão salvas.
 *
 * @PrimaryGeneratedColumn() - indica a chave primária e a forma dessa chave
 * @Column() - indica uma coluna e seu formato. O padrão é varchar
 */

@Entity('appointments')
class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    provider_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'provider_id' })
    provider: User;

    @Column('timestamp with time zone')
    date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    // não é necessário mais utilizar o construtor em uma classe do tipo Entidade do typeorm
}

export default Appointment;
