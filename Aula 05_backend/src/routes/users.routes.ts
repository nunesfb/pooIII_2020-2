import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

// SoC: Separation of Concerns (Separação de Preocupações)
// DTO - Data Transfer Object

usersRouter.get('/', async (request, response) => {
  // console.log(request.user);

  const usersRepository = getCustomRepository(UsersRepository);
  const users = await usersRepository.find();
  return response.json(users);
});

usersRouter.post('/', async (request, response) => {
  try {
    const {
      name,
      email,
      password,
      date_birth,
      telephone,
      address,
      start_year,
      user_type,
      active,
      user_avatar,
    } = request.body;

    const parsedDateBirth = parseISO(date_birth);

    const CreateUser = new CreateUserService();

    console.log(request.body);
    const user = await CreateUser.execute({
      name,
      email,
      password,
      date_birth: parsedDateBirth,
      telephone,
      address,
      start_year,
      user_type,
      active,
      user_avatar,
    });

    // nao é legal estarmos trazendo o password de volta
    // portanto podemos remover o seu retorno
    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.patch('/', async (request, response) => {
  try {
    const {
      name,
      email,
      password,
      date_birth,
      telephone,
      address,
      start_year,
      user_type,
      active,
      user_avatar,
    } = request.body;

    const { id_user } = request.params;

    const parsedDateBirth = parseISO(date_birth);

    const UpdateUser = new UpdateUserService();

    const user = await UpdateUser.execute({
      id_user,
      name,
      email,
      password,
      date_birth: parsedDateBirth,
      telephone,
      address,
      start_year,
      user_type,
      active,
      user_avatar,
    });

    // nao é legal estarmos trazendo o password de volta
    // portanto podemos remover o seu retorno
    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.delete('/:id_user', async (request, response) => {
  // console.log(request.user);

  const { id_user } = request.params;

  const usersRepository = getCustomRepository(UsersRepository);
  const users = await usersRepository.delete(id_user);
  return response.json(users);
});

usersRouter.get(
  '/dashboard',
  ensureAuthenticated,

  async (request, response) => {
    // console.log(request.file);

    return response.json({ message: 'Dashboard para usuários autenticados' });
  }
);

export default usersRouter;
