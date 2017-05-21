var Classes8;
(function (Classes8) {
    class Honigbiene extends Classes8.Bienen {
        constructor(_x, _y, _size, _color) {
            super(_x, _y, _size, _color);
            this.speed = 0.03;
            this.setStartPosition();
            this.setRandomTargetPosition();
        }
        draw() {
            // K�rper
            Classes8.crc2.beginPath();
            Classes8.crc2.moveTo(this.x, this.y - this.size / 3);
            Classes8.crc2.bezierCurveTo(this.x + this.size, this.y - this.size / 2, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            Classes8.crc2.bezierCurveTo(this.x - this.size, this.y + this.size / 2, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            Classes8.crc2.fillStyle = this.color;
            Classes8.crc2.fill();
            Classes8.crc2.closePath();
            Classes8.crc2.beginPath();
            Classes8.crc2.moveTo(this.x, this.y - this.size / 2);
            Classes8.crc2.bezierCurveTo(this.x + this.size, this.y - this.size / 4, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            Classes8.crc2.bezierCurveTo(this.x - this.size, this.y + this.size / 4, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            Classes8.crc2.strokeStyle = "black";
            Classes8.crc2.stroke();
            Classes8.crc2.closePath();
            //Kopf
            Classes8.crc2.beginPath();
            Classes8.crc2.moveTo(this.x - 1, this.y + this.size / 2);
            Classes8.crc2.bezierCurveTo(this.x - this.size, this.y, this.x - 5, this.y - this.size / 2, this.x - 1, this.y - this.size / 2);
            Classes8.crc2.fillStyle = "black";
            Classes8.crc2.fill();
            Classes8.crc2.closePath();
            //Streifen
            Classes8.crc2.beginPath();
            Classes8.crc2.moveTo(this.x + 0.25, this.y + this.size / 2);
            Classes8.crc2.lineTo(this.x, this.y - this.size / 2);
            Classes8.crc2.strokeStyle = "black";
            Classes8.crc2.stroke();
            Classes8.crc2.closePath();
            Classes8.crc2.beginPath();
            Classes8.crc2.moveTo(this.x + 2.25, this.y + this.size / 2);
            Classes8.crc2.lineTo(this.x + 2.25, this.y - this.size / 2);
            Classes8.crc2.strokeStyle = "black";
            Classes8.crc2.stroke();
        }
        move() {
            let xMove = this.xCoordinate - this.x;
            let yMove = this.yCoordinate - this.y;
            if (Math.abs(xMove) < 0.5 && Math.abs(yMove) < 0.5)
                this.setRandomTargetPosition();
            else {
                this.x += xMove * this.speed;
                this.y += yMove * this.speed;
            }
        }
        //Koordinaten von zuf�lliger Blume aus array flowers
        setRandomTargetPosition() {
            let randomflower = Math.round(Math.random() * (Classes8.flowers.length - 1));
            this.xCoordinate = Classes8.flowers[randomflower].x;
            this.yCoordinate = Classes8.flowers[randomflower].y;
        }
        setStartPosition() {
            this.x = 325;
            this.y = 120;
        }
        setRandomStyle() {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        setRandomPosition() {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }
    }
    Classes8.Honigbiene = Honigbiene;
})(Classes8 || (Classes8 = {}));
//# sourceMappingURL=honeybees.js.map