document.addEventListener('DOMContentLoaded', function() {
    
    let blackColor: string = "#000000";
    let whiteColor: string = "#ffffff";
    let n: number = 64;
    let x: number = 1;
    let zeile: number = 8;

for (let i: number = 0; i < n; i++) {
    Div();       
};
function Div(): void {
    let div: HTMLDivElement = document.createElement("div");
    document.body.appendChild(div);

    let s: CSSStyleDeclaration = div.style;
    s.borderStyle = "solid";
    s.borderColor = "#000000";
    s.borderWidth = "1px";
    s.width = "50px";
    s.height = "50px";
    s.display = "inline-block";
}    
    });