import { v4 as uuid } from 'uuid';

class Appointment {
    id: string;

    provider: string;

    date: Date;

    // Ao utilizar parâmetros nomeados aproveitando a estrutura de dados já definida, devemos usar o Omit do Typescript
    // para excluir propriedades que são geradas e não passadas pela aplicação
    constructor({ provider, date }: Omit<Appointment, 'id'>) {
        this.id = uuid();
        this.provider = provider;
        this.date = date;
    }
}

export default Appointment;
