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
    var handcards;
    var ablagecards;
    var nachziehstapel = document.getElementById("nachziehstapel");
    var ablagestapel = document.getElementById("ablagestapel");
    nachziehstapel.addEventListener("click", ClickEvent);
    // if (handcards.length < 5 && cards.length != 0) {
    function ClickEvent() {
        var _loop_1 = function(i) {
            var div = document.createElement("div"); //create div
            document.getElementById("handstapel").appendChild(div); //anh�ngen an handkarten
            var wert = Math.floor((Math.random() * 31) + 0);
            div.className = "box";
            var s = div.style;
            s.borderStyle = "1 px solid black";
            s.height = "15em";
            s.width = "10em";
            s.backgroundColor = "green";
            s.cssFloat = "left";
            //if (handcards.length < 5 && cards.length != 0) 
            // let wert: number = Math.floor((Math.random() * 31) + 0);
            div.className = "divBox";
            div.textContent = cards[wert];
            handcards.push(cards[wert]);
            cards.splice(wert, 1); //entfernt Karte von Nachziehstapel
            div.addEventListener("click", function () {
                for (i, i < handcards.length; i++;) {
                    var entferntesKind = document.getElementById("handstapel").removeChild(div);
                    document.getElementById("ablagestapel").appendChild(div);
                    ablagecards.push(handcards[i]);
                    console.log("hallo");
                }
            });
            out_i_1 = i;
        };
        var out_i_1;
        for (var i = 0; i < cards.length; i < 5) {
            _loop_1(i);
            i = out_i_1;
        }
    }
});
//# sourceMappingURL=aufgabe3.js.map