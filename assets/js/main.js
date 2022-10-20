// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


function ticketPrice(){

   let userName = document.getElementById("name").value;
   let userKm = parseFloat(document.getElementById("km").value);
   let userAge = parseInt(document.getElementById("age").value);
   let finalPrice = 0.21 * userKm;
   let ticketNumber = Math.floor(Math.random() * 99999) + 1;
   let carriage = Math.floor(Math.random() * 15) + 1;

   const price = 0.21;
   

   console.log(userName)
   console.log(userKm)
   console.log(userAge)
   console.log(finalPrice)
   console.log(carriage)
   console.log(ticketNumber)

      if (userAge === 2){
            finalPrice = finalPrice - (finalPrice * 20)/100;
            document.getElementById ('ticketType').innerHTML = `Biglietto minorenni` 
            document.getElementById ('price').innerHTML = `${finalPrice.toFixed(2)}€`; 
         
         } else if (userAge === 3){
            finalPrice = finalPrice - (finalPrice * 40)/100;
            document.getElementById ('ticketType').innerHTML = `Biglietto over 65`
            document.getElementById ('price').innerHTML = `${finalPrice.toFixed(2)}€`;
         
         } else{ 
            document.getElementById ('ticketType').innerHTML = `Biglietto standard`    
            document.getElementById ('price').innerHTML = `${finalPrice.toFixed(2)}€`;
         }

         document.getElementById('ticketUserName').innerHTML = `${userName}`;
         document.getElementById('ticketCode').innerHTML = `${ticketNumber}`;
         document.getElementById('carriage').innerHTML = `${carriage}`;
  
   
}


