//vamos a poner todo lo relacionado con las llamadas al servidor

import Axios from "axios";

//llamamos a la url del servidor

const url = `${process.env.BASE_API_URL}/login` //esto está en el .env

export const isValidLogin = (login) => Axios.post(url, login) //post porque vamos a enviar desde la url con los datos del login
    .then(response => {
        return response.data;
    })