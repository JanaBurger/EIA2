/*
Aufgabe: Abschlussarbeit
Name: Jana Burger
Matrikel: 255076
Datum: 20.7.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Final {

    export class LandingAirplane extends Airplane {
        speed: number;
        state: string;

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
            this.speed = 0.03;
            this.state = "land";
        }

        draw(): void {
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = this.color;
            crc2.arc(this.x, this.y, 10, 0.5 * Math.PI, 1.5 * Math.PI);
            crc2.lineTo(this.x + 35, this.y - 8);
            crc2.lineTo(this.x + 35, this.y + 8);
            crc2.arc(this.x + 35, this.y, 8, 1.5 * Math.PI, 0.5 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(this.x + 15, this.y + 13, 12, 0.5 * Math.PI, 1.25 * Math.PI);
            crc2.lineTo(this.x + 18, this.y + 5);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(this.x + 20, this.y - 10, 12, 1 * Math.PI, 1.65 * Math.PI);
            crc2.lineTo(this.x + 20, this.y - 10);
            crc2.stroke();
            crc2.fill();
            //Fenster
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "white";
            crc2.arc(this.x, this.y, 2, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 9, this.y, 2, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 18, this.y, 2, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 27, this.y, 2, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 36, this.y, 2, 0, 360);
            crc2.stroke();
            crc2.fill();


        }


        move(): void {

            switch (this.state) {
                case "land":
                    this.x += - 2;
                    this.y += 3;
                    this.speed = 0.03;

                    if (this.x <= 475) {
                        this.state = "drive";
                    }
                    break;

                case "drive":
                    this.x += -2;
                    this.y += 0;
                    this.speed = 0.03;

                    if (this.x <= 160) {
                        this.state = "stop";
                    }
                    break;

                case "stop":
                    this.x += 0;
                    this.y += 0;
                    this.speed = 0;

                    break;

            }
            console.log("move");

        }

    }


}