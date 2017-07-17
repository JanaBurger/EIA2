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
    class DummeBiene extends Classes8.Bienen {
        constructor(_x, _y, _size, _color) {
            super(_x, _y, _size, _color);
        }
        draw() {
            // K�rper
            Classes8.crc2.beginPath();
            Classes8.crc2.moveTo(this.x, this.y - this.size / 3);
            Classes8.crc2.bezierCurveTo(this.x + this.size, this.y - this.size / 2, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            Classes8.crc2.bezierCurveTo(this.x - this.size, this.y + this.size / 2, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            Classes8.crc2.fillStyle = this.color;
            Classes8.crc2.fill();
            Classes8.crc2.closePath();
            Classes8.crc2.beginPath();
            Classes8.crc2.moveTo(this.x, this.y - this.size / 2);
            Classes8.crc2.bezierCurveTo(this.x + this.size, this.y - this.size / 4, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            Classes8.crc2.bezierCurveTo(this.x - this.size, this.y + this.size / 4, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            Classes8.crc2.strokeStyle = "black";
            Classes8.crc2.stroke();
            Classes8.crc2.closePath();
            //Kopf
            Classes8.crc2.beginPath();
            Classes8.crc2.moveTo(this.x - 1, this.y + this.size / 2);
            Classes8.crc2.bezierCurveTo(this.x - this.size, this.y, this.x - 5, this.y - this.size / 2, this.x - 1, this.y - this.size / 2);
            Classes8.crc2.fillStyle = "black";
            Classes8.crc2.fill();
            Classes8.crc2.closePath();
            //Streifen
            Classes8.crc2.beginPath();
            Classes8.crc2.moveTo(this.x + 0.25, this.y + this.size / 2);
            Classes8.crc2.lineTo(this.x, this.y - this.size / 2);
            Classes8.crc2.strokeStyle = "black";
            Classes8.crc2.stroke();
            Classes8.crc2.closePath();
            Classes8.crc2.beginPath();
            Classes8.crc2.moveTo(this.x + 2.25, this.y + this.size / 2);
            Classes8.crc2.lineTo(this.x + 2.25, this.y - this.size / 2);
            Classes8.crc2.strokeStyle = "black";
            Classes8.crc2.stroke();
        }
        move() {
            this.x += Math.random() * 5 - 1;
            this.y += Math.random() * 4 - 2;
            if (this.x < 0) {
                this.x = 400;
            }
            if (this.y < 0) {
                this.y = 250;
            }
            if (this.y > 250) {
                this.y = 0;
            }
        }
    }
    Classes8.DummeBiene = DummeBiene;
})(Classes8 || (Classes8 = {}));
//# sourceMappingURL=dummebiene.js.map