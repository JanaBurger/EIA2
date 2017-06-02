var Form;
(function (Form) {
    window.addEventListener("load", init);
    let eissorten = ["Erdbeere", "Mango", "Himbeere", "Maracuja", "Banane",
        "Apfel", "Zitrone", "Ananas", "Melone"];
    let milchsorten = ["Schokolade", "Vanille", "Haselnuss", "Walnuss", "Joghurt", "Stracciatella", "Pistazie", "Nugat"];
    let toppings = ["Sahne", "Schokosauce", "Erdbeersauce", "Schokostreusel",
        "Gummibaerchen", "Smarties", "kleine Cookies", "bunte Streusel"];
    let bestellung = [];
    let step = document.createElement("input");
    let div = document.createElement("div");
    function init(_event) {
        for (let i = 0; i < eissorten.length; i++) {
            let div = document.createElement("div");
            let step = document.createElement("input");
            document.getElementById("fruchteis").appendChild(div);
            step.setAttribute("type", "number");
            step.setAttribute("value", "0");
            document.getElementById("fruchteis").appendChild(step);
            eissorten.splice(eissorten.length, 1);
            div.textContent = eissorten[i];
            console.log(eissorten);
        }
        for (let i = 0; i < milchsorten.length; i++) {
            let div = document.createElement("div");
            let step = document.createElement("input");
            document.getElementById("milcheis").appendChild(div);
            step.setAttribute("type", "number");
            step.setAttribute("value", "0");
            document.getElementById("milcheis").appendChild(step);
            milchsorten.splice(milchsorten.length, 1);
            div.textContent = milchsorten[i];
            console.log(milchsorten);
        }
        for (let i = 0; i < toppings.length; i++) {
            let div = document.createElement("div");
            let step = document.createElement("input");
            document.getElementById("toppings").appendChild(div);
            step.setAttribute("type", "checkbox");
            step.className = "checkbox";
            document.getElementById("toppings").appendChild(step);
            toppings.splice(toppings.length, 1);
            div.textContent = toppings[i];
            console.log(toppings);
        }
        step.addEventListener("click", clickEvent);
    }
    function clickEvent(_event) {
        console.log("hallo");
    }
})(Form || (Form = {}));
//# sourceMappingURL=arrays.js.map