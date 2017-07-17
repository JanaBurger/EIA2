var Final;
(function (Final) {
    class Tanne extends Final.Trees {
        constructor(_x, _y) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
        }
        draw() {
            Final.crc2.beginPath();
            Final.crc2.fillStyle = "#8B4513";
            Final.crc2.strokeStyle = "#8B4513";
            Final.crc2.moveTo(this.x, this.y);
            Final.crc2.fillRect(this.x, this.y, 10, 10);
            Final.crc2.beginPath();
            Final.crc2.fillStyle = "#006400";
            Final.crc2.strokeStyle = "#006400";
            Final.crc2.moveTo(this.x - 15, this.y);
            Final.crc2.lineTo(this.x + 5, this.y - 15);
            Final.crc2.lineTo(this.x + 25, this.y);
            Final.crc2.stroke();
            Final.crc2.fill();
            Final.crc2.beginPath();
            Final.crc2.moveTo(this.x - 15, this.y - 10);
            Final.crc2.lineTo(this.x + 5, this.y - 25);
            Final.crc2.lineTo(this.x + 25, this.y - 10);
            Final.crc2.stroke();
            Final.crc2.fill();
        }
    }
    Final.Tanne = Tanne;
})(Final || (Final = {}));
//# sourceMappingURL=tanne.js.map