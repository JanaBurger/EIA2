namespace Final {

    export class StartingAirplane extends Airplane {
        xCoordinate: number;
        yCoordinate: number;
        speed: number;

        constructor(_x: number, _y: number, _size: number, _color: string) {
            super(_x, _y, _size, _color);
            this.speed = 0.03;

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


            if (this.x >= 200) {
     
                    this.x += - 2;
                    this.y += - 1;
                    this.speed = 0.03;
                
            }

            else {
                this.x += (Math.random() * (-3 + 1)) - 1;
                this.y += (Math.random() * (-3 + 1)) + 1;
                this.speed = 0.03;
            }

            console.log("move");

            if (this.x < 0) {
                this.x = 650;
            }
            if (this.x > 650) {
                this.x = 0;
            }

        }




    }


}