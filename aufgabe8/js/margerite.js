var Classes8;
(function (Classes8) {
    //Subklasse Margerite
    class Margerite extends Classes8.Blumen {
        constructor(_x, _y, _flowerType) {
            super(_x, _y, _flowerType);
        }
        margerite(_x, _y) {
            Classes8.crc2.beginPath();
            Classes8.crc2.strokeStyle = "darkgreen";
            Classes8.crc2.fillStyle = "darkgreen";
            //Stiel 
            Classes8.crc2.moveTo(_x, _y);
            Classes8.crc2.lineTo(_x - 1, _y - 30);
            Classes8.crc2.lineTo(_x + 1, _y - 30);
            Classes8.crc2.closePath();
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
            //Blueten
            Classes8.crc2.beginPath();
            Classes8.crc2.strokeStyle = "white";
            Classes8.crc2.fillStyle = "white";
            Classes8.crc2.moveTo(_x + 1, _y - 30);
            Classes8.crc2.lineTo(_x + 15, _y - 18);
            Classes8.crc2.lineTo(_x + 5, _y - 33);
            Classes8.crc2.lineTo(_x + 23, _y - 36);
            Classes8.crc2.lineTo(_x + 5, _y - 38);
            Classes8.crc2.lineTo(_x + 18, _y - 53);
            Classes8.crc2.lineTo(_x + 2, _y - 40);
            Classes8.crc2.lineTo(_x + 1, _y - 58);
            Classes8.crc2.lineTo(_x - 1, _y - 40);
            Classes8.crc2.lineTo(_x - 17, _y - 53);
            Classes8.crc2.lineTo(_x - 4, _y - 38);
            Classes8.crc2.lineTo(_x - 22, _y - 36);
            Classes8.crc2.lineTo(_x - 4, _y - 33);
            Classes8.crc2.lineTo(_x - 14, _y - 18);
            Classes8.crc2.lineTo(_x - 1, _y - 30);
            Classes8.crc2.closePath();
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
            //Kreis
            Classes8.crc2.beginPath();
            Classes8.crc2.strokeStyle = "yellow";
            Classes8.crc2.fillStyle = "yellow";
            Classes8.crc2.arc(_x, _y - 35, 5, 0, 360);
            Classes8.crc2.closePath();
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
        }
        draw() {
            switch (this.flowerType) {
                case "margerite":
                    this.margerite(this.x + 40, this.y - 5);
                    break;
            }
        }
    }
    Classes8.Margerite = Margerite;
})(Classes8 || (Classes8 = {}));
//# sourceMappingURL=margerite.js.map