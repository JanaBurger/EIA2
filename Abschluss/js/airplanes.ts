namespace Final {

    //Klasse Flugzeuge
    export class Airplane {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number, _size: number, _color: string) {
            this.setRandomPosition();
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.size = _size;
        }

        move(): void {
            //Move Funktion
        }

        draw(): void {
            //Draw Funktion
        }



        update(): void {
            this.draw();
            this.move();
        }

        setRandomStyle(): void {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }


        setRandomPosition(): void {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }




    }



}
