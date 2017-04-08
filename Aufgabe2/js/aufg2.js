/*
Aufgabe: 2
Name: Jana Burger
Matrikel: 255076
Datum: 2.4.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

Die Aufgabe wurde in Zusammenarbeit mit Selina Mazzaro und Jacqueline Wagner erstellt.
*/
document.addEventListener("DOMContentLoaded", function () {
    var n = 64; //felder
    var x = 0; //gerade zahl: wei�, ungerade zahl: schwarz
    var a = 1; //Reis
    var i = 0;
    var zeile = 0;
    // Divs
    function Div() {
        var div = document.createElement("div");
        document.body.appendChild(div);
        div.className = "box";
        //Style der Divs
        var s = div.style;
        s.borderStyle = "solid";
        s.borderColor = "#000000";
        s.borderWidth = "1px";
        s.width = "50px";
        s.height = "50px";
        s.display = "inline-block";
        s.overflow = "auto";
        div.innerText = "" + a;
        a = a * 2;
    }
    for (i; i < n; i++) {
        Div();
        if (x % 2 == zeile % 2) {
            whiteColor();
        }
        else {
            blackColor();
        }
        if (x % 8 == 0) {
            zeile++;
        }
    }
    //wei�e Felder
    function whiteColor() {
        var div = document.getElementsByTagName("div");
        var farbe = div[x].getElementsByClassName("box");
        if (div.length != 0) {
            div[x].style.backgroundColor = "white";
            div[x].style.color = "black";
            div[x].style.textAlign = "center";
            x++;
        }
    }
    //schwarze Felder
    function blackColor() {
        var div = document.getElementsByTagName("div");
        var farbe = div[x].getElementsByClassName("box");
        if (div.length != 0) {
            div[x].style.backgroundColor = "black";
            div[x].style.color = "white";
            div[x].style.textAlign = "center";
            x++;
        }
    }
});
//# sourceMappingURL=aufg2.js.map