/*
Aufgabe: 2
Name: Jana Burger
Matrikel: 255076
Datum: 2.4.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

Die Aufgabe wurde in Zusammenarbeit mit Selina Mazzaro und Jacqueline Wagner erstellt.
*/
//let n: number = 64; //Anzahl der Felder
//let i: number = 0;
//let x: number = 0; // gerade Zahlen sind wei�, ungerade sind schwarz.
var zeile = 0;
var a = 1; //Anzahl Reis
document.addEventListener("DOMContentLoaded", function () {
    //Aussehen von Body bleibt immer gleich 
    var b = document.body.style;
    b.width = "450px";
    b.margin = "50px";
    b.backgroundColor = "#F7F7F7";
    var countField = 0;
    //Schachbrett
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            Div();
            if (i % 2 == j % 2) {
                white(countField);
            }
            else {
                black(countField);
            }
            countField++;
        }
    }
});
//Schwarze Divs
function black(_number) {
    var div = document.getElementsByTagName("div");
    var currentDiv = div[_number];
    if (div.length != 0) {
        currentDiv.style.backgroundColor = "black";
        currentDiv.style.color = "white";
        currentDiv.style.textAlign = "center";
    }
}
//Wei�e Divs
function white(_number) {
    var div = document.getElementsByTagName("div");
    var currentDiv = div[_number];
    if (div.length != 0) {
        currentDiv.style.backgroundColor = "white";
        currentDiv.style.color = "black";
        currentDiv.style.textAlign = "center";
    }
}
//Divs erzeugen
function Div() {
    var div = document.createElement("div");
    document.body.appendChild(div);
    div.className = "DivBox";
    //Aussehen von Divs
    var s = div.style;
    s.borderStyle = "solid";
    s.borderColor = "#000000";
    s.borderWidth = "1px";
    s.width = "50px";
    s.height = "50px";
    s.display = "inline-block";
    s.cssFloat = "left";
    s.overflow = "auto";
    //Reis
    div.innerText = "" + a;
    a = a * 2;
}
var div = document.getElementsByTagName("div");
var currentDiv = div[0];
currentDiv.addEventListener("click", clickOnField);
function clickOnField() {
    var state = true;
    var _number;
    var divs = document.getElementsByTagName("div");
    var currentDiv = div[_number];
    if (state) {
        currentDiv.style.backgroundColor = "blue";
        state = false;
        console.log("hey");
    }
}
//# sourceMappingURL=aufg2.js.map