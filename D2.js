/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = 30;
let num2 = 57;

if (num1 > num2) {
  console.log(num1 + " è maggiore di " + num2);
} else if (num1 < num2) {
  console.log(num1 + " è minore di " + num2);
} else {
  console.log(num2 + " è uguale a " + num1);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num3 = 8;

if (num3 !== 5) {
  console.log(num3 + " is not equal to 5");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let num4 = 10;

if (num4 % 5 === 0) {
  console.log(num4 + " è perfettamente divisibile per 5");
} else {
  console.log(num4 + " non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numInt1 = 9;
let numInt2 = 1;

if (numInt1 === 8 || numInt1 + numInt2 === 8 || numInt1 - numInt2 === 8 || numInt2 - numInt1 === 8) {
  console.log("Fantastico! Il valore è 8!");
} else "Peccato, niente 8...";

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 67;

if (totalShoppingCart > 50) {
  console.log("Hai diritto alla spedizione gratuita! Il totale da pagare è " + totalShoppingCart + " euro.");
} else if (totalShoppingCart <= 50) {
  console.log(
    "La spedizione ha un costo fisso di 10 euro. Il tuo totale ammonta a " + (totalShoppingCart + 10) + " euro."
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let ShoppingCart = 43;
let blkFrDisc = (ShoppingCart / 100) * 20;
let totalShoppingCart1 = blkFrDisc;

if (totalShoppingCart1 > 50) {
  console.log(
    "È stato applicato uno sconto del 20% sul totale! Inoltre hai diritto alla spedizione gratuita! Il tuo totale da pagare è " +
      totalShoppingCart1 +
      " euro."
  );
} else if (totalShoppingCart1 <= 50) {
  console.log(
    "È stato applicato uno sconto del 20% sul totale! La spedizione ha un costo fisso di 10 euro. Il tuo totale ammonta a " +
      (totalShoppingCart1 + 10) +
      " euro."
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const chickens = 16;
const cows = 8;
const sheeps = 23;

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const x = 6;

if (typeof x === "number") {
  console.log(x + " è un numero");
} else {
  console.log(x + " non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let numA = 7;
if (numA % 2 === 0) {
  console.log(numA + " è pari");
} else {
  console.log(numA + " è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/

let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let arr1 = [];
arr1.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arr1);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
arr1[9] = 100;
console.log(arr1);
