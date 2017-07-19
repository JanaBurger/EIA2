namespace Final {

    export class StartingAirplane extends Airplane {
        xCoordinate: number;
        yCoordinate: number;
        speed: number;

        constructor(_x: number, _y: number, _size: number, _color: string) {
            super(_x, _y, _size, _color);
            this.setTargetPosition();
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

            //            crc2.rotate(45 * Math.PI / 180);

        }

        setTargetPosition(): void {
            this.xCoordinate = 200;
            this.yCoordinate = 385;

        }

        move(): void {


            this.x += - 1;
            this.y += 0;
            
            if (this.x = 250) {
                this.speed = 0.01;
            }

            if (this.y = 385) {
                this.speed = 0.01;
            }

            if (this.x = 200) {
                this.speed = 0;
            }

            if (this.y = 385) {
                this.speed = 0;
            }


            let xMove: number = this.xCoordinate - this.x;
            let yMove: number = this.yCoordinate - this.y - 30;
            if (Math.abs(xMove) < 0.5 && Math.abs(yMove) < 0.5)
                this.setTargetPosition();


            if (this.x < 0) {
                this.x = 650;
            }
            if (this.x > 650) {
                this.x = 0;
            }

            console.log("move");

        }


    }


}