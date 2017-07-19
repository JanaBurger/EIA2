var Final;
(function (Final) {
    class StartingAirplane extends Final.Airplane {
        constructor(_x, _y, _size, _color) {
            super(_x, _y, _size, _color);
            this.setTargetPosition();
        }
        draw() {
            Final.crc2.beginPath();
            Final.crc2.strokeStyle = "black";
            Final.crc2.fillStyle = this.color;
            Final.crc2.arc(this.x, this.y, 10, 0.5 * Math.PI, 1.5 * Math.PI);
            Final.crc2.lineTo(this.x + 35, this.y - 8);
            Final.crc2.lineTo(this.x + 35, this.y + 8);
            Final.crc2.arc(this.x + 35, this.y, 8, 1.5 * Math.PI, 0.5 * Math.PI);
            Final.crc2.closePath();
            Final.crc2.stroke();
            Final.crc2.fill();
            Final.crc2.beginPath();
            Final.crc2.fillStyle = "white";
            Final.crc2.arc(this.x + 15, this.y + 13, 12, 0.5 * Math.PI, 1.25 * Math.PI);
            Final.crc2.lineTo(this.x + 18, this.y + 5);
            Final.crc2.closePath();
            Final.crc2.stroke();
            Final.crc2.fill();
            Final.crc2.beginPath();
            Final.crc2.fillStyle = "white";
            Final.crc2.arc(this.x + 20, this.y - 10, 12, 1 * Math.PI, 1.65 * Math.PI);
            Final.crc2.lineTo(this.x + 20, this.y - 10);
            Final.crc2.stroke();
            Final.crc2.fill();
            //Fenster
            Final.crc2.beginPath();
            Final.crc2.strokeStyle = "black";
            Final.crc2.fillStyle = "white";
            Final.crc2.arc(this.x, this.y, 2, 0, 360);
            Final.crc2.stroke();
            Final.crc2.fill();
            Final.crc2.beginPath();
            Final.crc2.arc(this.x + 9, this.y, 2, 0, 360);
            Final.crc2.stroke();
            Final.crc2.fill();
            Final.crc2.beginPath();
            Final.crc2.arc(this.x + 18, this.y, 2, 0, 360);
            Final.crc2.stroke();
            Final.crc2.fill();
            Final.crc2.beginPath();
            Final.crc2.arc(this.x + 27, this.y, 2, 0, 360);
            Final.crc2.stroke();
            Final.crc2.fill();
            Final.crc2.beginPath();
            Final.crc2.arc(this.x + 36, this.y, 2, 0, 360);
            Final.crc2.stroke();
            Final.crc2.fill();
            //            crc2.rotate(45 * Math.PI / 180);
        }
        setTargetPosition() {
            this.xCoordinate = 200;
            this.yCoordinate = 385;
        }
        move() {
            //this.x += - 3;
            //this.y += 0;
            let xMove = this.xCoordinate - this.x;
            let yMove = this.yCoordinate - this.y - 30;
            if (Math.abs(xMove) < 0.5 && Math.abs(yMove) < 0.5)
                this.setTargetPosition();
            if (this.x < 0) {
                this.x = 650;
            }
            if (this.x > 650) {
                this.x = 0;
            }
            console.log("move");
        }
    }
    Final.StartingAirplane = StartingAirplane;
})(Final || (Final = {}));
//# sourceMappingURL=startingAirplane.js.map