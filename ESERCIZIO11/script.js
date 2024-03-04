
//Array di oggetti 
const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
]

// Dichiaro alcune variabili che mi serviranno per il compito
let lavoro;
let nazione;
let result = [];
let count = 0;

//Inserimento rapido tramite bottoni per il lavoro, li richiamo sull'html con onclick
function insertJob(text) {
    lavoro = document.getElementById("job");
    lavoro.value = text;
}

//Inserimento rapido tramite bottoni per la location, li richiamo sull'html con onclick
function insertLocation(text1) {
    nazione = document.getElementById("nation")
    nazione.value = text1;
}

//Qui parte la ricerca mettendo un event listener "click" sul bottone "SEARCH"
document.getElementById("submit").addEventListener("click", function(event) {
    
  // Assegno il primo valore alla variabile lavoro e poi faccio in modo che sia tutto in minuscolo
  lavoro = document.getElementById("job").value.toLowerCase();
    
  // Assegno il secondo valore alla variabile "nazione" e poi faccio in modo che sia tutto in minuscolo
  nazione = document.getElementById("nation").value.toLowerCase();

  //Questo passaggio mi serve per cancellare i dati di ricerca qualora ci 
  //fossero prima di riniziare una nuova ricerca
  let parent = document.getElementById("numeroRisultati");
  if(parent.firstChild) { 
    pReset(); //Utilizzo la stessa funzione che uso per il resettare.
  }

  //Controllo se sono stati inseriti entrambi i valori dall'utente
  if(lavoro==="" || nazione==="") {
    alert("ENTER THE SEARCH DATA!") //alert per ricordare all'utente di inserire i dati.
    event.preventDefault() //previene l'invio del form
  } else {
    
    //ricerca dei risultati richiesti usando filter, uso .toLowerCase per rendere tutto in
    // minuscolo e poi .includes per cercare le stringhe che l'utente ha inserito
    result = jobs.filter(job => job.title.toLowerCase().includes(lavoro) && job.location.toLowerCase().includes(nazione))
    count = result.length; //Qui semplicemente assegno la lunghezza di result alla variabile count.
    

    // Ma potrei utilizzare anche un ciclo FOR per fare la ricerca:
    // for (let i=0; i<jobs.length; i++) {
    //   if(jobs[i].title.toLowerCase().includes(lavoro) && jobs[i].location.toLowerCase().includes(nazione)) {
    //     count++;
    //     result.push(jobs[i]);
    //   }    
    // }

  
    //Aggiungo un paragrafo all'interno del div "numeroRisultati" inserito nel index.html
    let nuovoElemento = document.createElement("p")
    nuovoElemento.textContent = `Abbiamo trovato ${count} risultati:`;
    document.getElementById("numeroRisultati").appendChild(nuovoElemento);

    //Creo un elenco con i risultati ottenuti creando un elemento "li".  
    for (let i=0; i<result.length; i++) {
      let nuovoElemento1 = document.createElement("li")
      nuovoElemento1.textContent = `JOB TIPE: ${result[i].title} - LOCATION:  ${result[i].location}`;
      document.getElementById("tabella").appendChild(nuovoElemento1);
    }
  }

  //Uso questo comando per far scrollare la pagina verso il basso
  window.scrollBy(0, 500); 
})



//ALCUNE FUNZIONI EXTRA PER RENDERE LA PAGINA PIU INTERESSANTE.


 
//Imposto il bottone reset usando una funzione che collego con onclick direttamente sull'html.
function pReset() {
  let list = document.getElementById("tabella") 
  let list2 = document.getElementById("numeroRisultati")

  //Uso il While per la prima riga.
  while (list2.firstChild){
    list2.removeChild(list2.firstChild);
  }

  //Mi serve per cancellare tutti gli elementi children che si sono formati nella ricerca.
  while (list.firstChild){
    list.removeChild(list.firstChild); 
  }
}


//Funzione toggle per far apparire una finestra una volta che schiaccio il pulsante Account
function toggleWindow() {
  let sezione = document.getElementById("window")
  if(sezione.style.display === "none") {  //la finestra è impostata su display:none, quindi la cambio su block ogni volta che voglio
    sezione.style.display = "block";
  } else {
    sezione.style.display = "none";
  }
}

//Funzione toggle per cambiare colore alla campanella delle notifiche.
function notification() {
  let bell = document.querySelector(".fa-bell") //Ogni volta che clicco
  if(bell.style.color ==="") {  //controlla se non è stato impostato un colore
      bell.style.color = "#c0a008" //se non è stato impostato allora metti questo
  } else {
      bell.style.color = "" //se è stato impostato toglilo.
  }
}

window.onload = function () {

}