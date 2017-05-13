/*
Aufgabe: 7
Name: Jana Burger
Matrikel: 255076
Datum: 7.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
Aufgabe wurde mit Selina und Jacqueline erstellt*/

namespace Classes {

    export var crc2: CanvasRenderingContext2D;
    var canvas: HTMLCanvasElement;

    let n: number = 10;
    let bees: Bee[] = [];

    let tulpe: Flowers;
    let margerite: Flowers;
    let blume: Flowers;
    let flowers: Flowers[] = [tulpe, margerite, blume];

    window.addEventListener("load", init);

    let imgData: ImageData;

    function init(_event: Event): void {
        
        let x: number;
        let y: number;
        
        canvas = document.getElementsByTagName("canvas")[0];
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
        drawBaum(320, 230);
        drawApfel(320, 70);
        drawApfel(340, 90);
        drawApfel(305, 110);
        drawApfel(360, 60);
        drawApfel(355, 105);
        drawKorb(325, 120);
        //drawBiene(320, 100);

        for (var i: number = 0; i < 8; i++) {
            let randomFlower: number = Math.floor((Math.random() * 3) + 0);
            let _x: number = (Math.random() * (280 - 0)) + 0;
            let _y: number = (Math.random() * (250 - 130)) + 130;

            let f: Flowers = new Flowers(0, 0, 0, 0);

            f.tulpe(_x - 25, _y - 6);
            f.blume(_x - 10, _y + 5, 6);
            f.blume(_x + 10, _y - 5, 4);
            f.margerite(_x + 40, _y - 5);
            f.tulpe(370, 200);

        }

        //Bild wird gespeichert
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 10; i++) {
            bees.push(new Bee(310, 150, "hsl(" + Math.random() * 180 + ", 80%, 50%)", Math.random() * 10 + 5));
        }

        window.setTimeout(animate, 30);

        //neue Biene wird erzeugt
        canvas.addEventListener("click", weitereBiene);
        canvas.addEventListener("push", weitereBiene);

        for (let i: number = 0; i < 5; i++) {
            let z: number = Math.random() * (2 - 1 + 1) + 1;
            if (z == 1 || 2) {
                let f: Flowers = new Flowers(0, 0, 0, Math.random() * (2 - 1 + 1) + 1);
                f.draw();
            }
        }

        // window.setTimeout(animateFolwers, 0);

    }

    //Funktionen 

    //neue Biene wird erzeugt
    function weitereBiene(): void {

        bees.push(new Bee(310, 150, "hsl(" + Math.random() * 180 + ", 80%, 50%)", Math.random() * 10 + 5));
        n++;
    }

    //Animation
    function animate(): void {
        console.log("Animate called");

        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < n; i++) {
            let b: Bee = bees[i];
            bees[i].update();
        }
        window.setTimeout(animate, 30);
    }


    function drawKorb(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.strokeStyle = "lightbrown";
        crc2.fillStyle = "lightbrown";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 15, _y);
        crc2.arc(_x + 7.5, _y, 7.5, 1 * Math.PI, 0 * Math.PI);
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x - 5, _y + 10);
        crc2.lineTo(_x + 20, _y + 10);
        crc2.arc(_x + 7.5, _y + 10, 12.5, 1 * Math.PI, 0 * Math.PI);
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "black";
        crc2.arc(_x + 5, _y - 2.5, 2.5, 0 * Math.PI, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
    }

    function drawBerg(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.strokeStyle = "grey";
        crc2.fillStyle = "grey";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 30, _y - 70);
        crc2.lineTo(_x + 60, _y + 0);
        crc2.stroke();
        crc2.fill();

    }
    function drawKleinerBerg(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.strokeStyle = "grey";
        crc2.fillStyle = "grey";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 20, _y - 40);
        crc2.lineTo(_x + 40, _y + 0);
        crc2.stroke();
        crc2.fill();
    }

    function drawMittlererBerg(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.strokeStyle = "grey";
        crc2.fillStyle = "grey";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 25, _y - 50);
        crc2.lineTo(_x + 50, _y + 0);
        crc2.stroke();
        crc2.fill();
    }

    function drawWolke(_x: number, _y: number): void {
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

    function drawBaum(_x: number, _y: number): void {
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

    function drawApfel(_x: number, _y: number): void {

        crc2.beginPath();
        crc2.strokeStyle = "red";
        crc2.fillStyle = "red";
        crc2.arc(_x, _y, 5, 0, 360);
        crc2.stroke();
        crc2.fill();
    }

    function drawSun(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.strokeStyle = "yellow";
        crc2.fillStyle = "yellow";
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 25, 0 * Math.PI, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
    }

}


