namespace Classes8 {

    //Subklasse Margerite

    export class Margerite extends Blumen {

        constructor(_x: number, _y: number, _flowerType: string) {
            super(_x, _y, _flowerType);
        }

        draw(): void {
            crc2.beginPath();
            crc2.strokeStyle = "darkgreen";
            crc2.fillStyle = "darkgreen";
            //Stiel 
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 1, this.y - 30);
            crc2.lineTo(this.x + 1, this.y - 30);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            //Blueten
            crc2.beginPath();
            crc2.strokeStyle = "white";
            crc2.fillStyle = "white";
            crc2.moveTo(this.x + 1, this.y - 30);
            crc2.lineTo(this.x + 15, this.y - 18);
            crc2.lineTo(this.x + 5, this.y - 33);
            crc2.lineTo(this.x + 23, this.y - 36);
            crc2.lineTo(this.x + 5, this.y - 38);
            crc2.lineTo(this.x + 18, this.y - 53);
            crc2.lineTo(this.x + 2, this.y - 40);
            crc2.lineTo(this.x + 1, this.y - 58);
            crc2.lineTo(this.x - 1, this.y - 40);
            crc2.lineTo(this.x - 17, this.y - 53);
            crc2.lineTo(this.x - 4, this.y - 38);
            crc2.lineTo(this.x - 22, this.y - 36);
            crc2.lineTo(this.x - 4, this.y - 33);
            crc2.lineTo(this.x - 14, this.y - 18);
            crc2.lineTo(this.x - 1, this.y - 30);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            //Kreis
            crc2.beginPath();
            crc2.strokeStyle = "yellow";
            crc2.fillStyle = "yellow";
            crc2.arc(this.x, this.y - 35, 5, 0, 360);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

        }

    }
}