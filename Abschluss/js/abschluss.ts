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
            
            //Wolken
            b.drawWolke(100, 20);
            b.drawWolke(469, 145);
            b.drawWolke(318, 102);
            b.drawWolke(43, 200);
            
            //Flughafen
            b.drawAirport(650, 400);
            
            //Fenster in Flughafen
            b.drawWindow(650, 400);
            b.drawWindow(650, 370);
            b.drawWindow(650, 340);
            b.drawWindow(650, 310);
            b.drawWindow(650, 280);
            
            //Turm von Flughafen
            b.drawTower(650, 400);
            
            //Landebahn
            b.drawLandebahn(0, 0);
            
            //Streifen v. Landebahn
            b.drawStreifen(20, 380);
            b.drawStreifen(50, 380);
            b.drawStreifen(80, 380);
            b.drawStreifen(110, 380);
            b.drawStreifen(140, 380);
            b.drawStreifen(170, 380);
            b.drawStreifen(200, 380);
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
        document.getElementById("flughafen").addEventListener("click", startingAirplane);
        document.getElementById("flughafen").addEventListener("push", startingAirplane);

        document.getElementById("landebahn").addEventListener("click", landingAirplane);
        document.getElementById("landebahn").addEventListener("push", landingAirplane);


        //Normale Flugzeuge fliegen
        for (let i: number = 0; i < 5; i++) {
            let _x: number = (Math.random() * (canvas.width - 0)) + 0;
            let _y: number = (Math.random() * (250 - 10)) + 10;

            let a: NormalAirplane = new NormalAirplane(_x, _y, "hsl(" + Math.random() * 360 + ", 80%, 50%)");
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
        let _x: number = 512;
        let _y: number = 385;

        let a: StartingAirplane = new StartingAirplane(_x, _y, "hsl(" + Math.random() * 360 + ", 80%, 50%)");

        airplanes.push(a);
        

    }
    
    //Flugzeug soll landen
    function landingAirplane(): void {
        let _x: number = 660;
        let _y: number = 100;

        let a: LandingAirplane = new LandingAirplane(_x, _y, "hsl(" + Math.random() * 360 + ", 80%, 50%)");
       
        airplanes.push(a);

    }

    //Animation
    function animate(): void {
        console.log("Animate called");

        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < airplanes.length; i++) {
            //let b: Airplane = airplanes[i];
            airplanes[i].update();

        }

        window.setTimeout(animate, 30);
    }


}