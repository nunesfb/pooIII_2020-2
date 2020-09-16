// temos que instalar e importar esta dependencia
// é uma dependencia do typescript, principalmente quando se usa o decorator
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes/index';
import AppError from './errors/AppError';

// estou importanto a conexao aqui
import './database';

const app = express();

app.use(cors());

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

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
