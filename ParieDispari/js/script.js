// faccio scegliere ai pari o dispari
const equalUn = prompt("Pari o dispari? Fa la tua scelta");

// faccio inserire ai giocatore numeri da 1 a 5
const myNum = [1, 2, 3, 4, 5];

const myChoice = prompt("Inserisci un numero: ");

console.log("Il giocatore X ha scelto: ", equalUn, myChoice);
debugger;
// il computer sceglie il numero random
function cpuRand(myChoice, randGen) {

    const randGen = Math.floor(Math.random() * 5) + 1;

    const result = myChoice + randGen;

    return result;
}

const total = cpuRand(myChoice, randGen);

console.log(result);
