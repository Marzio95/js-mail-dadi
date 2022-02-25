
const containerOfHtml = document.querySelector('.container');


var arrayEmail = ["marzio@email", "marco@email", "mario@email", "maro@email", "marzo@email", "mazio@email", "mazo@email", "arzio@email", "fazio@email",];

let inuputButton = document.getElementById('email_utente')
// let emailUtente = prompt('Email Utente:');

// containerOfHtml.innerHTML += `<div>Email Utente: ${emailUtente}</div>`;
const cercaButton = document.getElementById('cerca')

cercaButton.addEventListener('click', myFunzione);

function myFunzione() {
    
    let research = false;
    let emailUtente = inuputButton.value;
    for (let numEmail = 0; numEmail < arrayEmail.length; numEmail++) {
        if (arrayEmail[numEmail] == emailUtente) {
            research = true;
        }
    }
    if (research == false) {
        containerOfHtml.innerHTML += `<div>La tua email non è presente nell'elenco, quindi non puoi accedere</div>`;
        // document.writeln("La tua email non è presente nell'elenco, quindi non puoi accedere");
    } else {
        containerOfHtml.innerHTML += `<div>Con questa email puoi accedere</div>`;
    }

    emailUtente = ''

}
