import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes/index';
import AppError from './errors/AppError';

import rateLimiter from './middlewares/rateLimiter';
// estou importanto a conexao aqui
import './database';

const app = express();

app.use(cors());

app.use(rateLimiter);

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Erro Interno do Sistema',
  });
});

app.listen(process.env.PORT || 3333);
