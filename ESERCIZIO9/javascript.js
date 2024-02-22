/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(num1,num2) {
    if (num1===num2) {
        return (num1+num2)*3;
    } else {
        return num1+num2;
    }
}

console.log(crazySum(1,1))
    

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(num3) {
    let nIntero = parseInt(num3)
    if (nIntero>20 && nIntero<=100 || nIntero===400) {
        return true;
    } 
    return false;
}

console.log(boundary(400))


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(stringa) {
    return stringa.split("").reverse().join(""); // trasforma in array con ogni singola lettera, inverte l'ordine delle posizioni e unisce tutti gli indici per formare una stringa
}

console.log(reverseString("Ciao"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(str) {
    
    let words = str.split(" "); //creiamo un array dividendo la stringa ogni volta che trova uno spazio 
    let finalString =[];
    for (let i=0; i < words.length; i++) { 
        let firstChar = words[i].charAt(0); // assegnamo ad una varialbile la prima lettera del dato (i) dell'array words 
        let uppercaseChar = firstChar.toUpperCase(); // lo facciamo diventare maiuscolo
        let cuttedString = words[i].slice(1); // riuniamo la lettera con il dato (i) dell'array
        let finalWord = uppercaseChar + cuttedString;
        finalString.push(finalWord);    
    }
    return finalString.join(" ");
}

console.log(upperFirst("ciao bello come va?"))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
    let risultato= [];
    for (let i=0; i<n; i++) {
         risultato.push(Math.floor(Math.random() * 11))
        
    }
    return risultato;
}

console.log(giveMeRandom(4))

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(base,altezza) {
    return base*altezza;
}

console.log(area(11,12));




/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(num4) {

    // Trasformo il numero inserito in positivo, così che se viene inserito un numero negativo non mi sballa la differenza assoluta
    let risultato= Math.abs(Math.abs(num4)-19);
    if (risultato>19) {
        risultato*=3;
    } 
    return risultato;
}

console.log(crazyDiff(-39))


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
/*
function codify (parola){
    let lista = parola.split("")
    let primaParola = [];
    let parola1
        for (let i=0; i<4; i++){
            primaParola.push(lista[i]);
            parola1= primaParola.join("")
        }

        if (parola1!=="code") {
            lista.unshift("code");
            parola= lista.join("");
        }
    
        return parola
    }
    console.log(codify("codeScript")) */

// oppure in maniera molto più rapida


function codify (parola){
if (parola.startsWith("code")) {  // qui usiamo startsWith per scoprire se una stringa inizia con: "code"
        return parola;
        } else {
            return "code" + parola;
        }
    }
    console.log(codify("codemultiple"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(num5) {
    let risultato
    let numero = Math.floor(Math.abs(num5))
    if (num5===numero) {
        if (num5%3===0 || num5%7===0) {
            risultato= true;
        } else {
            risultato= false;
        }

    } else{
        risultato= "Valore non accettato dalla funzione";
    }

    return risultato;
}

console.log(check3and7(-7.5))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(stringa1){
    let array1=stringa1.split("");
    array1.pop();
    array1.shift();
    return array1.join("");
}

console.log(cutString("Costantino")); 

/* OPPURE SI PUò FARE

function cutString(stringa1){
    if  (stringa1.length >=2) {
    return stringa1.slice(1,-1)
    } else{
        return "Stringa troppo corta"
    }
    }
    
    console.log(cutString("Costantino"));

*/
