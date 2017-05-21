namespace Classes8 {

    export class Honigbiene extends Bienen {
        xCoordinate: number;
        yCoordinate: number;
        speed: number;

        constructor(_x: number, _y: number, _size: number, _color: string) {
            super(_x, _y, _size, _color);
            this.speed = 0.03;
            this.setStartPosition();
            this.setRandomTargetPosition();

        }

        //Koordinaten von zufälliger Blume aus array flowers
        setRandomTargetPosition(): void {
            let getRandomFlower: number = Math.round(Math.random() * (flowers.length - 1));
            this.xCoordinate = flowers[getRandomFlower].x;
            this.yCoordinate = flowers[getRandomFlower].y;
        }

        setStartPosition(): void {
            this.x = 325;
            this.y = 120;
        }

        move(): void {
            let xMove: number = this.xCoordinate - this.x;
            let yMove: number = this.yCoordinate - this.y - 30;
            if (Math.abs(xMove) < 0.5 && Math.abs(yMove) < 0.5)
                this.setRandomTargetPosition();
            else {
                this.x += xMove * this.speed;
                this.y += yMove * this.speed;
            }
        }

        draw(): void {
            // Körper
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - this.size / 3);
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




    }
}