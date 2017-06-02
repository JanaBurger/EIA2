namespace Form {

    window.addEventListener("load", init);

    let eissorten: string[] = ["Erdbeere", "Mango", "Himbeere", "Maracuja", "Banane",
        "Apfel", "Zitrone", "Ananas", "Melone"];

    let milchsorten: string[] = ["Schokolade", "Vanille", "Haselnuss", "Walnuss", "Joghurt", "Stracciatella", "Pistazie", "Nugat"];

    let toppings: string[] = ["Sahne", "Schokosauce", "Erdbeersauce", "Schokostreusel",
        "Gummibaerchen", "Smarties", "kleine Cookies", "bunte Streusel"];
    
    let bestellung: string[] = [];
    
    
    let step: HTMLInputElement = document.createElement("input");            
    let div: HTMLDivElement = document.createElement("div");    
    

    function init(_event: Event): void {

        for (let i: number = 0; i < eissorten.length; i++) {

            let div: HTMLDivElement = document.createElement("div");
            let step: HTMLInputElement = document.createElement("input");
            
            document.getElementById("fruchteis").appendChild(div);

            step.setAttribute("type", "number");
            step.setAttribute("value", "0");
            document.getElementById("fruchteis").appendChild(step);
            
            eissorten.splice(eissorten.length, 1);
            div.textContent = eissorten[i];

            console.log(eissorten);
        }

        for (let i: number = 0; i < milchsorten.length; i++) {

            let div: HTMLDivElement = document.createElement("div");
            let step: HTMLInputElement = document.createElement("input");
            
            document.getElementById("milcheis").appendChild(div);
            step.setAttribute("type", "number");
            step.setAttribute("value", "0");
            document.getElementById("milcheis").appendChild(step);

            milchsorten.splice(milchsorten.length, 1);
            div.textContent = milchsorten[i];

            console.log(milchsorten);
        }
        
        for (let i: number = 0; i < toppings.length; i++) {

            let div: HTMLDivElement = document.createElement("div");
            let step: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label"); 
            
            document.getElementById("toppings").appendChild(div);
            step.setAttribute("type", "checkbox");
            label.appendChild(step);
            
            step.className = "checkbox";
            
            document.getElementById("toppings").appendChild(step);

            toppings.splice(toppings.length, 1);
            div.textContent = toppings[i];

            console.log(toppings);
            
        }
        step.addEventListener("click", clickEvent);
    }
        function clickEvent(_event: MouseEvent): void {
            console.log("hallo");
            }
    
}