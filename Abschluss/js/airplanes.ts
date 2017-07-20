/*
Aufgabe: Abschlussarbeit
Name: Jana Burger
Matrikel: 255076
Datum: 20.7.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Final {

    //Klasse Flugzeuge
    export class Airplane {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number, _color: string) {

            this.x = _x;
            this.y = _y;
            this.color = _color;
        }

        move(): void {
            //Move Funktion
        }

        draw(): void {
            //Draw Funktion
        }

        update(): void {
            this.draw();
            this.move();
        }

    }
}
