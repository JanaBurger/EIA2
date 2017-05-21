var Classes8;
(function (Classes8) {
    //Subklasse Blume3
    class Blume3 extends Classes8.Blumen {
        constructor(_x, _y, _flowerType) {
            super(_x, _y, _flowerType);
        }
        blume(_x, _y) {
            Classes8.crc2.beginPath();
            //Stiel
            Classes8.crc2.strokeStyle = "darkgreen";
            Classes8.crc2.fillStyle = "darkgreen";
            Classes8.crc2.moveTo(_x, _y);
            Classes8.crc2.lineTo(_x - 1, _y - 30);
            Classes8.crc2.lineTo(_x + 1, _y - 30);
            Classes8.crc2.closePath();
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
            //Blatt
            Classes8.crc2.beginPath();
            Classes8.crc2.arc(_x, _y - 20, 10, 0 * Math.PI, 0.5 * Math.PI);
            Classes8.crc2.closePath();
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
            //Bluete
            Classes8.crc2.beginPath();
            Classes8.crc2.strokeStyle = "#ba55d3";
            Classes8.crc2.fillStyle = "#ba55d3";
            Classes8.crc2.arc(_x + 5, _y - 27, 5, 0, 360);
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
            Classes8.crc2.beginPath();
            Classes8.crc2.arc(_x + 8, _y - 32, 5, 0, 360);
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
            Classes8.crc2.beginPath();
            Classes8.crc2.arc(_x + 5, _y - 39, 5, 0, 360);
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
            Classes8.crc2.beginPath();
            Classes8.crc2.arc(_x - 5, _y - 39, 5, 0, 360);
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
            Classes8.crc2.beginPath();
            Classes8.crc2.arc(_x - 8, _y - 32, 5, 0, 360);
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
            Classes8.crc2.beginPath();
            Classes8.crc2.arc(_x - 5, _y - 27, 5, 0, 360);
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
            //Innenkreis
            Classes8.crc2.beginPath();
            Classes8.crc2.strokeStyle = "#FF8C00";
            Classes8.crc2.fillStyle = "#FF8C00";
            Classes8.crc2.arc(_x, _y - 34, 4, 0, 360);
            Classes8.crc2.stroke();
            Classes8.crc2.fill();
        }
        draw() {
            switch (this.flowerType) {
                case "blume":
                    this.blume(this.x - 30, this.y - 4);
            }
        }
    }
    Classes8.Blume3 = Blume3;
})(Classes8 || (Classes8 = {}));
//# sourceMappingURL=blume3.js.map