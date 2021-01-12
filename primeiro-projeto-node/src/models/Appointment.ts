import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
    provider: string;

    @Column('timestamp with time zone')
    date: Date;

    // não é necessário mais utilizar o construtor em uma classe do tipo Entidade do typeorm
}

export default Appointment;
