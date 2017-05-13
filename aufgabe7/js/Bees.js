/*
Aufgabe: 7
Name: Jana Burger
Matrikel: 255076
Datum: 7.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.*/
var L7_Classes;
(function (L7_Classes) {
    //Klasse Bienen
    class Bee {
        constructor(_x, _y, _color, _richtung) {
            console.log("Hey, I'm Bob!");
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.richtung = _richtung;
        }
        update() {
            this.draw();
            this.move();
        }
        draw() {
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "black";
            L7_Classes.crc2.fillStyle = "black";
            L7_Classes.crc2.arc(this.x, this.y, 5, 0.5 * Math.PI, 1.5 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = this.color;
            L7_Classes.crc2.fillStyle = this.color;
            L7_Classes.crc2.rect(this.x, this.y - 5, 5, 10);
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "black";
            L7_Classes.crc2.fillStyle = "black";
            L7_Classes.crc2.arc(this.x + 5, this.y, 5, 1.5 * Math.PI, 0.5 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = this.color;
            L7_Classes.crc2.fillStyle = this.color;
            L7_Classes.crc2.arc(this.x - 8, this.y - 5, 4, 0 * Math.PI, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "black";
            L7_Classes.crc2.fillStyle = "black";
            L7_Classes.crc2.moveTo(this.x - 7, this.y - 8);
            L7_Classes.crc2.lineTo(this.x - 5, this.y - 12);
            L7_Classes.crc2.moveTo(this.x - 9, this.y - 8);
            L7_Classes.crc2.lineTo(this.x - 11, this.y - 12);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
        }
        move() {
            this.x += Math.random() * 5 - 3;
            this.y += Math.random() * 4 - 2;
            if (this.x < 0) {
                this.x = 400;
            }
            if (this.y < 0) {
                this.y = 300;
            }
            if (this.y > 300) {
                this.y = 0;
            }
        }
    }
    L7_Classes.Bee = Bee;
    //Klasse Blumen
    class Flowers {
        constructor(_x, _y, _size, _flowerType) {
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.flowerType = _flowerType;
        }
        tulpe(_x, _y) {
            //Stiel
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "darkgreen";
            L7_Classes.crc2.fillStyle = "darkgreen";
            L7_Classes.crc2.moveTo(_x, _y);
            L7_Classes.crc2.lineTo(_x + 5, _y - 25);
            L7_Classes.crc2.lineTo(_x + 8, _y - 25);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
            //Bluete
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "red";
            L7_Classes.crc2.fillStyle = "red";
            L7_Classes.crc2.arc(_x + 8, _y - 33, 8, 0 * Math.PI, 1 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.moveTo(_x, _y - 32);
            L7_Classes.crc2.lineTo(_x, _y - 40);
            L7_Classes.crc2.lineTo(_x + 5, _y - 32);
            L7_Classes.crc2.lineTo(_x + 8, _y - 40);
            L7_Classes.crc2.lineTo(_x + 11, _y - 32);
            L7_Classes.crc2.lineTo(_x + 16, _y - 40);
            L7_Classes.crc2.lineTo(_x + 16, _y - 32);
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            //Blatt
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "darkgreen";
            L7_Classes.crc2.fillStyle = "darkgreen";
            L7_Classes.crc2.arc(_x + 3, _y - 20, 10, 0.5 * Math.PI, 1 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
        }
        margerite(_x, _y) {
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "darkgreen";
            L7_Classes.crc2.fillStyle = "darkgreen";
            //Stiel 
            L7_Classes.crc2.moveTo(_x, _y);
            L7_Classes.crc2.lineTo(_x - 1, _y - 30);
            L7_Classes.crc2.lineTo(_x + 1, _y - 30);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            //Blueten
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "white";
            L7_Classes.crc2.fillStyle = "white";
            L7_Classes.crc2.moveTo(_x + 1, _y - 30);
            L7_Classes.crc2.lineTo(_x + 15, _y - 18);
            L7_Classes.crc2.lineTo(_x + 5, _y - 33);
            L7_Classes.crc2.lineTo(_x + 23, _y - 36);
            L7_Classes.crc2.lineTo(_x + 5, _y - 38);
            L7_Classes.crc2.lineTo(_x + 18, _y - 53);
            L7_Classes.crc2.lineTo(_x + 2, _y - 40);
            L7_Classes.crc2.lineTo(_x + 1, _y - 58);
            L7_Classes.crc2.lineTo(_x - 1, _y - 40);
            L7_Classes.crc2.lineTo(_x - 17, _y - 53);
            L7_Classes.crc2.lineTo(_x - 4, _y - 38);
            L7_Classes.crc2.lineTo(_x - 22, _y - 36);
            L7_Classes.crc2.lineTo(_x - 4, _y - 33);
            L7_Classes.crc2.lineTo(_x - 14, _y - 18);
            L7_Classes.crc2.lineTo(_x - 1, _y - 30);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            //Kreis
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "yellow";
            L7_Classes.crc2.fillStyle = "yellow";
            L7_Classes.crc2.arc(_x, _y - 35, 5, 0, 360);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
        }
        blume(_x, _y, _size) {
            L7_Classes.crc2.beginPath();
            //Stiel
            L7_Classes.crc2.strokeStyle = "darkgreen";
            L7_Classes.crc2.fillStyle = "darkgreen";
            L7_Classes.crc2.moveTo(_x, _y);
            L7_Classes.crc2.lineTo(_x - 1, _y - 30);
            L7_Classes.crc2.lineTo(_x + 1, _y - 30);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            //Blatt
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(_x, _y - 20, 10, 0 * Math.PI, 0.5 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            //Bluete
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "#ba55d3";
            L7_Classes.crc2.fillStyle = "#ba55d3";
            L7_Classes.crc2.arc(_x + 5, _y - 27, 5, 0, 360);
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(_x + 8, _y - 32, 5, 0, 360);
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(_x + 5, _y - 39, 5, 0, 360);
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(_x - 5, _y - 39, 5, 0, 360);
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(_x - 8, _y - 32, 5, 0, 360);
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(_x - 5, _y - 27, 5, 0, 360);
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
            //Innenkreis
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "#FF8C00";
            L7_Classes.crc2.fillStyle = "#FF8C00";
            L7_Classes.crc2.arc(_x, _y - 34, 4, 0, 360);
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.fill();
        }
        draw() {
            switch (this.flowerType) {
                case 1:
                    this.blume(this.x - 25, this.y - 6, 5);
                    break;
                case 2:
                    this.tulpe(this.x + 40, this.y - 5);
                    break;
            }
        }
        update() {
            this.draw();
        }
    }
    L7_Classes.Flowers = Flowers;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=Bees.js.map