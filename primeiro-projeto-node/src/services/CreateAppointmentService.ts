import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

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
    provider_id: string;
    date: Date;
}

/**
 * Dependency Inversion
 * Ao invés de criar sempre uma instância nova de uma dependência, passamos a mesma como parâmetro no construtor
 */

class CreateAppointmentService {
    public async execute({ date, provider_id }: Request): Promise<Appointment> {
        const appointmentsRepository = getCustomRepository(
            AppointmentsRepository,
        );
        const appointmentDate = startOfHour(date);

        const findAppointmentInSameDate = await appointmentsRepository.findByDate(
            appointmentDate,
        );

        if (findAppointmentInSameDate) {
            // O serviço não tem acesso direto aos dados da requisição e resposta da rota. Então lançamentos a exceção
            // a ser tratada pela rota
            throw Error('This appointment is already booked');
        }

        // Utilizar parâmetros nomeados ajuda na hora de debugar. Quando faltar algum parêmtro, será avisado exatamente
        // qual é. Quando usamos normal, a mensagem vem genérica (esperado 3 parâmetros mas só enviou 2, por exemplo)

        // o create não salva no banco de dados, apenas cria um objeto
        const appointment = appointmentsRepository.create({
            provider_id,
            date: appointmentDate,
        });

        await appointmentsRepository.save(appointment); // o save grava no banco de dados

        return appointment;
    }
}

export default CreateAppointmentService;
