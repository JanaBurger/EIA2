/*
Aufgabe: 8
Name: Jana Burger
Matrikel: 255076
Datum: 21.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
Teile der Aufgabe in Zusammenarbeit mit Jacqueline und Selina erstellt*/
var Classes8;
(function (Classes8) {
    var canvas;
    Classes8.n = 10;
    Classes8.bees = [];
    Classes8.flowers = [];
    let tulpe;
    let margerite;
    let blume;
    window.addEventListener("load", init);
    let imgData;
    function init(_event) {
        let x;
        let y;
        canvas = document.getElementsByTagName("canvas")[0];
        Classes8.crc2 = canvas.getContext("2d");
        console.log(canvas);
        //Wiese
        Classes8.crc2.fillStyle = "#00ff00";
        Classes8.crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Himmel
        Classes8.crc2.fillStyle = "lightblue";
        Classes8.crc2.fillRect(0, 0, canvas.width, 120);
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
        for (var i = 0; i < 10; i++) {
            let randomFlower = Math.floor((Math.random() * 3) + 0);
            let _x = (Math.random() * (280 - 0)) + 0;
            let _y = (Math.random() * (300 - 130)) + 130;
            let tulpe = new Classes8.Tulpe(_x - 50, _y + 21, "tulpe");
            Classes8.flowers.push(tulpe);
            tulpe.draw();
            let blume3 = new Classes8.Blume3(_x + 40, _y + 7, "blume");
            Classes8.flowers.push(blume3);
            blume3.draw();
            let margerite = new Classes8.Margerite(_x, _y, "margerite");
            Classes8.flowers.push(margerite);
            margerite.draw();
            console.log(Classes8.flowers);
        }
        //Bild wird gespeichert
        imgData = Classes8.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //neue Biene wird erzeugt
        canvas.addEventListener("click", weitereBiene);
        canvas.addEventListener("push", weitereBiene);
        for (let i = 0; i < 5; i++) {
            var s = new Classes8.Honigbiene(325, 120, Math.random() * 10 + 5, "yellow");
            Classes8.bees.push(s);
            var b = new Classes8.DummeBiene(325, 120, Math.random() * 10 + 5, "yellow");
            Classes8.bees.push(b);
        }
        window.setTimeout(animate, 30);
    }
    //Funktionen 
    //neue Biene wird erzeugt
    function weitereBiene() {
        Classes8.bees.push(new Classes8.DummeBiene(325, 120, Math.random() * 10 + 5, "hsl(" + Math.random() * 360 + ", 80%, 50%)"));
        Classes8.n++;
    }
    //Animation
    function animate() {
        console.log("Animate called");
        Classes8.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < Classes8.n; i++) {
            let b = Classes8.bees[i];
            Classes8.bees[i].update();
        }
        window.setTimeout(animate, 30);
    }
    //Hintergrund
    function drawKorb(_x, _y) {
        Classes8.crc2.beginPath();
        Classes8.crc2.strokeStyle = "#CD853F";
        Classes8.crc2.fillStyle = "#CD853F";
        Classes8.crc2.moveTo(_x, _y);
        Classes8.crc2.lineTo(_x + 15, _y);
        Classes8.crc2.arc(_x + 7.5, _y, 7.5, 1 * Math.PI, 0 * Math.PI);
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
        Classes8.crc2.beginPath();
        Classes8.crc2.moveTo(_x - 5, _y + 10);
        Classes8.crc2.lineTo(_x + 20, _y + 10);
        Classes8.crc2.arc(_x + 7.5, _y + 10, 12.5, 1 * Math.PI, 0 * Math.PI);
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
        Classes8.crc2.beginPath();
        Classes8.crc2.strokeStyle = "black";
        Classes8.crc2.fillStyle = "black";
        Classes8.crc2.arc(_x + 5, _y - 2.5, 2.5, 0 * Math.PI, 2 * Math.PI);
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
    }
    function drawBerg(_x, _y) {
        Classes8.crc2.beginPath();
        Classes8.crc2.strokeStyle = "grey";
        Classes8.crc2.fillStyle = "grey";
        Classes8.crc2.moveTo(_x, _y);
        Classes8.crc2.lineTo(_x + 30, _y - 70);
        Classes8.crc2.lineTo(_x + 60, _y + 0);
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
    }
    function drawKleinerBerg(_x, _y) {
        Classes8.crc2.beginPath();
        Classes8.crc2.strokeStyle = "grey";
        Classes8.crc2.fillStyle = "grey";
        Classes8.crc2.moveTo(_x, _y);
        Classes8.crc2.lineTo(_x + 20, _y - 40);
        Classes8.crc2.lineTo(_x + 40, _y + 0);
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
    }
    function drawMittlererBerg(_x, _y) {
        Classes8.crc2.beginPath();
        Classes8.crc2.strokeStyle = "grey";
        Classes8.crc2.fillStyle = "grey";
        Classes8.crc2.moveTo(_x, _y);
        Classes8.crc2.lineTo(_x + 25, _y - 50);
        Classes8.crc2.lineTo(_x + 50, _y + 0);
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
    }
    function drawWolke(_x, _y) {
        Classes8.crc2.beginPath();
        Classes8.crc2.strokeStyle = "#ffffff";
        Classes8.crc2.fillStyle = "#ffffff";
        Classes8.crc2.moveTo(_x, _y);
        Classes8.crc2.arc(45, 20, 15, 0, 360);
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
        Classes8.crc2.beginPath();
        Classes8.crc2.arc(65, 10, 15, 0, 360);
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
        Classes8.crc2.beginPath();
        Classes8.crc2.arc(85, 10, 15, 0, 360);
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
        Classes8.crc2.beginPath();
        Classes8.crc2.arc(105, 20, 15, 0, 360);
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
        Classes8.crc2.beginPath();
        Classes8.crc2.arc(90, 35, 15, 0, 360);
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
        Classes8.crc2.beginPath();
        Classes8.crc2.arc(63, 38, 15, 0, 360);
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
        Classes8.crc2.beginPath();
        Classes8.crc2.arc(70, 25, 15, 0, 360);
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
    }
    function drawBaum(_x, _y) {
        Classes8.crc2.beginPath();
        Classes8.crc2.strokeStyle = "#8b4513";
        Classes8.crc2.fillStyle = "#8b4513";
        Classes8.crc2.moveTo(_x, _y);
        Classes8.crc2.lineTo(_x, _y - 100);
        Classes8.crc2.lineTo(_x + 25, _y - 100);
        Classes8.crc2.lineTo(_x + 25, _y - 0);
        Classes8.crc2.closePath();
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
        //Krone
        Classes8.crc2.beginPath();
        Classes8.crc2.strokeStyle = "darkgreen";
        Classes8.crc2.fillStyle = "darkgreen";
        Classes8.crc2.moveTo(345, 100);
        Classes8.crc2.beginPath();
        Classes8.crc2.arc(350, 103, 30, 0, 360);
        Classes8.crc2.closePath();
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
        Classes8.crc2.beginPath();
        Classes8.crc2.arc(370, 70, 30, 0, 360);
        Classes8.crc2.closePath();
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
        Classes8.crc2.beginPath();
        Classes8.crc2.arc(335, 50, 30, 0, 360);
        Classes8.crc2.closePath();
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
        Classes8.crc2.beginPath();
        Classes8.crc2.arc(305, 70, 30, 0, 360);
        Classes8.crc2.closePath();
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
        Classes8.crc2.beginPath();
        Classes8.crc2.arc(320, 103, 30, 0, 360);
        Classes8.crc2.closePath();
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
    }
    function drawApfel(_x, _y) {
        Classes8.crc2.beginPath();
        Classes8.crc2.strokeStyle = "red";
        Classes8.crc2.fillStyle = "red";
        Classes8.crc2.arc(_x, _y, 5, 0, 360);
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
    }
    function drawSun(_x, _y) {
        Classes8.crc2.beginPath();
        Classes8.crc2.strokeStyle = "yellow";
        Classes8.crc2.fillStyle = "yellow";
        Classes8.crc2.moveTo(_x, _y);
        Classes8.crc2.arc(_x, _y, 25, 0 * Math.PI, 2 * Math.PI);
        Classes8.crc2.stroke();
        Classes8.crc2.fill();
    }
})(Classes8 || (Classes8 = {}));
//# sourceMappingURL=aufgabe8.js.map