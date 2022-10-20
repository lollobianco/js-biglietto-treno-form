// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


function ticketPrice(){
   let userKm = parseFloat(document.getElementById("km").value);
   let userAge = parseInt(document.getElementById("age").value);
   const price = 0.21;
   let finalPrice;

   console.log(userKm)
   console.log(userAge) 

   if (userAge < 18){
      finalPrice = (0.21 * userKm);
      finalPrice = finalPrice - (finalPrice * 20)/100;
      document.getElementById ('price').innerHTML = `Il prezzo del tuo biglietto è di ${finalPrice.toFixed(2)}€ (20% di sconto)`; 
      console.log('prezzo scontato del 20%: ', finalPrice)
   
   } else if (userAge > 65){
      finalPrice = (0.21 * userKm);
      finalPrice = finalPrice - (finalPrice * 40)/100;
      document.getElementById ('price').innerHTML = `Il prezzo del tuo biglietto è di ${finalPrice.toFixed(2)}€ (40% di sconto)`;
      console.log('prezzo scontato del 40%: ', finalPrice,'EURO')
   
   } else{
      finalPrice = (0.21 * userKm);
      document.getElementById ('price').innerHTML = `Il prezzo del tuo biglietto è di ${finalPrice.toFixed(2)}€`;
      console.log('paghi il prezzo pieno: ', finalPrice,'EURO')
   }
   
}


