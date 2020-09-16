import { createConnection } from 'typeorm';

createConnection();

// vamos importar ele para procurar em todo nosso projeto
// um arquivo chamado ormconfig.json
// se ele encontrar, automaticamente ele vai ler os dados deste arquivo
// e vai fazer a conexao com o banco de dados
// poderia passar as credenciais de acesso diretamente aqui
// mas é melhor pelo outro arquivo porque o typeorm tem uma cli
// se nao usarmos o ormconfig, ele nao vai conseguir rodar os comandos por aqui
// pelo ormconfig os comandos rodam certinho de forma automatica
