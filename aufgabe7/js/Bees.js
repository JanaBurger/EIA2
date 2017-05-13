/*
Aufgabe: 7
Name: Jana Burger
Matrikel: 255076
Datum: 13.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
Ein Teil der Aufgabe wurde mit Jacqueline und Selina erstellt.*/
var Classes;
(function (Classes) {
    //Klasse Bienen
    class Bee {
        constructor(_x, _y, _color, _size) {
            this.setRandomPosition();
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.size = _size;
        }
        update() {
            this.draw();
            this.move();
        }
        draw() {
            //Fl�gel
            //            crc2.beginPath();
            //            crc2.moveTo(this.x + 3, this.y - this.size / 2 - 3 - 3 / 2);
            //            crc2.bezierCurveTo(this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3, this.y - 3 + 3 / 2);
            //            crc2.bezierCurveTo(this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3, this.y - 3 - 5 / 2);
            //            crc2.fillStyle = "rgba(255,255,255, 0.8)";
            //            crc2.fill();
            //            crc2.closePath();
            // K�rper
            Classes.crc2.beginPath();
            Classes.crc2.moveTo(this.x, this.y - this.size / 3);
            Classes.crc2.bezierCurveTo(this.x + this.size, this.y - this.size / 2, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            Classes.crc2.bezierCurveTo(this.x - this.size, this.y + this.size / 2, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            Classes.crc2.fillStyle = this.color;
            Classes.crc2.fill();
            Classes.crc2.closePath();
            Classes.crc2.beginPath();
            Classes.crc2.moveTo(this.x, this.y - this.size / 2);
            Classes.crc2.bezierCurveTo(this.x + this.size, this.y - this.size / 4, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            Classes.crc2.bezierCurveTo(this.x - this.size, this.y + this.size / 4, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            Classes.crc2.strokeStyle = "black";
            Classes.crc2.stroke();
            Classes.crc2.closePath();
            //Kopf
            Classes.crc2.beginPath();
            Classes.crc2.moveTo(this.x - 1, this.y + this.size / 2);
            Classes.crc2.bezierCurveTo(this.x - this.size, this.y, this.x - 5, this.y - this.size / 2, this.x - 1, this.y - this.size / 2);
            Classes.crc2.fillStyle = "black";
            Classes.crc2.fill();
            Classes.crc2.closePath();
            //Streifen
            Classes.crc2.beginPath();
            Classes.crc2.moveTo(this.x + 0.25, this.y + this.size / 2);
            Classes.crc2.lineTo(this.x, this.y - this.size / 2);
            Classes.crc2.strokeStyle = "black";
            Classes.crc2.stroke();
            Classes.crc2.closePath();
            Classes.crc2.beginPath();
            Classes.crc2.moveTo(this.x + 2.25, this.y + this.size / 2);
            Classes.crc2.lineTo(this.x + 2.25, this.y - this.size / 2);
            Classes.crc2.strokeStyle = "black";
            Classes.crc2.stroke();
        }
        move() {
            this.x += Math.random() * 5 - 3;
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
        setRandomPosition() {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }
        setRandomStyle() {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    Classes.Bee = Bee;
    //Klasse Blumen
    class Flowers {
        constructor(_x, _y, _flowerType) {
            this.x = _x;
            this.y = _y;
            this.flowerType = _flowerType;
        }
        tulpe(_x, _y) {
            //Stiel
            Classes.crc2.beginPath();
            Classes.crc2.strokeStyle = "darkgreen";
            Classes.crc2.fillStyle = "darkgreen";
            Classes.crc2.moveTo(_x, _y);
            Classes.crc2.lineTo(_x + 5, _y - 25);
            Classes.crc2.lineTo(_x + 8, _y - 25);
            Classes.crc2.closePath();
            Classes.crc2.fill();
            Classes.crc2.stroke();
            //Bluete
            Classes.crc2.beginPath();
            Classes.crc2.strokeStyle = "red";
            Classes.crc2.fillStyle = "red";
            Classes.crc2.arc(_x + 8, _y - 33, 8, 0 * Math.PI, 1 * Math.PI);
            Classes.crc2.closePath();
            Classes.crc2.fill();
            Classes.crc2.stroke();
            Classes.crc2.beginPath();
            Classes.crc2.moveTo(_x, _y - 32);
            Classes.crc2.lineTo(_x, _y - 40);
            Classes.crc2.lineTo(_x + 5, _y - 32);
            Classes.crc2.lineTo(_x + 8, _y - 40);
            Classes.crc2.lineTo(_x + 11, _y - 32);
            Classes.crc2.lineTo(_x + 16, _y - 40);
            Classes.crc2.lineTo(_x + 16, _y - 32);
            Classes.crc2.stroke();
            Classes.crc2.fill();
            //Blatt
            Classes.crc2.beginPath();
            Classes.crc2.strokeStyle = "darkgreen";
            Classes.crc2.fillStyle = "darkgreen";
            Classes.crc2.arc(_x + 3, _y - 20, 10, 0.5 * Math.PI, 1 * Math.PI);
            Classes.crc2.closePath();
            Classes.crc2.stroke();
            Classes.crc2.fill();
        }
        margerite(_x, _y) {
            Classes.crc2.beginPath();
            Classes.crc2.strokeStyle = "darkgreen";
            Classes.crc2.fillStyle = "darkgreen";
            //Stiel 
            Classes.crc2.moveTo(_x, _y);
            Classes.crc2.lineTo(_x - 1, _y - 30);
            Classes.crc2.lineTo(_x + 1, _y - 30);
            Classes.crc2.closePath();
            Classes.crc2.stroke();
            Classes.crc2.fill();
            //Blueten
            Classes.crc2.beginPath();
            Classes.crc2.strokeStyle = "white";
            Classes.crc2.fillStyle = "white";
            Classes.crc2.moveTo(_x + 1, _y - 30);
            Classes.crc2.lineTo(_x + 15, _y - 18);
            Classes.crc2.lineTo(_x + 5, _y - 33);
            Classes.crc2.lineTo(_x + 23, _y - 36);
            Classes.crc2.lineTo(_x + 5, _y - 38);
            Classes.crc2.lineTo(_x + 18, _y - 53);
            Classes.crc2.lineTo(_x + 2, _y - 40);
            Classes.crc2.lineTo(_x + 1, _y - 58);
            Classes.crc2.lineTo(_x - 1, _y - 40);
            Classes.crc2.lineTo(_x - 17, _y - 53);
            Classes.crc2.lineTo(_x - 4, _y - 38);
            Classes.crc2.lineTo(_x - 22, _y - 36);
            Classes.crc2.lineTo(_x - 4, _y - 33);
            Classes.crc2.lineTo(_x - 14, _y - 18);
            Classes.crc2.lineTo(_x - 1, _y - 30);
            Classes.crc2.closePath();
            Classes.crc2.stroke();
            Classes.crc2.fill();
            //Kreis
            Classes.crc2.beginPath();
            Classes.crc2.strokeStyle = "yellow";
            Classes.crc2.fillStyle = "yellow";
            Classes.crc2.arc(_x, _y - 35, 5, 0, 360);
            Classes.crc2.closePath();
            Classes.crc2.stroke();
            Classes.crc2.fill();
        }
        blume(_x, _y) {
            Classes.crc2.beginPath();
            //Stiel
            Classes.crc2.strokeStyle = "darkgreen";
            Classes.crc2.fillStyle = "darkgreen";
            Classes.crc2.moveTo(_x, _y);
            Classes.crc2.lineTo(_x - 1, _y - 30);
            Classes.crc2.lineTo(_x + 1, _y - 30);
            Classes.crc2.closePath();
            Classes.crc2.stroke();
            Classes.crc2.fill();
            //Blatt
            Classes.crc2.beginPath();
            Classes.crc2.arc(_x, _y - 20, 10, 0 * Math.PI, 0.5 * Math.PI);
            Classes.crc2.closePath();
            Classes.crc2.stroke();
            Classes.crc2.fill();
            //Bluete
            Classes.crc2.beginPath();
            Classes.crc2.strokeStyle = "#ba55d3";
            Classes.crc2.fillStyle = "#ba55d3";
            Classes.crc2.arc(_x + 5, _y - 27, 5, 0, 360);
            Classes.crc2.stroke();
            Classes.crc2.fill();
            Classes.crc2.beginPath();
            Classes.crc2.arc(_x + 8, _y - 32, 5, 0, 360);
            Classes.crc2.stroke();
            Classes.crc2.fill();
            Classes.crc2.beginPath();
            Classes.crc2.arc(_x + 5, _y - 39, 5, 0, 360);
            Classes.crc2.stroke();
            Classes.crc2.fill();
            Classes.crc2.beginPath();
            Classes.crc2.arc(_x - 5, _y - 39, 5, 0, 360);
            Classes.crc2.stroke();
            Classes.crc2.fill();
            Classes.crc2.beginPath();
            Classes.crc2.arc(_x - 8, _y - 32, 5, 0, 360);
            Classes.crc2.stroke();
            Classes.crc2.fill();
            Classes.crc2.beginPath();
            Classes.crc2.arc(_x - 5, _y - 27, 5, 0, 360);
            Classes.crc2.stroke();
            Classes.crc2.fill();
            //Innenkreis
            Classes.crc2.beginPath();
            Classes.crc2.strokeStyle = "#FF8C00";
            Classes.crc2.fillStyle = "#FF8C00";
            Classes.crc2.arc(_x, _y - 34, 4, 0, 360);
            Classes.crc2.stroke();
            Classes.crc2.fill();
        }
        draw() {
            switch (this.flowerType) {
                case "tulpe":
                    this.tulpe(this.x - 25, this.y - 6);
                    break;
                case "margerite":
                    this.margerite(this.x + 40, this.y - 5);
                    break;
                case "blume":
                    this.blume(this.x - 30, this.y - 4);
            }
        }
        update() {
            this.draw();
        }
    }
    Classes.Flowers = Flowers;
})(Classes || (Classes = {}));
//# sourceMappingURL=Bees.js.map