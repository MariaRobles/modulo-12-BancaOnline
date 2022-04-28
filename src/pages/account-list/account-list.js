import { getAccountList} from './account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListFromApiToViewModel } from './account-list.mappers';
import { onUpdateField } from '../../common/helpers'; //para cuando se actualice un campo
import { history } from '../../core/router'; //para navegar por el app

/*
Account {
    id: string;
    iban: string;
    name: string;
    balance: number // lo tenemos que convertir a string con €;
    lastTansaction: date //lo vamos a transformar en string -> DD/MM/YYYY;
}
*/

// vamos a hacer un mapper para cambiar estos datos de arriba en account-list.mappers.js


//para el campo select, en cambio haz esto (que sería navegar hasta otra página)



getAccountList().then(accountList => {  //me trae una promesa desde la api, así que va con then( => {.....})
    console.log({accountList}); //entre {} porque es un objeto
    const viewModelAccountList = mapAccountListFromApiToViewModel(accountList); //le aplico los cambios
    addAccountRows(viewModelAccountList);  //función del helper para rellenar le pasamos los datos ya cambiados

    viewModelAccountList.forEach (account => {   //por cada cuenta
        onUpdateField(`select-${account.id}`, (event) => { //actualizo el valor pasándole el id
            const route = event.target.value; //con el evento que sería ponerle el valor 
            history.push(route); //y se lo meto a history
        });
    });
});

