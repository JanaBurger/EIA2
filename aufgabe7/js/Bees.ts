/*
Aufgabe: 7
Name: Jana Burger
Matrikel: 255076
Datum: 7.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Classes {

    //Klasse Bienen
    export class Bee {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number, _color: string, _size: number) {
            console.log("Hey, I'm Bob!");
            this.setRandomPosition();
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.size = _size;
        }

        update(): void {
            this.draw();
            this.move();
        }

        draw(): void {
            //Flügel
            crc2.beginPath();
            crc2.moveTo(this.x + 3, this.y - this.size / 2 - 3 - 3 / 2);
            crc2.bezierCurveTo(this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3, this.y - 3 + 3 / 2);
            crc2.bezierCurveTo(this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3, this.y - 3 - 5 / 2);
            crc2.fillStyle = "rgba(255,255,255, 0.8)";
            crc2.fill();
            crc2.closePath();
            //Körper der Biene
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - this.size / 2);
            crc2.bezierCurveTo(this.x + this.size, this.y - this.size / 2, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            crc2.bezierCurveTo(this.x - this.size, this.y + this.size / 2, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - this.size / 2);
            crc2.bezierCurveTo(this.x + this.size, this.y - this.size / 4, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            crc2.bezierCurveTo(this.x - this.size, this.y + this.size / 4, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();
            //Kopf
            crc2.beginPath();
            crc2.moveTo(this.x - 1, this.y + this.size / 2);
            crc2.bezierCurveTo(this.x - this.size, this.y, this.x - 5, this.y - this.size / 2, this.x - 1, this.y - this.size / 2);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
            //Streifen
            crc2.beginPath();
            crc2.moveTo(this.x + 0.25, this.y + this.size / 2);
            crc2.lineTo(this.x, this.y - this.size / 2);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x + 2.25, this.y + this.size / 2);
            crc2.lineTo(this.x + 2.25, this.y - this.size / 2);
            crc2.strokeStyle = "black";
            crc2.stroke();
        }

        move(): void {
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

        setRandomPosition(): void {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }

        setRandomStyle(): void {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }

    }

    //Klasse Blumen

    export class Flowers {
        x: number;
        y: number;
        size: number;
        color: string;
        pointColor: string;
        flowerType: number;

        constructor(_x: number, _y: number, _size: number, _flowerType: number) {
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.flowerType = _flowerType;
        }

        tulpe(_x: number, _y: number): void {

            //Stiel
            crc2.beginPath();
            crc2.strokeStyle = "darkgreen";
            crc2.fillStyle = "darkgreen";
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 5, _y - 25);
            crc2.lineTo(_x + 8, _y - 25);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            //Bluete
            crc2.beginPath();
            crc2.strokeStyle = "red";
            crc2.fillStyle = "red";
            crc2.arc(_x + 8, _y - 33, 8, 0 * Math.PI, 1 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(_x, _y - 32);
            crc2.lineTo(_x, _y - 40);
            crc2.lineTo(_x + 5, _y - 32);
            crc2.lineTo(_x + 8, _y - 40);
            crc2.lineTo(_x + 11, _y - 32);
            crc2.lineTo(_x + 16, _y - 40);
            crc2.lineTo(_x + 16, _y - 32);
            crc2.stroke();
            crc2.fill();
            //Blatt
            crc2.beginPath();
            crc2.strokeStyle = "darkgreen";
            crc2.fillStyle = "darkgreen";
            crc2.arc(_x + 3, _y - 20, 10, 0.5 * Math.PI, 1 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

        margerite(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.strokeStyle = "darkgreen";
            crc2.fillStyle = "darkgreen";
            //Stiel 
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x - 1, _y - 30);
            crc2.lineTo(_x + 1, _y - 30);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            //Blueten
            crc2.beginPath();
            crc2.strokeStyle = "white";
            crc2.fillStyle = "white";
            crc2.moveTo(_x + 1, _y - 30);
            crc2.lineTo(_x + 15, _y - 18);
            crc2.lineTo(_x + 5, _y - 33);
            crc2.lineTo(_x + 23, _y - 36);
            crc2.lineTo(_x + 5, _y - 38);
            crc2.lineTo(_x + 18, _y - 53);
            crc2.lineTo(_x + 2, _y - 40);
            crc2.lineTo(_x + 1, _y - 58);
            crc2.lineTo(_x - 1, _y - 40);
            crc2.lineTo(_x - 17, _y - 53);
            crc2.lineTo(_x - 4, _y - 38);
            crc2.lineTo(_x - 22, _y - 36);
            crc2.lineTo(_x - 4, _y - 33);
            crc2.lineTo(_x - 14, _y - 18);
            crc2.lineTo(_x - 1, _y - 30);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            //Kreis
            crc2.beginPath();
            crc2.strokeStyle = "yellow";
            crc2.fillStyle = "yellow";
            crc2.arc(_x, _y - 35, 5, 0, 360);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

        }

        blume(_x: number, _y: number, _size: number): void {
            crc2.beginPath();
            //Stiel
            crc2.strokeStyle = "darkgreen";
            crc2.fillStyle = "darkgreen";
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x - 1, _y - 30);
            crc2.lineTo(_x + 1, _y - 30);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Blatt
            crc2.beginPath();
            crc2.arc(_x, _y - 20, 10, 0 * Math.PI, 0.5 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Bluete
            crc2.beginPath();
            crc2.strokeStyle = "#ba55d3";
            crc2.fillStyle = "#ba55d3";
            crc2.arc(_x + 5, _y - 27, 5, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 8, _y - 32, 5, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 5, _y - 39, 5, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x - 5, _y - 39, 5, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x - 8, _y - 32, 5, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x - 5, _y - 27, 5, 0, 360);
            crc2.stroke();
            crc2.fill();

            //Innenkreis
            crc2.beginPath();
            crc2.strokeStyle = "#FF8C00";
            crc2.fillStyle = "#FF8C00";
            crc2.arc(_x, _y - 34, 4, 0, 360);
            crc2.stroke();
            crc2.fill();

        }

        draw(): void {
            switch (this.flowerType) {
                case 1:
                    this.blume(this.x - 25, this.y - 6, 5);
                    break;
                case 2:
                    this.tulpe(this.x + 40, this.y - 5);
                    break;
            }

        }

        update(): void {
            this.draw();
        }

    }

}
