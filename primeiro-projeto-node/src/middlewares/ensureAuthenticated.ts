import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

import AppError from '../errors/AppError';

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
): void {
    // Validação do token JWT, que virá no cabeçalho da requisição

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('JWT token is missing', 401);
    }

    // Bearer token_info
    const [, token] = authHeader.split(' ');

    try {
        const decoded = verify(token, authConfig.jwt.secret);

        const { sub } = decoded as TokenPayload; // força o tipo de uma variável

        /**
         * O Request padrão do express precisa ser modificado para aceitar a
         * variável user que será passada. Essa modificação é feita através
         * de arquivo de definição que se encontra em @types/express.d.ts
         *
         * Adicionar informações na requisição deixa disponível as mesmas para
         * novas requisições
         */
        request.user = {
            id: sub,
        };

        return next();
    } catch {
        throw new AppError('Invalid JWT token', 401);
    }
}
