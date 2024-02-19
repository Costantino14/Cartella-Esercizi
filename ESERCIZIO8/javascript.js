// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer 
(il 90% dei dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare 
la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore 
fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase 
"NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/


//                      INIZIO DATI ASSEGNATI DALL'ESERCIZIO


// OGGETTI CHE RAPRESENTANO GLI UTENTI

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  }
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  }
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  }

  const costa = {
    name: "Costantino",
    lastName: "Grabesu",
    isAmbassador: false,
  }
  
  const giulia = {
    name: "Giulia",
    lastName: "Belli",
    isAmbassador: true,
  }
  

// lista dei prezzi degli acquisti nel carello

let prices = [34, 5, 2]

// costo fisso delle spese di spedizione da sommare a prescindere

const shippingCost = 50

// variabile di controllo per capire quale utente sta effetuando l'acquisto

let utenteCheEffettuaLAcquisto = costa 


//                      FINE DATI ASSEGNATI DALL'ESERCIZIO


//                      INIZIO SVOLGIMENTO PRIMA PARTE



// CALCOLIAMO LA SOMMA DEL CESTELLO

let totaleCestello = 0;

for (let i=0; i < prices.length; i++ ){

    totaleCestello += prices[i];
    
    }

console.log ("Il totale del cestello è:", totaleCestello + "€")


// VEDIAMO SE è AMBASSADOR O MENO

if (utenteCheEffettuaLAcquisto.isAmbassador) {

// APPLICHIAMO LO SCONTO DIRETTAMENTE NELLA VARIABILE TOTALECESTELLO
    
    totaleCestello = totaleCestello *0.7;
    console.log("Hai uno sconto del 30%") 

  } else {
    
// INFORMIAMO IL CLIENTE CHE NON HA DIRITTO ALLO SCONTO, NON ESSENDO AMBASSADOR
                
    console.log("Non hai diritto allo sconto del 30%") 
    
  }

// VEDIAMO ORA SE ADDEBITARE O MENO LE SPESE DI SPEDIZIONE

//Dichiariamo una variabile per gestire il pagamento finale

let totaleDaPagare= 0;
    
if (totaleCestello>100) {

    console.log("Il totale è superiore a 100€, quindi le spese di spedizione sono gratuite")
    totaleDaPagare= totaleCestello

    } else {

    console.log("Il totale è inferiore a 100€, quindi aggiungeremo le spese di spedizione")
    totaleDaPagare = totaleCestello + shippingCost

    }

// MOSTRIAMO LA SPESA COMPLESSIVA DELL'UTENTE
            
console.log("La somma da pagare è:",totaleDaPagare + "€")

//                      FINE SVOLGIMENTO PRIMA PARTE


//                      INIZIO SVOLGIMENTO SECONDA PARTE
  
// CREO UN ARRAY CON TUTTI GLI UTENTI
  
let listaUtenti = [];
listaUtenti.push(marco, paul, amy, costa, giulia);

// CREO UN ARRAY PER GLI AMBASSADOR

let listaAmbassador =[];

// INIZIO IL CICLO FOR PER INDIVIDUARE CHI è AMBASSADOR E CHI NO, AGGIUNGO GLI AMBASSADOR ALL'ARRAY 

for (let i=0; i<listaUtenti.length; i++) {

    if (listaUtenti[i].isAmbassador) {

        console.log(listaUtenti[i].name, listaUtenti[i].lastName,"è un ambassador");
        listaAmbassador.push(listaUtenti[i]);

        } else {

        console.log(listaUtenti[i].name, listaUtenti[i].lastName,"non è un ambassador");

        }
}

//STAMPIAMO LA LISTA DEGLI AMBASSADOR

console.table(listaAmbassador); 


//                      FINE SVOLGIMENTO SECONDA PARTE



