import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account`;

// para insertar una nueva cuenta
export const insertAccount = (account) => 
    Axios.post(`${url}/${account.id}`, account).then(response => {
        return response.data;
    });


//para coger los datos por id de cada cuenta
export const getAccount = id => 
    Axios.get(`${url}/${id}`).then(response => { 
        return response.data;
    });


//para actualizar los datos de la cuenta según el id
export const updateAccount = account => 
    Axios.put(`${url}/${account.id}`, account).then(response => { 
        return response.data;
    });

