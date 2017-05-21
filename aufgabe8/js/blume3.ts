namespace Classes8 {

    //Subklasse Blume3

    export class Blume3 extends Blumen {

        constructor(_x: number, _y: number, _flowerType: string) {
            super(_x, _y, _flowerType);
        } 

        draw(): void {
            crc2.beginPath();
            //Stiel
            crc2.strokeStyle = "darkgreen";
            crc2.fillStyle = "darkgreen";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 1, this.y - 30);
            crc2.lineTo(this.x + 1, this.y - 30);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Blatt
            crc2.beginPath();
            crc2.arc(this.x, this.y - 20, 10, 0 * Math.PI, 0.5 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Bluete
            crc2.beginPath();
            crc2.strokeStyle = "#ba55d3";
            crc2.fillStyle = "#ba55d3";
            crc2.arc(this.x + 5, this.y - 27, 5, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 8, this.y - 32, 5, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 5, this.y - 39, 5, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 5, this.y - 39, 5, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 8, this.y - 32, 5, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 5, this.y - 27, 5, 0, 360);
            crc2.stroke();
            crc2.fill();

            //Innenkreis
            crc2.beginPath();
            crc2.strokeStyle = "#FF8C00";
            crc2.fillStyle = "#FF8C00";
            crc2.arc(this.x, this.y - 34, 4, 0, 360);
            crc2.stroke();
            crc2.fill();

        }
        

    }

}