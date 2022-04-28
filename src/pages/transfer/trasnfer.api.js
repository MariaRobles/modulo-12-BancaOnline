import Axios from 'axios';

const urlCuenta = `${process.env.BASE_API_URL}/account-list`;
const urlTransfer = `${process.env.BASE_API_URL}/transfer` 

//para coger los datos de cada cuenta para el campo de selección de cuenta
export const getAccountOptions = () => 
    Axios.get(urlCuenta).then(({data}) => data);

  

export const insertTransfer = (transfer) => Axios.post(urlTransfer, transfer) //post porque vamos a enviar desde la url con los datos del login
    .then(response => {
        return response.data;
    })



