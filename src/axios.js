import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://redux-typescript-burguer.firebaseio.com/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*'
    },
});

export default instance;