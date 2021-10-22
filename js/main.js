//1. Chiedere l'eta dell'utente
const age = parseInt( prompt("Inserire la propria età.") );
//2. Chiedere quanti km percorrerà
const distance = prompt("Quanti Km percorrerai?");
//3. Calcolare il costo del biglietto
let price = 0.21 * distance;
let message = `Il prezzo del biglietto è: ${price.toFixed(2)} €`
//4. Applicare uno sconto se è under 18-20%
if(age < 18) {
    price -= price * 0.2;
    message = `Hai diritto allo sconto minorenni del 20%.
    Il prezzo del biglietto è: ${price.toFixed(2)}. €`
}
//5. Applicare uno sconto se è over 65-40%
if(age >= 65) {
    price -= price * 0.8;
    message = `Hai diritto allo sconto nonnini del 40%.
    Il prezzo del biglietto è: ${price.toFixed(2)}. €`
}
//6. OUTPUT del risultato del calcolo
document.getElementById("risultato").innerHTML = message;

//document.getElementById("risultato").innerHTML = `Il costo del tuo biglietto sarà: ${price.toFixed(2)} €`