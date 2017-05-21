namespace Classes8 {

    //Subklasse Margerite

    export class Margerite extends Blumen { 

        constructor(_x: number, _y: number, _flowerType: string) {
            super(_x, _y, _flowerType);
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
        
        
        draw(): void {
            switch (this.flowerType) {
                case "margerite":
                    this.margerite(this.x + 40, this.y - 5);
                    break;
            }

        }

    }
}