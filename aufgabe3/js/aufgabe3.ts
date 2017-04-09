/*
Aufgabe: 3 
Name: Jana Burger
Matrikel: 255076
Datum: 6.4.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.*/

/*Diese Aufgabe wurde in Zusammenarbeit mit Jacqueline und Selina erstellt*/

document.addEventListener("DOMContentLoaded", function(): void {
    
    let cards: string[] = [
    "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz Ass",
    "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik Ass",
    "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo Ass",
    "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz Ass"
    ];
    
    
    //Variablen deklarieren
    let handcards: string[];
    let ablagecards: string[]; 
    let nachziehstapel: HTMLElement = document.getElementById("nachziehstapel");
    let ablagestapel: HTMLElement = document.getElementById("ablagestapel");

    
    nachziehstapel.addEventListener("click", clickEvent);
    function clickEvent () {
        if (cards.length > 0 && handcards.length < 5) {
        let wert: number = Math.floor((Math.random() * 31) + 0);      
        
        let auswahl: string = cards[wert];
        cards.splice(wert, 1);
        handcards.push(auswahl);
            
        let div: HTMLDivElement = document.createElement("div"); //create div
        document.getElementById("handstapel").appendChild(div);
        div.className = "selected"; 
        div.textContent = cards[wert];   

        div.addEventListener("click", function (): void {
           for (let i: number = 0; i < handcards.length; i++) {
                    if (this.textContent == handcards[wert]) {
                   
                        ablagecards.push(handcards[i]);
                     
                        handcards.splice(i, 1);
                        break;
        }
        this.parentNode.removeChild(this);
            }});
        console.log (cards);
  
    }}
});