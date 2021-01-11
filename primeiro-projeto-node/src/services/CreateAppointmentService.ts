import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

// Serviço: responsável pelas regras de negócio da aplicação.
// Apenas uma única e exclusiva funcionalidade, ou seja, um único método

/**
 * Recebimento das informações
 * Tratativa de erros/exceções
 * Acesso ao repositório
 */

interface Request {
    provider: string;
    date: Date;
}

/**
 * Dependency Inversion
 * Ao invés de criar sempre uma instância nova de uma dependência, passamos a mesma como parâmetro no construtor
 */

class CreateAppointmentService {
    private appointmentsRepository: AppointmentsRepository;

    constructor(appointmentsRepository: AppointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }

    public execute({ date, provider }: Request): Appointment {
        const appointmentDate = startOfHour(date);

        const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
            appointmentDate,
        );

        if (findAppointmentInSameDate) {
            // O serviço não tem acesso direto aos dados da requisição e resposta da rota. Então lançamentos a exceção
            // a ser tratada pela rota
            throw Error('This appointment is already booked');
        }

        // Utilizar parâmetros nomeados ajuda na hora de debugar. Quando faltar algum parêmtro, será avisado exatamente
        // qual é. Quando usamos normal, a mensagem vem genérica (esperado 3 parâmetros mas só enviou 2, por exemplo)
        const appointment = this.appointmentsRepository.create({
            provider,
            date: appointmentDate,
        });

        return appointment;
    }
}

export default CreateAppointmentService;
