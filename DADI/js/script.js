
let container = document.querySelector('.container');

let theRandomNumberUtente = Math.floor(Math.random() * 5) + 1;
console.log(theRandomNumberUtente);
container.innerHTML += `<div>Numero Utente: ${theRandomNumberUtente}</div>`;

let theRandomNumberComputer = Math.floor(Math.random() * 5) + 1;
console.log(theRandomNumberComputer);
container.innerHTML += `<div>Numero Computer: ${theRandomNumberComputer}</div>`;

if (theRandomNumberUtente > theRandomNumberComputer) {
    document.writeln("L'Utente Vince")   
} else if (theRandomNumberUtente < theRandomNumberComputer) {
    document.writeln("L'Utente Perde")
} else {
    document.writeln("Pareggio")
}

