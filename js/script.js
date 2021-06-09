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



while(numeri.length < 16 ){
 var numeroRandom = numeroCasuale(1,100);
 if(!numeri.includes(numeroRandom)){
     numeri.push(numeroRandom);
 }
}


function numeroCasuale(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);

  
}

console.log(numeri)


function presenteInArray(array, element) {
    var i = 0;
    var result = false;
    while (i < array.length && result == false) {
      if (array[i] == element) {
        result = true;
      }
      i++;
    }
    return result;
  }

// while (numeriRandom.length < 16) {
//     //inserisco solo se il numero non è già presente nell'array
//     var numeroCasuale = generaNumeriRandom(1, 100);
//     var cerca = presenteInArray(numeriRandom, numeroCasuale);
//     if (cerca == false) {
//       numeriRandom.push(numeroCasuale);
//     }
//   }

// In seguito deve chiedere all’utente (100 - 16) volte di
//  inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati,
// la partita termina, altrimenti si continua chiedendo all’utente
//  un altro numero. La partita termina quando il giocatore inserisce
// un numero “vietato” o raggiunge il numero massimo possibile 
// di numeri consentiti

var semaforo = true;
var numeriGiusti = []
var inserimento = numeriGiusti.push(inserisci)
var sconfitta = document.getElementById("risposta").innerHtml = 'Hai perso, hai beccato la bomba'

   while(semaforo ){
        var inserisci = parseInt(prompt('inserisci un numero da 1 a 100'));


    if ( numeri.includes(inserisci)) {
          
           sconfitta
           alert('hai preso la bomba,hai perso');

          semaforo = false;
         
      }else{
          inserimento
      }

      if(inserisci < 1 || inserisci > 100){
          alert('attenzione,inserire solo umeri compresi tra zero e 100')
      }
    

   }

  


 


 








