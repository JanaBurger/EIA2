var Final;
(function (Final) {
    var canvas;
    Final.airplanes = [];
    Final.trees = [];
    let n = 5;
    window.addEventListener("load", init);
    let imgData;
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        Final.crc2 = canvas.getContext("2d");
        console.log(canvas);
        //Wiese
        Final.crc2.fillStyle = "#228B22";
        Final.crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Himmel
        Final.crc2.fillStyle = "lightblue";
        Final.crc2.fillRect(0, 0, canvas.width, 320);
        for (let i = 0; i < 2; i++) {
            let b = new Final.Background(0, 0);
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
        //ver�nderlicher Wald
        for (let i = 0; i < 10; i++) {
            let randomTree = Math.floor((Math.random() * 1) + 0);
            let _x = (Math.random() * (500 - 240)) + 240;
            let _y = (Math.random() * (350 - 350)) + 330;
            let laub = new Final.Laubbaum(_x + 30, _y - 5);
            laub.draw();
            let tanne = new Final.Tanne(_x, _y);
            tanne.draw();
        }
        //Bild wird gespeichert
        imgData = Final.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Aufruf Klick-Funktion
        document.getElementById("flughafen").addEventListener("click", startingAirplane);
        document.getElementById("flughafen").addEventListener("push", startingAirplane);
        document.getElementById("landebahn").addEventListener("click", landingAirplane);
        document.getElementById("landebahn").addEventListener("push", landingAirplane);
        //Normale Flugzeuge fliegen
        for (let i = 0; i < 5; i++) {
            let _x = (Math.random() * (canvas.width - 0)) + 0;
            let _y = (Math.random() * (250 - 10)) + 10;
            let a = new Final.NormalAirplane(_x, _y, Math.random() * 10 + 5, "hsl(" + Math.random() * 360 + ", 80%, 50%)");
            a.draw();
            Final.airplanes.push(a);
            console.log(Final.airplanes);
        }
        window.setTimeout(animate, 30);
    }
    //Funktionen
    //Flugzeug soll starten
    function startingAirplane() {
        console.log("startingCalled");
        let _x = 512;
        let _y = 385;
        let a = new Final.StartingAirplane(_x, _y, Math.random() * 10 + 5, "hsl(" + Math.random() * 360 + ", 80%, 50%)");
        Final.airplanes.push(a);
    }
    //Flugzeug soll landen
    function landingAirplane() {
        let _x = 660;
        let _y = 100;
        let a = new Final.LandingAirplane(_x, _y, Math.random() * 10 + 5, "hsl(" + Math.random() * 360 + ", 80%, 50%)");
        Final.airplanes.push(a);
    }
    //Animation
    function animate() {
        console.log("Animate called");
        Final.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < Final.airplanes.length; i++) {
            //let b: Airplane = airplanes[i];
            Final.airplanes[i].update();
        }
        window.setTimeout(animate, 30);
    }
})(Final || (Final = {}));
//# sourceMappingURL=abschluss.js.map