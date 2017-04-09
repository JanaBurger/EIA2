/*
Aufgabe: 3 b
Name: Jana Burger
Matrikel: 255076
Datum: 9.4.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.*/
/*Diese Aufgabe wurde in Zusammenarbeit mit Jacqueline und Selina erstellt*/
document.addEventListener("DOMContentLoaded", function () {
    var cards = [
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz Koenig", "Herz Ass",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik Koenig", "Pik Ass",
        "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo Koenig", "Karo Ass",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz Koenig", "Kreuz Ass"
    ];
    var handcards;
    var ablagecards;
    var nachziehstapel = document.getElementById("nachziehstapel");
    var ablagestapel = document.getElementById("ablagestapel");
    nachziehstapel.addEventListener("click", ClickEvent);
    function ClickEvent() {
        //if (typeof handcards !== "undefined") {  <-- wenn ich das drin lasse, verschwindet die Fehlermeldung, jedoch 
        //                                             werden keine divs mehr erzeugt :(
        //if (cards.length > 0 && handcards.length < 5) { <-- leider funktioniert die Funktion nicht mehr sobald ich die if 
        //                                                    Anweisung aktiviere
        var div = document.createElement("div"); //create div
        document.getElementById("handstapel").appendChild(div); //anh�ngen an handkarten
        var wert = Math.floor((Math.random() * 31) + 0);
        div.className = "selected";
        div.textContent = cards[wert];
        var auswahl = cards[wert];
        cards.splice(wert, 1);
        handcards.push(auswahl);
        div.addEventListener("click", function () {
            for (var i = 0; i < handcards.length; i++) {
                if (this.textContent == handcards[wert]) {
                    ablagecards.push(handcards[i]);
                    handcards.splice(i, 1);
                    break;
                }
                this.parentNode.removeChild(this);
            }
        });
        console.log(cards);
    }
});
//# sourceMappingURL=aufgabe3b.js.map