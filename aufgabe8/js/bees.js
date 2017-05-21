/*
Aufgabe: 8
Name: Jana Burger
Matrikel: 255076
Datum: 13.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
Ein Teil der Aufgabe wurde mit Jacqueline und Selina erstellt.*/
var Classes8;
(function (Classes8) {
    //Klasse Bienen
    class Bienen {
        constructor(_x, _y, _size, _color) {
            this.setRandomPosition();
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.size = _size;
        }
        draw() {
            //Draw Funktion
        }
        move() {
            //Move Funktion
        }
        update() {
            this.draw();
            this.move();
        }
        setRandomPosition() {
            //SetRandomPosition Funktion
        }
        setRandomStyle() {
            //setRandomStyle Fznktion
        }
    }
    Classes8.Bienen = Bienen;
})(Classes8 || (Classes8 = {}));
//# sourceMappingURL=bees.js.map