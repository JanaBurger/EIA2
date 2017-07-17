namespace Final {

    export class Laubbaum extends Trees {

        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;

        }

        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "#8B4513";
            crc2.strokeStyle = "#8B4513";
            crc2.moveTo(this.x, this.y);
            crc2.fillRect(this.x, this.y, 10, 15);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#9ACD32";
            crc2.strokeStyle = "#9ACD32";
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x - 3, this.y - 5, 6, 0, 360);
            crc2.closePath();
            crc2.arc(this.x - 5, this.y - 15, 6, 0, 360);
            crc2.closePath();
            crc2.arc(this.x + 5, this.y - 20, 6, 0, 360);
            crc2.closePath();
            crc2.arc(this.x + 15, this.y - 15, 6, 0, 360);
            crc2.closePath();
            crc2.arc(this.x + 12, this.y - 5, 6, 0, 360);
            crc2.closePath();
            crc2.arc(this.x + 3, this.y - 8, 7, 0, 360);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }

}