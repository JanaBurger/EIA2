var Final;
(function (Final) {
    //Klasse Flugzeuge
    class Airplane {
        constructor(_x, _y, _size, _color) {
            this.setRandomPosition();
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.size = _size;
        }
        draw() {
            //Draw Funktion
        }
        move() {
            //Move Funktion
        }
        update() {
            this.draw();
            this.move();
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
    Final.Airplane = Airplane;
})(Final || (Final = {}));
//# sourceMappingURL=airplanes.js.map