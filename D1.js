/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
I principali datatype di JavaScript sono tre, il dato Stringa, il dato Numerico e il dato Booleano. 
Il dato Stringa può contenere sia un singolo carattere che un'insieme di essi.
Le stringhe create possono essere comandate con alcuni metodi specifici; una stringa si riconosce per l'utilizzo delle 
doppie virgolette alte oppure dalle singole virgolette alte.
Il dato numerico si utilizza senza distinguere i numeri interi e quelli decimali ma, quest'ultimo, si può scrivere con il 
punto.
Il dato booleano invece può accettare solo il valore True e il valore False. Questo viene utilizzato quando dobbiamo far 
prendere delle decisioni al codice. 
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let myName = "Federico"; */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* 
let stringa1 = "12";
let stringa2 = "20";

let somma = stringa1 + stringa2;
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* 
let x = "12";
*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* 
let myName = "Federico";
console.log(myName);
let myName = "Lanteri";
console.log(myName);

const myName2 = "non error";
console.log(myName2);
const myName2 = "error";
console.log(myName2)
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* 
let sottrazione = 12 - x;
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* 
let name1 = "john"
let name2 = "John"
name1 == name2;
*/
