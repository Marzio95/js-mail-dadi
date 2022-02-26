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
buttonAnnulla.style.marginBottom = '1rem'


let arrayEmail = ["marzio@email", "marco@email", "mario@email", "maro@email", "marzo@email", "mazio@email", "mazo@email", "arzio@email", "fazio@email",];

let inuputButton = document.getElementById('email_utente')

const cercaButton = document.getElementById('cerca')
cercaButton.style.margin = '0.5rem'


let output = document.createElement('div')
containerOfHtml.append(output)

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
        output.innerHTML = "La tua email non è presente nell'elenco, quindi non puoi accedere";
      
    } else {
        output.innerHTML = `Con questa email puoi accedere`;
    }

}



buttonAnnulla.addEventListener('click', funzioneAnnullaRicera);
function funzioneAnnullaRicera(){
    containerOfHtml.style.background = 'red'      
}




