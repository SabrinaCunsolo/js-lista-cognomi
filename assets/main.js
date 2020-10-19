// Creare un array contenente dei cognomi in ordine casuale.
// Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
// Stampare la lista dei cognomi in ordine alfabetico e comunicare all'utente la posizione in cui si trova il suo cognome (dopo averlo riordinato).

// creo Array con lista cognomi
var lista_cognomi = ["Rossi", "Bianchi", "Ferrari", "Martini", "Verbari", "Chiesa", "Madini", "Gatto"];
console.log(lista_cognomi);

// Chiedo all'utente il cognome
var cognome_utente = prompt("Qual è il tuo cognome?");
console.log(cognome_utente);

// Inserisco cognome_utente nell'array con gli altri cognomi (lista_cognomi)
lista_cognomi.push(cognome_utente);
console.log(lista_cognomi);

// Metto in ordine alfabetico i cognomi nell'array (lista_cognomi)
lista_cognomi.sort();

for (var i = 0; i < lista_cognomi.length; i++) {
    console.log(lista_cognomi[i]);
}

// Devo comunicare all'utente la posizione in cui si trova il suo cognome
var posizione_lista = lista_cognomi.indexOf(cognome_utente);

// verifico se cognome in posizione
// console.log("Cognome in posizione numero" +posizione_lista);
document.writeln("Il tuo cognome si trova in posizione n°" +posizione_lista);
