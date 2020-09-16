import { EntityRepository, Repository } from 'typeorm';
import User from '../models/User';

// estou declarando aqui o repositorio entity
// o type orm já possui diversos metodos padroes
// a interface recebe como parametro o model repository
@EntityRepository(User)
class UsersRepository extends Repository<User> {
  // como o findone demora um pouco, vamos usar um await (assincrona)
  // e como usamos isso, precisa dizer que o retorno dele é uma promise
  // o retorno de uma funcao assincrona é uma promise
  public async findByEmail(email: string): Promise<User | null> {
    const findEmail = await this.findOne({
      // estou buscando aqui por um appointment que tenha uma data igual a data que passei
      // usamos uma short sintax
      where: { email },
    });

    return findEmail || null;
  }
}

// findbydate(date).then - assim posso pegar o valor assim que finalizar

export default UsersRepository;
