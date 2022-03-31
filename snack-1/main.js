/* SNACK 1 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
 */


let sum = 0;

/* CICLO FOR */

for (let i = 0; i < 5; i++) {

    let userNumber = parseInt(prompt("Ciclo for - Inserisci un numero"));

    sum += userNumber;

}

console.log(`Ciclo for - La somma dei numeri inseriti è ${sum}`);

/* CICLO WHILE */

let i = 0;

while (i < 5) {

    let userNumber = parseInt(prompt("Ciclo while - Inserisci un numero"));

    sum += userNumber;

    i++;

}

console.log(`Ciclo while - La somma dei numeri inseriti è ${sum}`);