import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
  date_birth: Date;
  telephone: string;
  address: string;
  start_year: number;
  user_type: string;
  active: boolean;
  user_avatar: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    date_birth,
    telephone,
    address,
    start_year,
    user_type,
    user_avatar,
  }: Request): Promise<User> {
    // se nao preciso criar nenhum metodo adicional, além daqueles do CRUD padrão
    // entao nao preciso criar um arquivo de repositorio
    // basta fazer assim que ele dá acesso aos metodos
    const usersRepository = getCustomRepository(UsersRepository);

    const checkUserExists = await usersRepository.findByEmail(email);
    if (checkUserExists) {
      throw new AppError('E-mail já cadastrado no sistema', 400);
    }
    // aqui estou criando o hash da senha
    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      date_birth,
      telephone,
      address,
      start_year: Number(start_year),
      user_type,
      active: true,
      user_avatar,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
