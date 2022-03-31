/* Snack2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo. */

const userNumber = parseInt(prompt("Inserisci un numero"));

switch (userNumber % 2) {

    case 0:
        console.log(userNumber);
        break;

    default:

        if (isNaN(userNumber)) {
            alert("Valore inserito errato, riprova!");
            break;
        }

        console.log(userNumber + 1);

}