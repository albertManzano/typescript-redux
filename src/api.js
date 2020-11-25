import axios from 'axios';

const api = axios.create({
  baseURL: 'https://redux-typescript-burguer.firebaseio.com/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
  },
});

export default api;
