// Il computer deve generare 16 numeri casuali tra 1 e 100.
//  I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di
//  inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati,
// la partita termina, altrimenti si continua chiedendo all’utente
//  un altro numero. La partita termina quando il giocatore inserisce
// un numero “vietato” o raggiunge il numero massimo possibile 
// di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha inserito un 
// numero consentito.




// Il computer deve generare 16 numeri casuali tra 1 e 100.
var numeri = [ ] ;


while(numeri.length < 16 + 1){
 var numeroRandom = numeroCasuale(1,100);
 if(!numeri.includes(numeroRandom)){
     numeri.push(numeroRandom)
 }

}

function numeroCasuale(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);

  
}

console.log(numeri)


// i numeri non possono essere duplicati

// non so come si fa

