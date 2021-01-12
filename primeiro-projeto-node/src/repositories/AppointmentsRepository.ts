import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
    // O typeorm já possui várias funções padrão de repositório

    /**
     * async/await
     * Uma função async sempre é uma promise e seu retorno também é uma promise.
     * uma chamada await é usada quando a função chamada é uma promise.
     */

    public async findByDate(date: Date): Promise<Appointment | null> {
        const findAppointment = await this.findOne({
            where: { date },
        });

        return findAppointment || null;
    }
}

export default AppointmentsRepository;
