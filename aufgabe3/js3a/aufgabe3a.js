/*
Aufgabe: 3 b
Name: Jana Burger
Matrikel: 255076
Datum: 9.4.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

Diese Aufgabe wurde in Zusammenarbeit mit Selina und Jacqueline erstellt.
Leider konnten wir die Aufgabe nicht vollst�ndig l�sen, auch nicht in der Gruppe.*/
var A3_Events;
(function (A3_Events) {
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
        /********************************************************************************************************
       Aufgabe 3a
       ********************************************************************************************************/
        var x = 0;
        var divList = document.getElementsByTagName("div");
        for (x; x < 8; x++) {
            divList[x].addEventListener("click", clickEvent);
        }
    });
    //Divs erzeugen
    function feld() {
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
    //Schwarze Divs
    function blackColor(_number) {
        var div = document.getElementsByTagName("div");
        var currentDiv = div[_number];
        if (div.length != 0) {
            currentDiv.style.backgroundColor = "black";
            currentDiv.style.color = "white";
            currentDiv.style.textAlign = "center";
        }
    }
    //Wei�e Divs
    function whiteColor(_number) {
        var div = document.getElementsByTagName("div");
        var currentDiv = div[_number];
        if (div.length != 0) {
            currentDiv.style.backgroundColor = "white";
            currentDiv.style.color = "black";
            currentDiv.style.textAlign = "center";
        }
    }
    /********************************************************************************************************
    Aufgabe 3a
    ********************************************************************************************************/
    var x = 0;
    var divList = document.getElementsByTagName("div");
    var state = true;
    function clickEvent() {
        for (x; x < 8; x++) {
            if (state == true) {
                divList[x].style.borderColor = "yellow";
                state = false;
            }
            else {
                divList[x].style.borderColor = "black";
                state = true;
            }
        }
    }
})(A3_Events || (A3_Events = {}));
//# sourceMappingURL=aufgabe3a.js.map