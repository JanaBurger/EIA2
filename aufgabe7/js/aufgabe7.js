/*
Aufgabe: 7
Name: Jana Burger
Matrikel: 255076
Datum: 7.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
Aufgabe wurde mit Selina und Jacqueline erstellt*/
var Classes;
(function (Classes) {
    var canvas;
    let n = 10;
    let bees = [];
    let tulpe;
    let margerite;
    let blume;
    let flowers = [tulpe, margerite, blume];
    window.addEventListener("load", init);
    let imgData;
    function init(_event) {
        let x;
        let y;
        canvas = document.getElementsByTagName("canvas")[0];
        Classes.crc2 = canvas.getContext("2d");
        console.log(canvas);
        //Wiese
        Classes.crc2.fillStyle = "#00ff00";
        Classes.crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Himmel
        Classes.crc2.fillStyle = "lightblue";
        Classes.crc2.fillRect(0, 0, canvas.width, 120);
        drawBerg(0, 120);
        drawKleinerBerg(50, 120);
        drawMittlererBerg(85, 120);
        drawBerg(130, 120);
        drawMittlererBerg(180, 120);
        drawWolke(50, 10);
        drawSun(250, 30);
        drawBaum(320, 230);
        drawApfel(320, 70);
        drawApfel(340, 90);
        drawApfel(305, 110);
        drawApfel(360, 60);
        drawApfel(355, 105);
        drawKorb(325, 120);
        //drawBiene(320, 100);
        for (var i = 0; i < 8; i++) {
            let randomFlower = Math.floor((Math.random() * 3) + 0);
            let _x = (Math.random() * (280 - 0)) + 0;
            let _y = (Math.random() * (250 - 130)) + 130;
            let f = new Classes.Flowers(0, 0, 0, 0);
            f.tulpe(_x - 25, _y - 6);
            f.blume(_x - 10, _y + 5, 6);
            f.blume(_x + 10, _y - 5, 4);
            f.margerite(_x + 40, _y - 5);
            f.tulpe(370, 200);
        }
        //Bild wird gespeichert
        imgData = Classes.crc2.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 10; i++) {
            bees.push(new Classes.Bee(310, 150, "hsl(" + Math.random() * 180 + ", 80%, 50%)", Math.random() * 10 + 5));
        }
        window.setTimeout(animate, 30);
        //neue Biene wird erzeugt
        canvas.addEventListener("click", weitereBiene);
        canvas.addEventListener("push", weitereBiene);
        for (let i = 0; i < 5; i++) {
            let z = Math.random() * (2 - 1 + 1) + 1;
            if (z == 1 || 2) {
                let f = new Classes.Flowers(0, 0, 0, Math.random() * (2 - 1 + 1) + 1);
                f.draw();
            }
        }
        // window.setTimeout(animateFolwers, 0);
    }
    //Funktionen 
    //neue Biene wird erzeugt
    function weitereBiene() {
        bees.push(new Classes.Bee(310, 150, "hsl(" + Math.random() * 180 + ", 80%, 50%)", Math.random() * 10 + 5));
        n++;
    }
    //Animation
    function animate() {
        console.log("Animate called");
        Classes.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < n; i++) {
            let b = bees[i];
            bees[i].update();
        }
        window.setTimeout(animate, 30);
    }
    function drawKorb(_x, _y) {
        Classes.crc2.beginPath();
        Classes.crc2.strokeStyle = "lightbrown";
        Classes.crc2.fillStyle = "lightbrown";
        Classes.crc2.moveTo(_x, _y);
        Classes.crc2.lineTo(_x + 15, _y);
        Classes.crc2.arc(_x + 7.5, _y, 7.5, 1 * Math.PI, 0 * Math.PI);
        Classes.crc2.stroke();
        Classes.crc2.fill();
        Classes.crc2.beginPath();
        Classes.crc2.moveTo(_x - 5, _y + 10);
        Classes.crc2.lineTo(_x + 20, _y + 10);
        Classes.crc2.arc(_x + 7.5, _y + 10, 12.5, 1 * Math.PI, 0 * Math.PI);
        Classes.crc2.stroke();
        Classes.crc2.fill();
        Classes.crc2.beginPath();
        Classes.crc2.strokeStyle = "black";
        Classes.crc2.fillStyle = "black";
        Classes.crc2.arc(_x + 5, _y - 2.5, 2.5, 0 * Math.PI, 2 * Math.PI);
        Classes.crc2.stroke();
        Classes.crc2.fill();
    }
    function drawBerg(_x, _y) {
        Classes.crc2.beginPath();
        Classes.crc2.strokeStyle = "grey";
        Classes.crc2.fillStyle = "grey";
        Classes.crc2.moveTo(_x, _y);
        Classes.crc2.lineTo(_x + 30, _y - 70);
        Classes.crc2.lineTo(_x + 60, _y + 0);
        Classes.crc2.stroke();
        Classes.crc2.fill();
    }
    function drawKleinerBerg(_x, _y) {
        Classes.crc2.beginPath();
        Classes.crc2.strokeStyle = "grey";
        Classes.crc2.fillStyle = "grey";
        Classes.crc2.moveTo(_x, _y);
        Classes.crc2.lineTo(_x + 20, _y - 40);
        Classes.crc2.lineTo(_x + 40, _y + 0);
        Classes.crc2.stroke();
        Classes.crc2.fill();
    }
    function drawMittlererBerg(_x, _y) {
        Classes.crc2.beginPath();
        Classes.crc2.strokeStyle = "grey";
        Classes.crc2.fillStyle = "grey";
        Classes.crc2.moveTo(_x, _y);
        Classes.crc2.lineTo(_x + 25, _y - 50);
        Classes.crc2.lineTo(_x + 50, _y + 0);
        Classes.crc2.stroke();
        Classes.crc2.fill();
    }
    function drawWolke(_x, _y) {
        Classes.crc2.beginPath();
        Classes.crc2.strokeStyle = "#ffffff";
        Classes.crc2.fillStyle = "#ffffff";
        Classes.crc2.moveTo(_x, _y);
        Classes.crc2.arc(45, 20, 15, 0, 360);
        Classes.crc2.stroke();
        Classes.crc2.fill();
        Classes.crc2.beginPath();
        Classes.crc2.arc(65, 10, 15, 0, 360);
        Classes.crc2.stroke();
        Classes.crc2.fill();
        Classes.crc2.beginPath();
        Classes.crc2.arc(85, 10, 15, 0, 360);
        Classes.crc2.stroke();
        Classes.crc2.fill();
        Classes.crc2.beginPath();
        Classes.crc2.arc(105, 20, 15, 0, 360);
        Classes.crc2.stroke();
        Classes.crc2.fill();
        Classes.crc2.beginPath();
        Classes.crc2.arc(90, 35, 15, 0, 360);
        Classes.crc2.stroke();
        Classes.crc2.fill();
        Classes.crc2.beginPath();
        Classes.crc2.arc(63, 38, 15, 0, 360);
        Classes.crc2.stroke();
        Classes.crc2.fill();
        Classes.crc2.beginPath();
        Classes.crc2.arc(70, 25, 15, 0, 360);
        Classes.crc2.stroke();
        Classes.crc2.fill();
    }
    function drawBaum(_x, _y) {
        Classes.crc2.beginPath();
        Classes.crc2.strokeStyle = "#8b4513";
        Classes.crc2.fillStyle = "#8b4513";
        Classes.crc2.moveTo(_x, _y);
        Classes.crc2.lineTo(_x, _y - 100);
        Classes.crc2.lineTo(_x + 25, _y - 100);
        Classes.crc2.lineTo(_x + 25, _y - 0);
        Classes.crc2.closePath();
        Classes.crc2.stroke();
        Classes.crc2.fill();
        //Krone
        Classes.crc2.beginPath();
        Classes.crc2.strokeStyle = "darkgreen";
        Classes.crc2.fillStyle = "darkgreen";
        Classes.crc2.moveTo(345, 100);
        Classes.crc2.beginPath();
        Classes.crc2.arc(350, 103, 30, 0, 360);
        Classes.crc2.closePath();
        Classes.crc2.stroke();
        Classes.crc2.fill();
        Classes.crc2.beginPath();
        Classes.crc2.arc(370, 70, 30, 0, 360);
        Classes.crc2.closePath();
        Classes.crc2.stroke();
        Classes.crc2.fill();
        Classes.crc2.beginPath();
        Classes.crc2.arc(335, 50, 30, 0, 360);
        Classes.crc2.closePath();
        Classes.crc2.stroke();
        Classes.crc2.fill();
        Classes.crc2.beginPath();
        Classes.crc2.arc(305, 70, 30, 0, 360);
        Classes.crc2.closePath();
        Classes.crc2.stroke();
        Classes.crc2.fill();
        Classes.crc2.beginPath();
        Classes.crc2.arc(320, 103, 30, 0, 360);
        Classes.crc2.closePath();
        Classes.crc2.stroke();
        Classes.crc2.fill();
    }
    function drawApfel(_x, _y) {
        Classes.crc2.beginPath();
        Classes.crc2.strokeStyle = "red";
        Classes.crc2.fillStyle = "red";
        Classes.crc2.arc(_x, _y, 5, 0, 360);
        Classes.crc2.stroke();
        Classes.crc2.fill();
    }
    function drawSun(_x, _y) {
        Classes.crc2.beginPath();
        Classes.crc2.strokeStyle = "yellow";
        Classes.crc2.fillStyle = "yellow";
        Classes.crc2.moveTo(_x, _y);
        Classes.crc2.arc(_x, _y, 25, 0 * Math.PI, 2 * Math.PI);
        Classes.crc2.stroke();
        Classes.crc2.fill();
    }
})(Classes || (Classes = {}));
//# sourceMappingURL=aufgabe7.js.map