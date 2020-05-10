//se tienen que meter en inspeccinar y luego en consola para poder ver el resultado


let typeCard = `Tarjeta de credito`;/*si se le coloca una opcion ya existente lo va a mostrar en consola uno de los 2 valos que introducimos,
o sea si ponemos "tarjeta de credito" nos lo va a mostrar en consola, al igual que con la otra opcion que es "tarjeta de debito", 
si se le coloca un valor no existente nos va a mostrar en pantalla "no tienes tarjeta de cradito"*/
   
    switch(typeCard){
    case `Tarjeta de debito`:
        console.log(`Esta es una terjeta de debito`);
        break;
    case `Tarjeta de credito`:
        console.log(`Esta es una terjeta de credito`);
        break;
        default:
        console.log(`No tienes tarjeta`);
}
