import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

// Rota - Deve se preocupar apenas com receber a requisição, chamar outro arquivo e devolver uma resposta
// Quando temos mais funcionalidades além disso, provavelmente queremos abstrair em um serviço.

appointmentsRouter.get('/', (request, response) => {
    const appointments = appointmentsRepository.all();

    return response.json(appointments);
});

// POST http://localhost:3333/appointments
appointmentsRouter.post('/', (request, response) => {
    try {
        const { provider, date } = request.body;

        const parsedDate = parseISO(date); // apenas transformação de dados não vai para serviço

        const createAppointmentService = new CreateAppointmentService(
            appointmentsRepository,
        );

        const appointment = createAppointmentService.execute({
            date: parsedDate,
            provider,
        });

        return response.json(appointment);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default appointmentsRouter;
