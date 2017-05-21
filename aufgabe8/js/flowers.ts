
namespace Classes8 {

    //Klasse Blumen

    export class Blumen {
        x: number;
        y: number;
        flowerType: string;

        constructor(_x: number, _y: number, _flowerType: string) {
            this.x = _x;
            this.y = _y;
            this.flowerType = _flowerType;
        }
        
        draw(): void {
            //Draw Function
        }

        update(): void {
            this.draw();
        }

    }

}
