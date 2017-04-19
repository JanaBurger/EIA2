/*
Aufgabe: 3 b
Name: Jana Burger
Matrikel: 255076
Datum: 9.4.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.*/
var cards;
var handcards = [];
var ablagecards = [];
var nachziehstapel;
var ablagestapel;
document.addEventListener("DOMContentLoaded", function () {
    cards = [
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz Koenig", "Herz Ass",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik Koenig", "Pik Ass",
        "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo Koenig", "Karo Ass",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz Koenig", "Kreuz Ass"
    ];
    nachziehstapel = document.getElementById("nachziehstapel");
    ablagestapel = document.getElementById("ablagestapel");
    nachziehstapel.addEventListener("click", drawCard);
    ablagestapel.addEventListener("click", removeCard);
});
function drawCard() {
    //if (typeof handcards !== "undefined") {  <-- wenn ich das drin lasse, verschwindet die Fehlermeldung, jedoch 
    //                                             werden keine divs mehr erzeugt :(
    if (cards.length > 0 && handcards.length < 5) {
        var div_1 = document.createElement("div"); //create div
        document.getElementById("handstapel").appendChild(div_1); //anh�ngen an handkarten
        var wert = Math.floor((Math.random() * (cards.length - 1)) + 0);
        div_1.className = "selected";
        div_1.textContent = cards[wert];
        var auswahl = cards[wert];
        cards.splice(wert, 1);
        handcards.push(auswahl);
        div_1.addEventListener("click", removeCard);
    }
}
function removeCard(_event) {
    var target = _event.target;
    console.log(target);
    for (var i = 0; i < handcards.length; i++) {
        if (handcards[i] === target.textContent) {
            ablagecards.push(handcards.splice(i, 1)[0]);
            target.parentNode.removeChild(target);
        }
    }
    ablagestapel.textContent = ablagecards[ablagecards.length - 1];
}
//# sourceMappingURL=aufgabe3b.js.map