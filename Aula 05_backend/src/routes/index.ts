import { Router } from 'express';
import bodyParser from 'body-parser';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use(bodyParser.json());

// aqui estou apontando para as rotas do appointment, por isso o uso do use
routes.use('/usuarios', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
