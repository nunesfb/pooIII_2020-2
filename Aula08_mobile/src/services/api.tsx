import axios from 'axios';

const api = axios.create({
  baseURL: 'https://agendamentosamf.herokuapp.com',
});

export default api;
