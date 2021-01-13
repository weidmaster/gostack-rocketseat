/* eslint-disable no-console */
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import routes from './routes';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';

import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

// Middleware de tratamento de erros global
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        // Se o erro foi enviado pela aplicação, retorna de forma amigável para o frontend
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    console.error(err);

    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
});

app.listen(3333, () => {
    console.log('🚀 Server started on port 3333');
});
