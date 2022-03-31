/* Snack3
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome. */

// Definire una lista di nomi
const nameList = ["nome1", "nome2", "nome3", "nome4", "nome5"];

// Definire una lista di cognomi
const surnameList = ["cognome1", "cognome2", "cognome3", "cognome4", "cognome5"];

let guestsList = [];
let totalGuests = 5;

while (guestsList.length < totalGuests) {

    // Selezionare un nome casualmente dalla lista dei nomi
    let guestName = nameList[Math.ceil(Math.random() * (nameList.length - 1))];

    // Selezionare un cognome casualmente dalla lista dei cognomi
    let guestSurname = surnameList[Math.ceil(Math.random() * (surnameList.length - 1))];

    // Creare il nome intero del guest
    let guestFullName = guestName + ' ' + guestSurname;

    // Inserire il nome creato nella lista
    guestsList.push(guestFullName);

}

// Stampare la lista
console.log(guestsList);