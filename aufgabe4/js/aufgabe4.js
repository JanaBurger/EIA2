/*
Aufgabe: 4
Name: Jana Burger
Matrikel: 255076
Datum: 17.4.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.*/
var A4;
(function (A4) {
    window.addEventListener("load", init);
    let crc2;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(canvas);
        //Wiese
        crc2.fillStyle = "#00ff00";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Himmel
        crc2.fillStyle = "lightblue";
        crc2.fillRect(0, 0, canvas.width, 120);
        drawBerg(0, 120);
        drawKleinerBerg(50, 120);
        drawMittlererBerg(85, 120);
        drawBerg(130, 120);
        drawMittlererBerg(180, 120);
        drawWolke(50, 10);
        drawSun(250, 30);
        drawTulpe(70, 225);
        drawTulpe(250, 200);
        drawTulpe(130, 170);
        drawMargerite(200, 220);
        drawMargerite(370, 180);
        drawMargerite(50, 160);
        drawBlume(120, 240);
        drawBlume(20, 190);
        drawBlume(220, 150);
        drawBaum(320, 230);
        drawApfel(320, 70);
        drawApfel(340, 90);
        drawApfel(305, 110);
        drawApfel(360, 60);
        drawApfel(355, 105);
        drawBlume(355, 235);
        for (var i = 0; i < 8; i++) {
            let randomFlower = Math.floor((Math.random() * 3) + 0);
            let _x = (Math.random() * (280 - 0)) + 0;
            let _y = (Math.random() * (250 - 130)) + 130;
            switch (randomFlower) {
                case 0:
                    drawTulpe(_x, _y);
                    break;
                case 1:
                    drawMargerite(_x, _y);
                    break;
                case 2:
                    drawBlume(_x, _y);
                    break;
            }
        }
    }
    function drawBerg(_x, _y) {
        crc2.beginPath();
        crc2.strokeStyle = "grey";
        crc2.fillStyle = "grey";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 30, _y - 70);
        crc2.lineTo(_x + 60, _y + 0);
        crc2.stroke();
        crc2.fill();
    }
    function drawKleinerBerg(_x, _y) {
        crc2.beginPath();
        crc2.strokeStyle = "grey";
        crc2.fillStyle = "grey";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 20, _y - 40);
        crc2.lineTo(_x + 40, _y + 0);
        crc2.stroke();
        crc2.fill();
    }
    function drawMittlererBerg(_x, _y) {
        crc2.beginPath();
        crc2.strokeStyle = "grey";
        crc2.fillStyle = "grey";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 25, _y - 50);
        crc2.lineTo(_x + 50, _y + 0);
        crc2.stroke();
        crc2.fill();
    }
    function drawTulpe(_x, _y) {
        //Stiel
        crc2.beginPath();
        crc2.strokeStyle = "darkgreen";
        crc2.fillStyle = "darkgreen";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 5, _y - 25);
        crc2.lineTo(_x + 8, _y - 25);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //Bluete
        crc2.beginPath();
        crc2.strokeStyle = "red";
        crc2.fillStyle = "red";
        crc2.arc(_x + 8, _y - 33, 8, 0 * Math.PI, 1 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_x, _y - 32);
        crc2.lineTo(_x, _y - 40);
        crc2.lineTo(_x + 5, _y - 32);
        crc2.lineTo(_x + 8, _y - 40);
        crc2.lineTo(_x + 11, _y - 32);
        crc2.lineTo(_x + 16, _y - 40);
        crc2.lineTo(_x + 16, _y - 32);
        crc2.stroke();
        crc2.fill();
        //Blatt
        crc2.beginPath();
        crc2.strokeStyle = "darkgreen";
        crc2.fillStyle = "darkgreen";
        crc2.arc(_x + 3, _y - 20, 10, 0.5 * Math.PI, 1 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    function drawMargerite(_x, _y) {
        crc2.beginPath();
        crc2.strokeStyle = "darkgreen";
        crc2.fillStyle = "darkgreen";
        //Stiel 
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x - 1, _y - 30);
        crc2.lineTo(_x + 1, _y - 30);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        //Blueten
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.fillStyle = "white";
        crc2.moveTo(_x + 1, _y - 30);
        crc2.lineTo(_x + 15, _y - 18);
        crc2.lineTo(_x + 5, _y - 33);
        crc2.lineTo(_x + 23, _y - 36);
        crc2.lineTo(_x + 5, _y - 38);
        crc2.lineTo(_x + 18, _y - 53);
        crc2.lineTo(_x + 2, _y - 40);
        crc2.lineTo(_x + 1, _y - 58);
        crc2.lineTo(_x - 1, _y - 40);
        crc2.lineTo(_x - 17, _y - 53);
        crc2.lineTo(_x - 4, _y - 38);
        crc2.lineTo(_x - 22, _y - 36);
        crc2.lineTo(_x - 4, _y - 33);
        crc2.lineTo(_x - 14, _y - 18);
        crc2.lineTo(_x - 1, _y - 30);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        //Kreis
        crc2.beginPath();
        crc2.strokeStyle = "yellow";
        crc2.fillStyle = "yellow";
        crc2.arc(_x, _y - 35, 5, 0, 360);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    function drawBlume(_x, _y) {
        crc2.beginPath();
        //Stiel
        crc2.strokeStyle = "darkgreen";
        crc2.fillStyle = "darkgreen";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x - 1, _y - 30);
        crc2.lineTo(_x + 1, _y - 30);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        //Blatt
        crc2.beginPath();
        crc2.arc(_x, _y - 20, 10, 0 * Math.PI, 0.5 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        //Bluete
        crc2.beginPath();
        crc2.strokeStyle = "#ba55d3";
        crc2.fillStyle = "#ba55d3";
        crc2.arc(_x + 5, _y - 27, 5, 0, 360);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 8, _y - 32, 5, 0, 360);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 5, _y - 39, 5, 0, 360);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 5, _y - 39, 5, 0, 360);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 8, _y - 32, 5, 0, 360);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 5, _y - 27, 5, 0, 360);
        crc2.stroke();
        crc2.fill();
        //Innenkreis
        crc2.beginPath();
        crc2.strokeStyle = "#FF8C00";
        crc2.fillStyle = "#FF8C00";
        crc2.arc(_x, _y - 34, 4, 0, 360);
        crc2.stroke();
        crc2.fill();
    }
    function drawWolke(_x, _y) {
        crc2.beginPath();
        crc2.strokeStyle = "#ffffff";
        crc2.fillStyle = "#ffffff";
        crc2.moveTo(_x, _y);
        crc2.arc(45, 20, 15, 0, 360);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(65, 10, 15, 0, 360);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(85, 10, 15, 0, 360);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(105, 20, 15, 0, 360);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(90, 35, 15, 0, 360);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(63, 38, 15, 0, 360);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(70, 25, 15, 0, 360);
        crc2.stroke();
        crc2.fill();
    }
    function drawBaum(_x, _y) {
        crc2.beginPath();
        crc2.strokeStyle = "#8b4513";
        crc2.fillStyle = "#8b4513";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 100);
        crc2.lineTo(_x + 25, _y - 100);
        crc2.lineTo(_x + 25, _y - 0);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        //Krone
        crc2.beginPath();
        crc2.strokeStyle = "darkgreen";
        crc2.fillStyle = "darkgreen";
        crc2.moveTo(345, 100);
        crc2.beginPath();
        crc2.arc(350, 103, 30, 0, 360);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(370, 70, 30, 0, 360);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(335, 50, 30, 0, 360);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(305, 70, 30, 0, 360);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(320, 103, 30, 0, 360);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    function drawApfel(_x, _y) {
        crc2.beginPath();
        crc2.strokeStyle = "red";
        crc2.fillStyle = "red";
        crc2.arc(_x, _y, 5, 0, 360);
        crc2.stroke();
        crc2.fill();
    }
    function drawSun(_x, _y) {
        crc2.beginPath();
        crc2.strokeStyle = "yellow";
        crc2.fillStyle = "yellow";
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 25, 0 * Math.PI, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
    }
})(A4 || (A4 = {}));
//# sourceMappingURL=aufgabe4.js.map