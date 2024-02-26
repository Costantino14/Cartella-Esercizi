// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione 
//per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata


//ESERCIZIO 7:
let titoloPagina= document.getElementsByTagName("h1")
titoloPagina[0].textContent = "Marshall by Amazon"

// ma anche: document.querySelector("h1").innerText= "Marshall by Amazon"

//ESERCIZIO 8:

document.querySelector("body").style.backgroundColor = "#C0C0C0	"

/* anche in questo modo:

let cambiaSfondo = document.getElementsByTagName("body")
cambiaSfondo[0].style.backgroundColor = "grey"
*/

// ESERCIZIO 9:

document.querySelector("footer").children[2].textContent= "Great Russell St, London WC1B 3DG, Regno Unito";

/* Altri metodi:

/let footer= document.querySelector("footer");
footer.children[2].textContent= "Great Russell St, London WC1B 3DG, Regno Unito";

OR:

document.getElementById("indirizzo").innerHTML= "Great Russell St, London WC1B 3DG, Regno Unito"
*/

// ESERCIZIO 10:

let links = document.getElementsByTagName("a")
for (let i=0; i < links.length; i++) {
    links[i].classList.add("noLine")
}

// ESERCIZIO 11:

//Con questa funzione voglio controllare con un bottone sull'index la possibilità o meno di cambiare la visibilità
// delle immagini. Quindi ho collegato la funzione con onclick.
function visibilità() {
    let visibilità = document.getElementsByClassName("immagine")
    for (let i=0; i<visibilità.length; i++ ){
        visibilità[i].classList.toggle("visibile")
    }

}

// Avendo già messo una classe uguale per tutte le immagini della tabella, allora potrei utilizzare 
// le stesse identiche linee di codici ma sostituendo - getElementsByTagName("img") - con 
// - getElementsByClassName("immagine") -



// ESERCIZIO 12: 

//Ogni volta che carico la pagina ogni prezzo cambia colore random
let colorePrezzo = document.getElementsByClassName("prezzo");

for (let i=0; i<colorePrezzo.length; i++){    
    let r = Math.floor(Math.random() *255);
    let g = Math.floor(Math.random() *255);
    let b = Math.floor(Math.random() *255);
    let rgb = "rgb("+r+","+g+","+b+")";
    colorePrezzo[i].style.color = rgb;
}