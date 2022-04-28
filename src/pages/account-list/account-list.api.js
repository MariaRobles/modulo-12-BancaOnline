import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account-list`; //la variable de entorno está .env

export const getAccountList = () =>   //esto nos trae todos los datos de la api TODOS
    Axios.get(url).then(response => {
        return response.data
    });