const mapMovementFromApiToViewModel = (movement) => { //cambiar los datos de una formato a otro
    return {
        id:movement.id,
        description: movement.description,
        amount: `${movement.amount} €`,
        balance: `${movement.balance} €`,
        transaction: new Date(movement.transaction).toLocaleDateString(),
        realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
        accountId:movement.accountId,
    };
   };  //esto nos trae un array con lo cual debemos hacer otro método para pasarlo por cada una de las entidades
   
   
export const mapMovementListFromApiToViewModel = (movementList) => {  //aquí hacemos un map para pasar por cada uno que nos devuelve otro array
  return movementList.map (movement => mapMovementFromApiToViewModel(movement));
};

export const mapAccountFromApiToViewModel = (account) => {
  return {
    // ...account,
    alias: account.name,
    balance: account.balance,
    iban: account.iban,
    }
  };


    /*"movements": [
    {
      "id": "1",
      "description": "Nómina noviembre",
      "amount": 900,
      "balance": 1490,
      "transaction": "2019-12-09T21:30:00",
      "realTransaction": "2019-12-09T21:30:00",
      "accountId": "1"
    },*/