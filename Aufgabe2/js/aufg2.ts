/*
Aufgabe: 2 
Name: Jana Burger
Matrikel: 255076
Datum: 16.03.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

Die Aufgabe wurde in Zusammenarbeit mit Selina Mazzaro und Jacqueline Wagner erstellt.
*/

document.addEventListener('DOMContentLoaded', function() {

    let n: number = 64; //felder
    let x: number = 0; //gerade zahl: weiﬂ, ungerade zahl: schwarz
    let a: number = 1; //Reis
    let i: number = 0;
    let zeile: number = 0;


    // Divs
    function Div(): void {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
        div.className = "box";
        
    //Style der Divs
        let s: CSSStyleDeclaration = div.style;
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
        if (x % 8 == 0 ) {
            zeile++;
        }
    }
    
   //weiﬂe Felder
    function whiteColor(): void {
        let div = document.getElementsByTagName ("div");
        let farbe = div[x].getElementsByClassName("box");
        if (div.length != 0) {
            div[x].style.backgroundColor = "white";
            div[x].style.color = "black";
            div[x].style.textAlign = "center";
            x++;    
        }
    }
    
    //schwarze Felder
    function blackColor(): void {
        let div = document.getElementsByTagName ("div");
        let farbe = div[x].getElementsByClassName ("box");
        if (div.length != 0) {
            div[x].style.backgroundColor = "black";
            div[x].style.color = "white";
            div[x].style.textAlign = "center";
            x++;
        }
    }
     
});