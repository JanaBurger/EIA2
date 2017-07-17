namespace Final {

    export class Background {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {

            this.x = _x;
            this.y = _y;

        }


        //Wolke
        drawWolke(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.strokeStyle = "#ffffff";
            crc2.fillStyle = "#ffffff";
            crc2.arc(_x + 45, _y + 20, 15, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 65, _y + 10, 15, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 85, _y + 10, 15, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 105, _y + 20, 15, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 90, _y + 35, 15, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 63, _y + 38, 15, 0, 360);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 70, _y + 25, 15, 0, 360);
            crc2.stroke();
            crc2.fill();
        }

        //Flughafen
        drawAirport(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "grey";
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x - 100, _y);
            crc2.lineTo(_x - 100, _y - 180);
            crc2.lineTo(_x, _y - 180);
            crc2.stroke();
            crc2.fill();
        }

        drawWindow(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.moveTo(_x - 100, _y - 20);
            crc2.lineTo(_x - 20, _y - 20);
            crc2.lineTo(_x - 20, _y - 30);
            crc2.lineTo(_x - 100, _y - 30);
            crc2.stroke();
            crc2.fill();
        }
        drawTower(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "grey";
            crc2.strokeStyle = "grey";
            crc2.moveTo(_x - 80, _y - 180);
            crc2.lineTo(_x - 80, _y - 260);
            crc2.lineTo(_x - 100, _y - 280);
            crc2.lineTo(_x - 20, _y - 280);
            crc2.lineTo(_x - 40, _y - 260);
            crc2.lineTo(_x - 40, _y - 180);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "grey";
            crc2.strokeStyle = "grey";
            crc2.moveTo(_x - 80, _y - 280);
            crc2.lineTo(_x - 95, _y - 300);
            crc2.lineTo(_x - 25, _y - 300);
            crc2.lineTo(_x - 40, _y - 280);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.fillRect(_x - 75, _y - 260, 30, 10);
            crc2.fill();
        }
        //Landebahn
        drawLandebahn(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "#F4A460";
            crc2.strokeStyle = "#F4A460";
            crc2.fillRect(_x + 200, _y + 360, 350, 40);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 180, _y + 380, 50, 0, 360);
            crc2.stroke();
            crc2.fill();
        }
        drawStreifen(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.strokeStyle = "white";
            crc2.fillRect(_x, _y, 15, 2);
        }


    }
}