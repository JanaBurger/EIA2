/*
Aufgabe: Abschlussarbeit
Name: Jana Burger
Matrikel: 255076
Datum: 20.7.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.*/
var Final;
(function (Final) {
    //Klasse Flugzeuge
    class Airplane {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        move() {
            //Move Funktion
        }
        draw() {
            //Draw Funktion
        }
        update() {
            this.draw();
            this.move();
        }
    }
    Final.Airplane = Airplane;
})(Final || (Final = {}));
//# sourceMappingURL=airplanes.js.map