
const containerOfHtml = document.querySelector('.container');
console.log(containerOfHtml);

var arrayEmail = ["marzio@email", "marco@email", "mario@email", "maro@email", "marzo@email", "mazio@email", "mazo@email", "arzio@email", "fazio@email",];
console.log(arrayEmail);

let emailUtente = prompt('Email Utente:');
console.log(emailUtente);
document.writeln(`Email Utente: ${emailUtente}`);

let research = false;

for (let numEmail = 0; numEmail < arrayEmail.length; numEmail++) {
    if (arrayEmail[numEmail] == emailUtente) {
        research = true;
    }
} if (research == false) {
    document.writeln("la tua email non è nell'elenco");
} else {
    document.writeln('puoi accedere');
}
