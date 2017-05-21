var Classes8;
(function (Classes8) {
    //Subklasse Tulpe
    class Tulpe extends Classes8.Blumen {
        constructor(_x, _y, _flowerType) {
            super(_x, _y, _flowerType);
        }
        draw() {
            //Stiel
            Classes8.crc2.beginPath();
            Classes8.crc2.strokeStyle = "darkgreen";
            Classes8.crc2.fillStyle = "darkgreen";
            Classes8.crc2.moveTo(this.x, this.y);
            Classes8.crc2.lineTo(this.x + 5, this.y - 25);
            Classes8.crc2.lineTo(this.x + 8, this.y - 25);
            Classes8.crc2.closePath();
            Classes8.crc2.fill();
            Classes8.crc2.stroke();
            //Bluete 
            Classes8.crc2.beginPath();
            Classes8.crc2.strokeStyle = "red";
            Classes8.crc2.fillStyle = "red";
            Classes8.crc2.arc(this.x + 8, this.y - 33, 8, 0 * Math.PI, 1 * Math.PI);
            Classes8.crc2.closePath();
            Classes8.crc2.fill();
            Classes8.crc2.stroke();
            Classes8.crc2.beginPath();
            Classes8.crc2.moveTo(this.x, this.y - 32);
            Classes8.crc2.lineTo(this.x, this.y - 40);
            Classes8.crc2.lineTo(this.x + 5, this.y - 32);
            Classes8.crc2.lineTo(this.x + 8, this.y - 40);
            Classes8.crc2.lineTo(this.x + 11, this.y - 32);
            Classes8.crc2.lineTo(this.x + 16, this.y - 40);
            Classes8.crc2.lineTo(this.x + 16, this.y - 32);
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
            //Blatt
            Classes8.crc2.beginPath();
            Classes8.crc2.strokeStyle = "darkgreen";
            Classes8.crc2.fillStyle = "darkgreen";
            Classes8.crc2.arc(this.x + 3, this.y - 20, 10, 0.5 * Math.PI, 1 * Math.PI);
            Classes8.crc2.closePath();
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
        }
    }
    Classes8.Tulpe = Tulpe;
})(Classes8 || (Classes8 = {}));
//# sourceMappingURL=tulpe.js.map