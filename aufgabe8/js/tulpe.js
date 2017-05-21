var Classes8;
(function (Classes8) {
    //Subklasse Tulpe
    class Tulpe extends Classes8.Blumen {
        constructor(_x, _y, _flowerType) {
            super(_x, _y, _flowerType);
        }
        tulpe(_x, _y) {
            //Stiel
            Classes8.crc2.beginPath();
            Classes8.crc2.strokeStyle = "darkgreen";
            Classes8.crc2.fillStyle = "darkgreen";
            Classes8.crc2.moveTo(_x, _y);
            Classes8.crc2.lineTo(_x + 5, _y - 25);
            Classes8.crc2.lineTo(_x + 8, _y - 25);
            Classes8.crc2.closePath();
            Classes8.crc2.fill();
            Classes8.crc2.stroke();
            //Bluete 
            Classes8.crc2.beginPath();
            Classes8.crc2.strokeStyle = "red";
            Classes8.crc2.fillStyle = "red";
            Classes8.crc2.arc(_x + 8, _y - 33, 8, 0 * Math.PI, 1 * Math.PI);
            Classes8.crc2.closePath();
            Classes8.crc2.fill();
            Classes8.crc2.stroke();
            Classes8.crc2.beginPath();
            Classes8.crc2.moveTo(_x, _y - 32);
            Classes8.crc2.lineTo(_x, _y - 40);
            Classes8.crc2.lineTo(_x + 5, _y - 32);
            Classes8.crc2.lineTo(_x + 8, _y - 40);
            Classes8.crc2.lineTo(_x + 11, _y - 32);
            Classes8.crc2.lineTo(_x + 16, _y - 40);
            Classes8.crc2.lineTo(_x + 16, _y - 32);
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
            //Blatt
            Classes8.crc2.beginPath();
            Classes8.crc2.strokeStyle = "darkgreen";
            Classes8.crc2.fillStyle = "darkgreen";
            Classes8.crc2.arc(_x + 3, _y - 20, 10, 0.5 * Math.PI, 1 * Math.PI);
            Classes8.crc2.closePath();
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
        }
        draw() {
            switch (this.flowerType) {
                case "tulpe":
                    this.tulpe(this.x - 25, this.y - 6);
                    break;
            }
        }
    }
    Classes8.Tulpe = Tulpe;
})(Classes8 || (Classes8 = {}));
//# sourceMappingURL=tulpe.js.map