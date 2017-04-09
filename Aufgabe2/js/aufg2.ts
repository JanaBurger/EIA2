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
//let x: number = 0; // gerade Zahlen sind weiﬂ, ungerade sind schwarz.
let zeile: number = 0;
let a: number = 1; //Anzahl Reis

document.addEventListener("DOMContentLoaded", function(): void {

    //Aussehen von Body bleibt immer gleich 
    let b: CSSStyleDeclaration = document.body.style;
    b.width = "450px";
    b.margin = "50px";
    b.backgroundColor = "#F7F7F7";

    let countField: number = 0;
    
    //Schachbrett
    for (let i: number = 0; i < 8; i++) {
        for (let j: number = 0; j < 8; j++) {
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
function black(_number: number): void {
    let div: NodeList = document.getElementsByTagName("div");
    let currentDiv: HTMLDivElement = <HTMLDivElement>div[_number];
    if (div.length != 0) {
        currentDiv.style.backgroundColor = "black";
        currentDiv.style.color = "white";
        currentDiv.style.textAlign = "center";
        // x++;
    }
}
//Weiﬂe Divs
function white(_number: number): void {
    let div: NodeList = document.getElementsByTagName("div");
    let currentDiv: HTMLDivElement = <HTMLDivElement>div[_number];
    if (div.length != 0) {
        currentDiv.style.backgroundColor = "white";
        currentDiv.style.color = "black";
        currentDiv.style.textAlign = "center";
        //  x++;
    }
}
//Divs erzeugen
function Div(): void {
    let div: HTMLDivElement = document.createElement("div");
    document.body.appendChild(div);
    div.className = "DivBox";

    //Aussehen von Divs
    let s: CSSStyleDeclaration = div.style;
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

 let div: NodeList = document.getElementsByTagName("div");
 let currentDiv: HTMLDivElement = <HTMLDivElement>div[0];
 currentDiv.addEventListener ("click", clickOnField);


function clickOnField(): void {
    let state: boolean = true;
    let _number: number;
    let divs: NodeList = document.getElementsByTagName("div");
    let currentDiv: HTMLDivElement = <HTMLDivElement>div[_number];

    if  (state) {
       currentDiv.style.backgroundColor = "blue";
        state = false;
        console.log("hey");
    
    
    
//    document.addEventListener('DOMContentLoaded', function () {
//    var burgerNav = document.getElementById("IconNav");
//    var burgerButton = document.getElementById("burger");
//    var state = true;
//    burgerButton.addEventListener("click", function () {
//        //    console.log("funktioniert");
//        if (state) {
//            burgerNav.style.display = "block";
//            state = false;
//        }
//        else {
//            burgerNav.style.display = "none";
//            state = true;
//        }
//    });
//});
}
}