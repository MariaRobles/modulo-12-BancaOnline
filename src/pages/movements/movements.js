import {getMovementList, getAccountDetails} from './movements.api';
import {mapMovementListFromApiToViewModel, mapAccountFromApiToViewModel} from './movements.mappers';
import {addMovementRows} from './movements.helpers';
import { onSetValues } from '../../common/helpers'
import { history } from '../../core/router';

let movements = {
    id: " ",
    description: " ",
    amount: " ",
    balance: " ",
    transaction: " ",
    realTransaction: " ",
    accountId: " ",
};

let account = {   //hacemos nuestro modelo para recoger los datos
    iban: '',
    balance: '',
    alias: '',
};




const params = history.getParams(); //para coger el parámetros de la url y el enrutador
const isEditMode = Boolean(params.id); //para ver si la url tiene un parámetro o no (para ver si le das a agregar cuenta o editar cuenta)


if (isEditMode) { //si la url tiene un param.id (sería un update)
    console.log(params.id);
    getMovementList(params.id).then (apiMovement =>{ //me traigo los datos de la cuenta por id
        movements = mapMovementListFromApiToViewModel(apiMovement);
        addMovementRows(movements); 
    })

    getAccountDetails(params.id).then (apiAccount =>{ //me traigo los datos de la cuenta por id
        account = mapAccountFromApiToViewModel(apiAccount);
        onSetValues(account); //viene de common/helpers para meter los valores en html
    })
}




/*getMovementList(params.id).then(movementList => {  //me trae una promesa desde la api, así que va con then( => {.....})
    console.log({movementList}); //entre {} porque es un objeto   
});*/