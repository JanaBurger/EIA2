/*
Aufgabe: 3 b
Name: Jana Burger
Matrikel: 255076
Datum: 9.4.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.*/


let cards: string[];
let handcards: string[] = [];
let ablagecards: string[] = [];
let nachziehstapel: HTMLElement;
let ablagestapel: HTMLElement;


document.addEventListener("DOMContentLoaded", function(): void {

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

function drawCard(): void {
    //if (typeof handcards !== "undefined") {  <-- wenn ich das drin lasse, verschwindet die Fehlermeldung, jedoch 
    //                                             werden keine divs mehr erzeugt :(
    if (cards.length > 0 && handcards.length < 5) {

        let div: HTMLDivElement = document.createElement("div"); //create div
        document.getElementById("handstapel").appendChild(div); //anhängen an handkarten


        let wert: number = Math.floor((Math.random() * (cards.length - 1)) + 0);

        div.className = "selected";

        div.textContent = cards[wert];

        let auswahl: string = cards[wert];
        cards.splice(wert, 1);
        handcards.push(auswahl);

        div.addEventListener("click", removeCard);
    }

}

function removeCard(_event: MouseEvent): void {
    let target: HTMLElement = <HTMLElement>_event.target;
    console.log(target);
    for (let i: number = 0; i < handcards.length; i++) {
        if (handcards[i] === target.textContent) {
            ablagecards.push(handcards.splice(i, 1)[0]);
            target.parentNode.removeChild(target);
        }
    }
    ablagestapel.textContent = ablagecards[ablagecards.length - 1];
}