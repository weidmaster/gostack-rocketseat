import { isEqual } from "date-fns";
import Appointment from "../models/Appointment";

// DTO - Data Transfer Object
interface CreateAppointmentDTO {
    provider: string;
    date: Date;
}

class AppointmentsRepository {
    // Um repositório é responsável pela persistência dos dados e sua manipulação

    // o Typescript que permite adicionar visibilidade das propriedades e métodos
    private appointments: Appointment[];

    constructor() {
        this.appointments = [];
    }

    public all(): Appointment[] {
        return this.appointments;
    }

    public findByDate(date: Date): Appointment | null {
        const findAppointment = this.appointments.find((appointment) =>
            isEqual(date, appointment.date)
        );

        return findAppointment || null;
    }

    // parâmetros nomeados
    public create({ provider, date }: CreateAppointmentDTO): Appointment {
        const appointment = new Appointment({ provider, date });

        this.appointments.push(appointment);

        return appointment;
    }
}

export default AppointmentsRepository;
