/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


// chiedo all'utente di inserire una parola
const parolaUtente = prompt("Scrivi una parola");
console.log(parolaUtente);

// una volta che l'utente avrà inserito la parola, determino se è palindroma o no
function parolaInserita(analisiParola) {

    let parolaPalindroma = "";

    for (let i = 1; i <= analisiParola.length; i++){
        parolaPalindroma += analisiParola[analisiParola.length-i];        
    }
    if (analisiParola === parolaPalindroma) {
        return "La parola scritta è palindroma";
    } else {
        return "La parola scritta non è palindroma";
    }
    console.log(risultato);
}

let risultatoParola = parolaInserita(parolaUtente);
console.log(risultatoParola);