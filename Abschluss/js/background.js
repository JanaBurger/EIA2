/*
Aufgabe: Abschlussarbeit
Name: Jana Burger
Matrikel: 255076
Datum: 20.7.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.*/
var Final;
(function (Final) {
    class Background {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Wolke
        drawWolke(_x, _y) {
            Final.crc2.beginPath();
            Final.crc2.strokeStyle = "#ffffff";
            Final.crc2.fillStyle = "#ffffff";
            Final.crc2.arc(_x + 45, _y + 20, 15, 0, 360);
            Final.crc2.stroke();
            Final.crc2.fill();
            Final.crc2.beginPath();
            Final.crc2.arc(_x + 65, _y + 10, 15, 0, 360);
            Final.crc2.stroke();
            Final.crc2.fill();
            Final.crc2.beginPath();
            Final.crc2.arc(_x + 85, _y + 10, 15, 0, 360);
            Final.crc2.stroke();
            Final.crc2.fill();
            Final.crc2.beginPath();
            Final.crc2.arc(_x + 105, _y + 20, 15, 0, 360);
            Final.crc2.stroke();
            Final.crc2.fill();
            Final.crc2.beginPath();
            Final.crc2.arc(_x + 90, _y + 35, 15, 0, 360);
            Final.crc2.stroke();
            Final.crc2.fill();
            Final.crc2.beginPath();
            Final.crc2.arc(_x + 63, _y + 38, 15, 0, 360);
            Final.crc2.stroke();
            Final.crc2.fill();
            Final.crc2.beginPath();
            Final.crc2.arc(_x + 70, _y + 25, 15, 0, 360);
            Final.crc2.stroke();
            Final.crc2.fill();
        }
        //Flughafen
        drawAirport(_x, _y) {
            Final.crc2.beginPath();
            Final.crc2.strokeStyle = "grey";
            Final.crc2.fillStyle = "grey";
            Final.crc2.moveTo(_x, _y);
            Final.crc2.lineTo(_x - 100, _y);
            Final.crc2.lineTo(_x - 100, _y - 180);
            Final.crc2.lineTo(_x, _y - 180);
            Final.crc2.stroke();
            Final.crc2.fill();
        }
        drawWindow(_x, _y) {
            Final.crc2.beginPath();
            Final.crc2.fillStyle = "black";
            Final.crc2.moveTo(_x - 100, _y - 20);
            Final.crc2.lineTo(_x - 20, _y - 20);
            Final.crc2.lineTo(_x - 20, _y - 30);
            Final.crc2.lineTo(_x - 100, _y - 30);
            Final.crc2.stroke();
            Final.crc2.fill();
        }
        drawTower(_x, _y) {
            Final.crc2.beginPath();
            Final.crc2.fillStyle = "grey";
            Final.crc2.strokeStyle = "grey";
            Final.crc2.moveTo(_x - 80, _y - 180);
            Final.crc2.lineTo(_x - 80, _y - 260);
            Final.crc2.lineTo(_x - 100, _y - 280);
            Final.crc2.lineTo(_x - 20, _y - 280);
            Final.crc2.lineTo(_x - 40, _y - 260);
            Final.crc2.lineTo(_x - 40, _y - 180);
            Final.crc2.stroke();
            Final.crc2.fill();
            Final.crc2.beginPath();
            Final.crc2.fillStyle = "grey";
            Final.crc2.strokeStyle = "grey";
            Final.crc2.moveTo(_x - 80, _y - 280);
            Final.crc2.lineTo(_x - 95, _y - 300);
            Final.crc2.lineTo(_x - 25, _y - 300);
            Final.crc2.lineTo(_x - 40, _y - 280);
            Final.crc2.stroke();
            Final.crc2.fill();
            Final.crc2.beginPath();
            Final.crc2.fillStyle = "black";
            Final.crc2.fillRect(_x - 75, _y - 260, 30, 10);
            Final.crc2.fill();
        }
        //Landebahn
        drawLandebahn(_x, _y) {
            Final.crc2.beginPath();
            Final.crc2.fillStyle = "#F4A460";
            Final.crc2.strokeStyle = "#F4A460";
            Final.crc2.fillRect(_x + 200, _y + 360, 350, 40);
            Final.crc2.stroke();
            Final.crc2.fill();
            Final.crc2.beginPath();
            Final.crc2.arc(_x + 180, _y + 380, 50, 0, 360);
            Final.crc2.stroke();
            Final.crc2.fill();
        }
        drawStreifen(_x, _y) {
            Final.crc2.beginPath();
            Final.crc2.fillStyle = "white";
            Final.crc2.strokeStyle = "white";
            Final.crc2.fillRect(_x, _y, 15, 2);
        }
    }
    Final.Background = Background;
})(Final || (Final = {}));
//# sourceMappingURL=background.js.map