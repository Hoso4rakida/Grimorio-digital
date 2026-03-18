import axios from 'axios';

const backend = axios.create({
  baseURL: 'http://localhost:4444',
});

export default backend;

//CONEXÃO COM O BACK END
