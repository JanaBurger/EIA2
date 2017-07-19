namespace Final {

    export var crc2: CanvasRenderingContext2D;
    var canvas: HTMLCanvasElement;

    export let airplanes: Airplane[] = [];
    export let trees: Trees[] = [];

    let n: number = 5;

    window.addEventListener("load", init);

    let imgData: ImageData;

    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(canvas);



        //Wiese
        crc2.fillStyle = "#228B22";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        //Himmel
        crc2.fillStyle = "lightblue";
        crc2.fillRect(0, 0, canvas.width, 320);

        for (let i: number = 0; i < 2; i++) {

            let b: Background = new Background(0, 0);

            b.drawWolke(100, 20);
            b.drawWolke(469, 145);
            b.drawWolke(318, 102);
            b.drawWolke(43, 200);
            b.drawAirport(650, 400);
            b.drawWindow(650, 400);
            b.drawWindow(650, 370);
            b.drawWindow(650, 340);
            b.drawWindow(650, 310);
            b.drawWindow(650, 280);
            b.drawTower(650, 400);
            b.drawLandebahn(0, 0);
            b.drawStreifen(230, 380);
            b.drawStreifen(260, 380);
            b.drawStreifen(290, 380);
            b.drawStreifen(320, 380);
            b.drawStreifen(350, 380);
            b.drawStreifen(380, 380);
            b.drawStreifen(410, 380);
            b.drawStreifen(440, 380);
            b.drawStreifen(470, 380);
            b.drawStreifen(500, 380);
            b.drawStreifen(530, 380);


        }

        //veränderlicher Wald
        for (let i: number = 0; i < 10; i++) {
            let randomTree: number = Math.floor((Math.random() * 1) + 0);
            let _x: number = (Math.random() * (500 - 240)) + 240;
            let _y: number = (Math.random() * (350 - 350)) + 330;

            let laub: Laubbaum = new Laubbaum(_x + 30, _y - 5);
            laub.draw();

            let tanne: Tanne = new Tanne(_x, _y);
            tanne.draw();
        }
        
        

        //Bild wird gespeichert
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
         //Aufruf Klick-Funktion
        canvas.addEventListener("click", startingAirplane);
        canvas.addEventListener("push", startingAirplane);  
              

        //Normale Flugzeuge fliegen
        for (let i: number = 0; i < 5; i++) {
            let _x: number = (Math.random() * (canvas.width - 0)) + 0;
            let _y: number = (Math.random() * (250 - 10)) - 0;

            let a: NormalAirplane = new NormalAirplane(_x, _y, Math.random() * 10 + 5, "hsl(" + Math.random() * 360 + ", 80%, 50%)");
            a.draw();
            airplanes.push(a);
            console.log(airplanes);


        }
        window.setTimeout(animate, 30);
               
    }

    //Funktionen

    //Flugzeug soll starten
    function startingAirplane(): void {
        console.log("startingCalled");

        //        airplanes.push(new StartingAirplane(550, 390, Math.random() * 10 + 5, "hsl(" + Math.random() * 360 + ", 80%, 50%)"));
        //        n++;
        
        let a: StartingAirplane = new StartingAirplane(550, 390, Math.random() * 10 + 5, "hsl(" + Math.random() * 360 + ", 80%, 50%)");
        a.update();
        //n++;

        //        for (let i: number = 0; i < 1; i++) {
        //            //let b: Airplane = airplanes[i];
        //            airplanes[i].update();
        //        }

        airplanes.push(a);

    }

    //Animation
    function animate(): void {
        console.log("Animate called");

        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < 5; i++) {
            //let b: Airplane = airplanes[i];
            airplanes[i].update();
            
        }
       
        window.setTimeout(animate, 30);
    }


}