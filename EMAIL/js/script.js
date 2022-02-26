const containerOfHtml = document.querySelector('.container');
containerOfHtml.style.background = 'yellow'
containerOfHtml.style.height = '300px'
containerOfHtml.style.display = 'flex'
containerOfHtml.style.flexDirection = 'column'
containerOfHtml.style.alignItems = 'center'
containerOfHtml.style.justifyContent = 'center'


let titolo = document.createElement('h1')
containerOfHtml.prepend(titolo)
titolo.innerHTML = 'Selettore Email'

let buttonAnnulla = document.createElement('button')
containerOfHtml.append(buttonAnnulla)
buttonAnnulla.innerHTML = 'Annulla'



let arrayEmail = ["marzio@email", "marco@email", "mario@email", "maro@email", "marzo@email", "mazio@email", "mazo@email", "arzio@email", "fazio@email",];

let inuputButton = document.getElementById('email_utente')

const cercaButton = document.getElementById('cerca')
cercaButton.style.margin = '0.5rem'

cercaButton.addEventListener('click', funzioneVerificaEmail);
function funzioneVerificaEmail() {
    
    let research = false;
    let emailUtente = inuputButton.value;

    for (let numEmail = 0; numEmail < arrayEmail.length; numEmail++) {
        if (arrayEmail[numEmail] == emailUtente) {
            research = true;
        }
    }
    if (research == false) {
        containerOfHtml.innerHTML += `<div>La tua email non è presente nell'elenco, quindi non puoi accedere</div>`;
      
    } else {
        containerOfHtml.innerHTML += `<div>Con questa email puoi accedere</div>`;
    }

}

buttonAnnulla.addEventListener('click', funzioneAnnullaRicera);
function funzioneAnnullaRicera(){
    containerOfHtml.style.background = 'red'
    
      
}


