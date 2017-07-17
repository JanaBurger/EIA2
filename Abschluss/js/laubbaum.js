var Final;
(function (Final) {
    class Laubbaum extends Final.Trees {
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
            Final.crc2.fillRect(this.x, this.y, 10, 15);
            Final.crc2.stroke();
            Final.crc2.fill();
            Final.crc2.beginPath();
            Final.crc2.fillStyle = "#9ACD32";
            Final.crc2.strokeStyle = "#9ACD32";
            Final.crc2.moveTo(this.x, this.y);
            Final.crc2.arc(this.x - 3, this.y - 5, 6, 0, 360);
            Final.crc2.closePath();
            Final.crc2.arc(this.x - 5, this.y - 15, 6, 0, 360);
            Final.crc2.closePath();
            Final.crc2.arc(this.x + 5, this.y - 20, 6, 0, 360);
            Final.crc2.closePath();
            Final.crc2.arc(this.x + 15, this.y - 15, 6, 0, 360);
            Final.crc2.closePath();
            Final.crc2.arc(this.x + 12, this.y - 5, 6, 0, 360);
            Final.crc2.closePath();
            Final.crc2.arc(this.x + 3, this.y - 8, 7, 0, 360);
            Final.crc2.closePath();
            Final.crc2.stroke();
            Final.crc2.fill();
        }
    }
    Final.Laubbaum = Laubbaum;
})(Final || (Final = {}));
//# sourceMappingURL=laubbaum.js.map