import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';

interface Request {
    email: string;
    password: string;
}

interface Response {
    user: User;
    token: string;
}

class AuthenticateUserService {
    public async execute({ email, password }: Request): Promise<Response> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({ where: { email } });

        if (!user) {
            throw new Error('Incorrect email/password combination');
        }

        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw new Error('Incorrect email/password combination');
        }

        // Gerando token JWT
        // payload, chave, configurações
        const token = sign({}, 'de942d76d2c80c7058676c6b4ec8558a', {
            subject: user.id,
            expiresIn: '1d', // 1 dia
        });

        return {
            user,
            token,
        };
    }
}

export default AuthenticateUserService;
