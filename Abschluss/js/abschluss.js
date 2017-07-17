var Final;
(function (Final) {
    var canvas;
    Final.airplanes = [];
    Final.trees = [];
    window.addEventListener("load", init);
    let imgData;
    function init(_event) {
        let x;
        let y;
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
        for (var i = 0; i < 10; i++) {
            let randomTree = Math.floor((Math.random() * 1) + 0);
            let _x = (Math.random() * (500 - 240)) + 240;
            let _y = (Math.random() * (380 - 360)) + 330;
            let laub = new Final.Laubbaum(_x + 30, _y - 5);
            laub.draw();
            let tanne = new Final.Tanne(_x, _y);
            tanne.draw();
        }
        for (let i = 0; i < 5; i++) {
            let _x = (Math.random() * (canvas.width - 0)) + 0;
            let _y = (Math.random() * (360 - 0)) + 0;
            var a = new Final.NormalAirplane(_x, _y, Math.random() * 10 + 5, "hsl(" + Math.random() * 360 + ", 80%, 50%)");
            a.draw();
            Final.airplanes.push(a);
            console.log(Final.airplanes);
        }
        //Bild wird gespeichert
        imgData = Final.crc2.getImageData(0, 0, canvas.width, canvas.height);
        window.setTimeout(animate, 30);
    }
    function animate() {
        console.log("Animate called");
        Final.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < 10; i++) {
            let b = Final.airplanes[i];
            b.update();
        }
        window.setTimeout(animate, 30);
    }
})(Final || (Final = {}));
//# sourceMappingURL=abschluss.js.map