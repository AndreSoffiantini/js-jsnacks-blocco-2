/* Snack5 (Bonus)
Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

// Inizializzare i due array
const firstArray = [];
const secondArray = [];

// Definire le lunghezze dei due array
let firstArrayStartLength = Math.round(1 + Math.random() * 10);
let secondArrayStartLength = Math.round(1 + Math.random() * 10);

// Creare ciclo di controllo in modo da ottenere due lunghezze diverse
while (firstArrayStartLength === secondArrayStartLength) {

    secondArrayStartLength = Math.round(1 + Math.random() * 10);

}

// Creare il primo array
for (let i = 0; i < firstArrayStartLength; i++) {

    let element = Math.ceil(Math.random() * 10);
    firstArray.push(element);

}

console.log(`Primo array: ${firstArray}`);

// Creare il secondo array
for (let i = 0; i < secondArrayStartLength; i++) {

    let element = Math.ceil(Math.random() * 10);
    secondArray.push(element);

}

console.log(`Secondo array: ${secondArray}`);

// SE il primo array è il più corto aggiungere elementi per avere pari lunghezze
if (firstArray.length < secondArray.length) {

    console.log("Il primo array ha meno elementi");

    while (firstArray.length < secondArray.length) {

        let newElement = Math.ceil(Math.random() * 10);

        firstArray.push(newElement);

    }

    console.log(`Primo array modificato: ${firstArray}`);

}

// SE il secondo array è il più corto aggiungere elementi per avere pari lunghezze
else {

    console.log("Il secondo array ha meno elementi");

    while (firstArray.length > secondArray.length) {

        let newElement = Math.ceil(Math.random() * 10);

        secondArray.push(newElement);

    }

    console.log(`Secondo array modificato: ${secondArray}`);

}