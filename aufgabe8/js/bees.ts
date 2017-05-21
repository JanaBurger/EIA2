/*
Aufgabe: 8
Name: Jana Burger
Matrikel: 255076
Datum: 13.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
Ein Teil der Aufgabe wurde mit Jacqueline und Selina erstellt.*/

namespace Classes8 {

    //Klasse Bienen
    export class Bienen {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number, _size: number, _color: string) {
            this.setRandomPosition();
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.size = _size;
        }

        draw(): void {
            //Draw Funktion
        }

        move(): void {
            //Move Funktion
        }

        update(): void {
            this.draw();
            this.move();
        }

        setRandomStyle(): void {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }


        setRandomPosition(): void {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }




    }



}
