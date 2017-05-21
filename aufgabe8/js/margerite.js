var Classes8;
(function (Classes8) {
    //Subklasse Margerite
    class Margerite extends Classes8.Blumen {
        constructor(_x, _y, _flowerType) {
            super(_x, _y, _flowerType);
        }
        draw() {
            Classes8.crc2.beginPath();
            Classes8.crc2.strokeStyle = "darkgreen";
            Classes8.crc2.fillStyle = "darkgreen";
            //Stiel 
            Classes8.crc2.moveTo(this.x, this.y);
            Classes8.crc2.lineTo(this.x - 1, this.y - 30);
            Classes8.crc2.lineTo(this.x + 1, this.y - 30);
            Classes8.crc2.closePath();
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
            //Blueten
            Classes8.crc2.beginPath();
            Classes8.crc2.strokeStyle = "white";
            Classes8.crc2.fillStyle = "white";
            Classes8.crc2.moveTo(this.x + 1, this.y - 30);
            Classes8.crc2.lineTo(this.x + 15, this.y - 18);
            Classes8.crc2.lineTo(this.x + 5, this.y - 33);
            Classes8.crc2.lineTo(this.x + 23, this.y - 36);
            Classes8.crc2.lineTo(this.x + 5, this.y - 38);
            Classes8.crc2.lineTo(this.x + 18, this.y - 53);
            Classes8.crc2.lineTo(this.x + 2, this.y - 40);
            Classes8.crc2.lineTo(this.x + 1, this.y - 58);
            Classes8.crc2.lineTo(this.x - 1, this.y - 40);
            Classes8.crc2.lineTo(this.x - 17, this.y - 53);
            Classes8.crc2.lineTo(this.x - 4, this.y - 38);
            Classes8.crc2.lineTo(this.x - 22, this.y - 36);
            Classes8.crc2.lineTo(this.x - 4, this.y - 33);
            Classes8.crc2.lineTo(this.x - 14, this.y - 18);
            Classes8.crc2.lineTo(this.x - 1, this.y - 30);
            Classes8.crc2.closePath();
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
            //Kreis
            Classes8.crc2.beginPath();
            Classes8.crc2.strokeStyle = "yellow";
            Classes8.crc2.fillStyle = "yellow";
            Classes8.crc2.arc(this.x, this.y - 35, 5, 0, 360);
            Classes8.crc2.closePath();
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
        }
    }
    Classes8.Margerite = Margerite;
})(Classes8 || (Classes8 = {}));
//# sourceMappingURL=margerite.js.map