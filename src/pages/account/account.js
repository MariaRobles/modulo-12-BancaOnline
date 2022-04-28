import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onSetValues } from '../../common/helpers'; //para recogerlo cuando cambie
import { formValidation } from './account.validations';
import { mapAccountFromApiToViewModel, mapAccountFromViewModelToApi } from './account.mappers';
import { getAccount, updateAccount, insertAccount } from './account.api';
import { history } from '../../core/router';


const params = history.getParams(); //para coger el parámetros de la url y el enrutador
const isEditMode = Boolean(params.id); //para ver si la url tiene un parámetro o no (para ver si le das a agregar cuenta o editar cuenta)


if (isEditMode) { //si la url tiene un param.id (sería un update)
    getAccount(params.id).then (apiAccount =>{ //me traigo los datos de la cuenta
        account = mapAccountFromApiToViewModel(apiAccount); //y se los meto con el mapeador
        onSetValues(account); //viene de common/helpers para meter los valores en html
    })
}



let account = {   //hacemos nuestro modelo para recoger los datos
    id: '',
    type: '',
    alias: '',
};

onUpdateField ('type', (event) => {  //cogemos el input type de html y en el evento(change)
    const value = event.target.value;  //meto el valor en una variable
    account = {
        ...account, //y cojo todo el array
        type: value, // y le cambio sólo el valor que me ha dado el evento
    }

    formValidation.validateField('type', account.type).then(result=> {
        onSetError('type', result);
    });
});

onUpdateField ('alias', (event) => {  //cogemos el input alias de html y en el evento(change)
    const value = event.target.value;  //meto el valor en una variable
    account = {
        ...account, //y cojo todo el array
        alias: value, // y le cambio sólo el valor que me ha dado el evento
    }

    formValidation.validateField('alias', account.alias).then(result=> {
        onSetError('alias', result);
    });
});

//cuadno click en submit

const onSave = () => {
    const apiAccount = mapAccountFromViewModelToApi(account);
    return isEditMode ? updateAccount(apiAccount) : insertAccount(apiAccount)
}

onSubmitForm('save-button', () => {
    formValidation.validateForm(account).then (result => {
        onSetFormErrors (result);
        if(result.succeeded){
            onSave().then(apiAccount => {
                history.back();
                //console.log({apiAccount});
            })
        }
    });
   
});

//insert. insertar nueva cuenta
//get. coger los datos actuales            //todo esto está en account.api
//update. cambiar los datos de una cuenta





