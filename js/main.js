//1. Chiedere l'eta dell'utente
const age = parseInt( prompt("Inserire la propria età.") );
//2. Chiedere quanti km percorrerà
const distance = prompt("Quanti Km percorrerai?");
//3. Calcolare il costo del biglietto
let price = 0.21 * distance;
price = price.toFixed(2);
//4. Applicare uno sconto se è under 18-20%
if(age < 18) {
    price = price - ( (price / 100) * 20);
}
//5. Applicare uno sconto se è over 65-40%
if(age >= 65) {
    price = price - ( (price / 100) * 40);
}
//6. OUTPUT del risultato del calcolo
document.getElementById("risultato").innerHTML = "Il costo del tuo biglietto sarà:" + price;