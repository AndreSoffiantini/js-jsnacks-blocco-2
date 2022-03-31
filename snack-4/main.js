/* Snack4
Crea un array di numeri interi 
e fai la somma di tutti gli elementi che sono in posizione dispari */

// Chiedere all'utente la lunghezza dell'array desiderata
const arrayLength = parseInt(prompt("Inserisci la lunghezza dell'array"));

// Creare un array di interi casuali in base alla lunghezza inserita
const numbersArray = [];

while (numbersArray.length < arrayLength) {

    let number = Math.ceil(Math.random() * arrayLength);

    numbersArray.push(number);

}

console.log(`L'array creato è: ${numbersArray}`);

// Sommare gli elementi in posizione dispari e restituire il risultato
let sum = 0;
let oddPosNumbers = [];

for (let i = 0; i < numbersArray.length; i++) {

    const element = numbersArray[i];

    if (i % 2 !== 0) {

        sum += element;
        oddPosNumbers.push(element);

    }

}

console.log(`Gli elementi in posizione dispari sono: ${oddPosNumbers}`);
console.log(`La somma degli elementi in posizione dispari è: ${sum}`);