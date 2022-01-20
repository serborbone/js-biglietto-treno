//prezzo km

const prezzoKm = 0.21;

// richiedere età passeggero

let etaUser = parseInt(prompt('Per iniziare scrivi la tua età:'));


// richiedere numero chilometri da percorrere

let kmViaggio = parseInt(prompt('Quanti chilometri percorrerai durante il viaggio?'));


// calcolare costo euro per km da percorrere

let costoViaggio = kmViaggio * 0.21;


//sconto del 20% per Under 18 con output max 2 num decimali

let scontoU18 = costoViaggio - ((costoViaggio * 20) / 100).toFixed(2);


//sconto del 40% per Over 65 con output max 2 num decimali

let scontoOver65 = costoViaggio - ((costoViaggio * 40) / 100).toFixed(2);


/* VERIFICARE SE IL VALORE INSERITO NEL PROMPT 
  NON E' UN NUMERO */
  
if (isNaN(etaUser) || isNaN(kmViaggio)) {
  alert('Devi inserire un valore numerico!');
} 

// condizione IF

if (etaUser < 18) {

  document.getElementById("price-top").innerHTML = 'Complimenti, da Under 18 hai diritto ad uno sconto del 20% !';
  document.getElementById("price-bottom").innerHTML = 'Il prezzo del biglietto per il viaggio selezionato è: ' + '<span>' + scontoU18 + '</span>' + ' &euro;';

} else if (etaUser > 65) {

  document.getElementById("price-top").innerHTML = 'Complimenti, da Over 65 hai diritto ad uno sconto del 40% !';
  document.getElementById("price-bottom").innerHTML = 'Il prezzo del biglietto per il viaggio selezionato è: ' + '<span>' + scontoOver65 + '</span>' + ' &euro;';

} else if (etaUser) {

  //se etaUser non ha un valore numerico non viene mostrato il prezzo non scontato
  document.getElementById("price-bottom").innerHTML = 'Il prezzo del biglietto per il viaggio selezionato è: ' + '<span>' + costoViaggio + '</span>' + ' &euro;';

}