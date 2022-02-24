
const containerOfHtml = document.querySelector('.container');


var arrayEmail = ["marzio@email", "marco@email", "mario@email", "maro@email", "marzo@email", "mazio@email", "mazo@email", "arzio@email", "fazio@email",];


let emailUtente = prompt('Email Utente:');
containerOfHtml.innerHTML = `<div>Email Utente: ${emailUtente}</div>`;

let research = false;

for (let numEmail = 0; numEmail < arrayEmail.length; numEmail++) {
    if (arrayEmail[numEmail] == emailUtente) {
        research = true;
    }
} if (research == false) {
    document.writeln("La tua email non è presente nell'elenco, quindi non puoi accedere");
} else {
    document.writeln('Con questa email puoi accedere');
}
