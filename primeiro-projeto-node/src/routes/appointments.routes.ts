import { Router } from "express";
import { startOfHour, parseISO } from "date-fns";
import AppointmentsRepository from "../repositories/AppointmentsRepository";

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get("/", (request, response) => {
    const appointments = appointmentsRepository.all();

    return response.json(appointments);
});

// POST http://localhost:3333/appointments
appointmentsRouter.post("/", (request, response) => {
    const { provider, date } = request.body;

    const parsedDate = startOfHour(parseISO(date)); // parseISO - converte uma data em formato string para um objeto Date

    const findAppointmentInSameDate = appointmentsRepository.findByDate(
        parsedDate
    );

    if (findAppointmentInSameDate) {
        return response
            .status(400)
            .json({ message: "This appointment is already booked" });
    }

    // Utilizar parâmetros nomeados ajuda na hora de debugar. Quando faltar algum parêmtro, será avisado exatamente
    // qual é. Quando usamos normal, a mensagem vem genérica (esperado 3 parâmetros mas só enviou 2, por exemplo)
    const appointment = appointmentsRepository.create({
        provider,
        date: parsedDate,
    });

    return response.json(appointment);
});

export default appointmentsRouter;
