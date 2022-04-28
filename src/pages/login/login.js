//hemos creado este login.js

import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers';
import { isValidLogin } from './login.api';
import { formValidation} from './login.validations';
import { history, routes } from '../../core/router';

// creo el objeto para guardar la información que reciba

let  login = {
    user: "",
    password: "",
};

//recoger los datos

onUpdateField('user', (event) => {//siendo user el id del campo y como segundo parámetro una función para hacer yo lo que quiera
    const value = event.target.value; //aquí recoge el evento que se ha registrado en el campo id =  user
    login = { //utilizamos el método spread
        ...login, //copio todos los campos del objeto login
        user: value, //y cambio solo el login.user por el value
    };
    formValidation.validateField('user', login.user).then(result => {
        onSetError('user', result ); //esta función está en element.helpers
    })
});

    //hacemos lo mismo para password

onUpdateField('password', (event) => {
    const value = event.target.value; 
    login = { 
        ...login, 
        password: value, 
    };
    formValidation.validateField('password', login.password).then(result => {
        onSetError('password', result );
    })

});

//método para navegar

const onNavigate = (isValid) => {
    if(isValid) {
        history.push(routes.accountList);
    }else {
        alert('Usuario y/o contraseña no válidos');
    }
};

onSubmitForm ('login-button', () => { //cuando le doy al submit id = login-button haz esto....
    formValidation.validateForm(login).then(result =>{ //validación al pulsar el submit
        onSetFormErrors(result);
        if(result.succeeded) {
            isValidLogin(login).then(isValid => { //siValidLogin es un promesa! hay que darle un .then
                onNavigate(isValid);
                console.log({isValid}); //los datos del login correcto está en src/login.middleware.js
            })
            console.log({ login });
        }
    })
    
});







