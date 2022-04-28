// mapeadores para cambiar los datos de formato

const mapAccountFromApiToViewModel = (account) => { //cambiar los datos de una formato a otro
 return {
     id:account.id,
     iban: account.iban,
     name: account.name,
     balance: `${account.balance} €`,
     lastTransaction: new Date(account.lastTransaction).toLocaleDateString(),
 };
};  //esto nos trae un array con lo cual debemos hacer otro método para pasarlo por cada una de las entidades


export const mapAccountListFromApiToViewModel = (accountList) => {  //aquí hacemos un map para pasar por cada uno que nos devuelve otro array
    return accountList.map (account => mapAccountFromApiToViewModel(account));
 }