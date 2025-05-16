// Effetto digitazione per Junior Web Developer

// Primo testo: "Giorgio Stapane"
const text1 = "Giorgio Stapane"; // La stringa da digitare
let index1 = 0; // Variabile per tenere traccia dell'indice

// Secondo testo: "Junior Web Developer"
const text2 = "Junior Web Developer"; // La seconda stringa da digitare
let index2 = 0; // Variabile per tenere traccia dell'indice

// Funzione per digitare il primo testo (Giorgio Stapane)
function typeText1() {
  const element1 = document.getElementById("name"); // Trova l'elemento con id="name"
  if (!element1) return; // Se l'elemento non esiste, esci dalla funzione

  if (index1 < text1.length) { // Se ci sono ancora lettere da digitare
    element1.innerHTML += text1.charAt(index1); // Aggiungi la lettera corrente all'elemento
    index1++; // Aumenta l'indice per la lettera successiva
    setTimeout(typeText1, 100); // Chiama la funzione ricorsivamente con un ritardo di 100ms
  } else {
    // Dopo che "Giorgio Stapane" è stato digitato, avvia la digitazione del secondo testo
    setTimeout(typeText2, 1000); // Aspetta 1 secondo prima di avviare il secondo testo
  }
}

// Funzione per digitare il secondo testo (Junior Web Developer)
function typeText2() {
  const element2 = document.getElementById("typing"); // Trova l'elemento con id="typing"
  if (!element2) return; // Se l'elemento non esiste, esci dalla funzione

  if (index2 < text2.length) { // Se ci sono ancora lettere da digitare
    element2.innerHTML += text2.charAt(index2); // Aggiungi la lettera corrente all'elemento
    index2++; // Aumenta l'indice per la lettera successiva
    setTimeout(typeText2, 100); // Chiama la funzione ricorsivamente con un ritardo di 100ms
  }
}

// Quando il documento è completamente caricato, inizia la digitazione del primo testo
window.addEventListener("DOMContentLoaded", typeText1);



