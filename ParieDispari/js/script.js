// faccio scegliere al giocatore pari o dispari e un numero da 1 a 5
let sceltaUtente = prompt("Pari o dispari? Fa la tua scelta");

let numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 5"));

// il computer sceglie il numero random
function compRandom() {
    let numeroComputerRandom = Math.floor(Math.random() * 5) + 1;
    
    return numeroComputerRandom;
}

let numeroComputer;

numeroComputer = compRandom();

// stabilisco se la somma dei due numeri scelti è pari o dispari
function sommaTot() {

    if (somma % 2 === 0 && sceltaUtente == "pari"){

        if (somma % 2 === 0) {
            risultato = "Hai vinto!"
        } else {
            somma % 2 != 0;
            risultato = "Hai perso!"
        }
   
    } else {
    
        if (somma % 2 != 0){
            sceltaUtente == "dispari";
            risultato = "Hai vinto!"   
        } else {
            somma % 2 === 0;
            sceltaUtente == "dispari";
            risultato = "Hai perso!"
        }   
    }
}

let somma;

somma = numeroUtente + numeroComputer;
console.log(somma);

// qui dichiaro chi è il vincitore
sommaTot();
console.log(risultato);

