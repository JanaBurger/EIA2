/*
Aufgabe: 3
Name: Jana Burger
Matrikel: 255076
Datum: 6.4.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.*/
/*Diese Aufgabe wurde in Zusammenarbeit mit Jacqueline und Selina erstellt*/
document.addEventListener("DOMContentLoaded", function () {
    var cards = [
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz K�nig", "Herz Ass",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik K�nig", "Pik Ass",
        "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo K�nig", "Karo Ass",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz K�nig", "Kreuz Ass"
    ];
    //Variablen deklarieren
    var handcards;
    var ablagecards;
    var nachziehstapel = document.getElementById("nachziehstapel");
    var ablagestapel = document.getElementById("ablagestapel");
    nachziehstapel.addEventListener("click", clickEvent);
    function clickEvent() {
        if (cards.length > 0 && handcards.length < 5) {
            var wert_1 = Math.floor((Math.random() * 31) + 0);
            var auswahl = cards[wert_1];
            cards.splice(wert_1, 1);
            handcards.push(auswahl);
            var div_1 = document.createElement("div"); //create div
            document.getElementById("handstapel").appendChild(div_1);
            div_1.className = "selected";
            div_1.textContent = cards[wert_1];
            div_1.addEventListener("click", function () {
                for (var i = 0; i < handcards.length; i++) {
                    if (this.textContent == handcards[wert_1]) {
                        ablagecards.push(handcards[i]);
                        handcards.splice(i, 1);
                        break;
                    }
                    this.parentNode.removeChild(this);
                }
            });
            console.log(cards);
        }
    }
});
//# sourceMappingURL=aufgabe3.js.map