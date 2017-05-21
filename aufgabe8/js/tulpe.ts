namespace Classes8 {

    //Subklasse Tulpe

    export class Tulpe extends Blumen {

        constructor(_x: number, _y: number, _flowerType: string) {
            super(_x, _y, _flowerType);
        }

        draw(): void {

            //Stiel
            crc2.beginPath();
            crc2.strokeStyle = "darkgreen";
            crc2.fillStyle = "darkgreen";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 5, this.y - 25);
            crc2.lineTo(this.x + 8, this.y - 25);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            //Bluete 
            crc2.beginPath();
            crc2.strokeStyle = "red";
            crc2.fillStyle = "red";
            crc2.arc(this.x + 8, this.y - 33, 8, 0 * Math.PI, 1 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 32);
            crc2.lineTo(this.x, this.y - 40);
            crc2.lineTo(this.x + 5, this.y - 32);
            crc2.lineTo(this.x + 8, this.y - 40);
            crc2.lineTo(this.x + 11, this.y - 32);
            crc2.lineTo(this.x + 16, this.y - 40);
            crc2.lineTo(this.x + 16, this.y - 32);
            crc2.stroke();
            crc2.fill();
            //Blatt
            crc2.beginPath();
            crc2.strokeStyle = "darkgreen";
            crc2.fillStyle = "darkgreen";
            crc2.arc(this.x + 3, this.y - 20, 10, 0.5 * Math.PI, 1 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }


    }
}