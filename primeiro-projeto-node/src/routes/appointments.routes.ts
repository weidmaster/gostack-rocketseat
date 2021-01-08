import { Router } from "express";
import { startOfHour, parseISO, isEqual } from "date-fns";
import Appointment from "../models/Appointment";

/**
 * Sempre que formos criar um tipo de dado que será armazenado na aplicação, criaremos um modelo.
 * Seja em memória ou banco de dados.
 * Exemplo: Appointment
 */

const appointmentsRouter = Router();

const appointments: Appointment[] = []; // define um array de Appointment

// POST http://localhost:3333/appointments
appointmentsRouter.post("/", (request, response) => {
    const { provider, date } = request.body;

    const parsedDate = startOfHour(parseISO(date)); // parseISO - converte uma data em formato string para um objeto Date
    const findAppointmentInSameDate = appointments.find((appointment) =>
        isEqual(parsedDate, appointment.date)
    );

    if (findAppointmentInSameDate) {
        return response
            .status(400)
            .json({ message: "This appointment is already booked" });
    }

    const appointment = new Appointment(provider, parsedDate);

    appointments.push(appointment);

    return response.json(appointment);
});

export default appointmentsRouter;
