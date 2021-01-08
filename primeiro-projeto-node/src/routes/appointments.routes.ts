import { Router } from "express";
import { v4 as uuid } from "uuid";
import { startOfHour, parseISO, isEqual } from "date-fns";

const appointmentsRouter = Router();

// Quando temos erros do typo any[] no typescript, precisamos definir a tipagem.
// usamos interface para tipar dados complexos
interface Appointment {
    id: string;
    provider: string;
    date: Date;
}

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

    const appointment = {
        id: uuid(),
        provider,
        date: parsedDate,
    };

    appointments.push(appointment);

    return response.json(appointment);
});

export default appointmentsRouter;
