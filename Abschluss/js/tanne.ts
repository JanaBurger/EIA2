namespace Final {

    export class Tanne extends Trees {

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
            crc2.fillRect(this.x, this.y, 10, 10);
            crc2.beginPath();
            crc2.fillStyle = "#006400";
            crc2.strokeStyle = "#006400";
            crc2.moveTo(this.x - 15, this.y);
            crc2.lineTo(this.x + 5, this.y - 15);
            crc2.lineTo(this.x + 25, this.y);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x - 15, this.y - 10);
            crc2.lineTo(this.x + 5, this.y - 25);
            crc2.lineTo(this.x + 25, this.y - 10);
            crc2.stroke();
            crc2.fill();
        }

    }
}