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
// var numeri = [ ] ;



 // while(numeri.length < 16 ){
 //  var numeroRandom = numeroCasuale(1,100);
 //  if(!numeri.includes(numeroRandom)){
 //      numeri.push(numeroRandom);
 //  }
 // }


// function numeroCasuale(min,max){
//     return Math.floor(Math.random() * (max - min + 1) + min);

  
// }

// console.log(numeri)






// In seguito deve chiedere all’utente (100 - 16) volte di
//  inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati,
// la partita termina, altrimenti si continua chiedendo all’utente
//  un altro numero. La partita termina quando il giocatore inserisce
// un numero “vietato” o raggiunge il numero massimo possibile 
// di numeri consentiti

// var semaforo = true;
// var numeriGiusti = []
// var inserimento = numeriGiusti.push(inserisci)
// var sconfitta = document.getElementById("risposta").innerHtml = 'Hai perso, hai beccato la bomba'

//    while(semaforo ){
//         var inserisci = parseInt(prompt('inserisci un numero da 1 a 100'));


//     if ( numeri.includes(inserisci)) {
          
//          console.log(sconfitta)
//            alert('hai preso la bomba,hai perso');

//           semaforo = false;
         
//       }else{
//           inserimento
//       }

//       if(inserisci < 1 || inserisci > 100){
//           alert('attenzione,inserire solo umeri compresi tra zero e 100')
//       }

    //   if(){
    //       alert('Non inserire più volte lo stesso numero')
    //   }
    

//    }

// correggo il mio ciclo while
var insieme = [];
var inserimento = [];

// bonus
var scelta = parseInt(prompt('inserisci la difficoltà :  0 , 1 oppure 2 '));

// condizioni bonus
while(scelta < 0 || scelta > 2 || isNaN(scelta)){
    alert('attenzione devi scegliere un numero compreso tra 0 e 2')
    var scelta = parseInt(prompt('inserisci 0 , 1 oppure 2 '))

}

// utilizzo switch per le diverse diffficoltà
switch(scelta){
    case 0 :
     var massimo = 100;
     var possibilità = massimo - 16; 
     break;
    case 1 :
      var massimo = 80;
      var possibilità = massimo - 16; 
      break;
    default :  
      var massimo = 50;
      var possibilità = massimo - 16; 
      break;

}


// var massimo = 100;
// var possibilità = massimo - 16;

// while per includere i numeri
  while(insieme.length < 16 ){
   var numero = numeriRandom(1,massimo);
   if(!insieme.includes(numero)){
       insieme.push(numero);
   }
  }

// imposto una variabile semaforo
var semaforo = false;

while(inserimento.length < possibilità && semaforo == false){
    var numeroUtente = parseInt(prompt('inserisci un numero '));

   
   while(numeroUtente < 1 || numeroUtente > massimo){
     alert('Attenzione!!,inserire numeri che sono nel range');
     var numeroUtente = parseInt(prompt('inserisci un numero '));

}

    if(scopertaNumero(insieme, numeroUtente)){
      alert('Bomba trovata');
      semaforo = true;
    }else if(!scopertaNumero(inserimento, numeroUtente)){
       inserimento.push(numeroUtente);
    }else{
        alert('hai già detto questo numero');
    }




   

}

var lunghezzaArray = inserimento.length;

// scrivo l'if per capire dopo quanti tentativi hai perso
if(semaforo = true){
    
    console.log('hai perso dopo ' + lunghezzaArray + ' tentativi')
    // document.getElementById('risposta').innerHtml = 'hai perso dopo ' + lunghezzaArray + ' tentativi'
}else{
    console.log('hai vinto!')
}
console.log(inserimento);


// funzioni

function numeriRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1 )+ min);

}
// funzione che mi servirà nel caso l'utente trova una bomba
function scopertaNumero(array, numero){
    for(var i = 0; i < array.length; i++){
        if(array[i] == numero){
            return true;
        }

    }
    return false;
}







  


 


 








