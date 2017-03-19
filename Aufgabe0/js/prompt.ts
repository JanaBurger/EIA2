/*
Aufgabe: 0 Arbeitsfähigkeit herstellen
Name: Jana Burger
Matrikel: 255076
Datum: 16.03.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/

document.addEventListener('DOMContentLoaded', function() {
    var name:string;
    name = prompt ("Bitte gebe hier deinen Namen ein");
    var greet:string = "Guten Tag";
    document.body.innerHTML = greet + " " + name;
    });