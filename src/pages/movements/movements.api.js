import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`; //la variable de entorno está .env

const urlAcccount = `${process.env.BASE_API_URL}/account-list`;

export const getMovementList = id => 
    Axios.get(url, {params: {accountId: id}}).then(response => { 
        return response.data;
});

export const getAccountDetails = id => 
    Axios.get(`${urlAcccount}/${id}`).then(response => { 
        return response.data;
});