var Form;
(function (Form) {
    window.addEventListener("load", init);
    let eissorten = ["Erdbeere", "Mango", "Himbeere", "Maracuja", "Banane",
        "Apfel", "Zitrone", "Ananas", "Melone"];
    let milchsorten = ["Schokolade", "Vanille", "Haselnuss", "Walnuss", "Joghurt", "Stracciatella", "Pistazie", "Nugat"];
    let toppings = ["Sahne", "Schokosauce", "Erdbeersauce", "Schokostreusel",
        "Gummibaerchen", "Smarties", "kleine Cookies", "bunte Streusel"];
    //    Preise
    let eissortenPrice = 1;
    let toppingPrice = 0.50;
    let fruchtInputs = [];
    let milchInputs = [];
    let topInputs = [];
    let fieldsetTopping;
    let fieldsetEissorte;
    let fieldsetMilchsorte;
    let step = document.createElement("input");
    function init(_event) {
        let fieldsets = document.getElementsByTagName("fieldset");
        let button = document.getElementById("button");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("change", showSum);
            button.addEventListener("click", clickButton);
        }
        fieldsetEissorte = document.getElementById("fruchteis");
        fieldsetMilchsorte = document.getElementById("milcheis");
        fieldsetTopping = document.getElementById("toppings");
        for (let i = 0; i < eissorten.length; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            input.setAttribute("type", "number");
            input.setAttribute("value", "0");
            input.min = "0";
            label.innerText = eissorten[i];
            label.appendChild(input);
            fruchtInputs.push(input);
            fieldsetEissorte.appendChild(label);
            input.className = "checkbox";
            console.log(eissorten[i]);
        }
        for (let i = 0; i < milchsorten.length; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            input.setAttribute("type", "number");
            input.setAttribute("value", "0");
            input.min = "0";
            label.innerText = milchsorten[i];
            label.appendChild(input);
            milchInputs.push(input);
            fieldsetMilchsorte.appendChild(label);
            input.className = "checkbox";
            console.log(milchsorten[i]);
        }
        for (let i = 0; i < toppings.length; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            input.setAttribute("type", "checkbox");
            label.innerText = toppings[i];
            label.appendChild(input);
            topInputs.push(input);
            fieldsetTopping.appendChild(label);
            input.className = "toppings";
            console.log(toppings[i]);
        }
    }
    function handleChange(_event) {
        console.log(_event);
        let bestellung = document.getElementById("bestellung");
        bestellung.innerText = "";
        for (let i = 0; i < fruchtInputs.length; i++) {
            if (parseInt(fruchtInputs[i].value) > 0) {
                bestellung.innerText += eissorten[i] + " " + ": " + (parseInt(fruchtInputs[i].value) * 1) + "\n";
            }
        }
        for (let i = 0; i < milchInputs.length; i++) {
            if (parseInt(milchInputs[i].value) > 0) {
                bestellung.innerText += milchsorten[i] + " " + ": " + (parseInt(milchInputs[i].value) * 1) + "\n";
            }
        }
        for (let i = 0; i < topInputs.length; i++) {
            if (topInputs[i].checked) {
                bestellung.innerText += toppings[i] + " " + "\n";
            }
        }
    }
    function showSum(_event) {
        let summe = 0;
        for (let i = 0; i < fruchtInputs.length; i++) {
            summe += parseInt(fruchtInputs[i].value);
        }
        for (let i = 0; i < milchInputs.length; i++) {
            summe += parseInt(milchInputs[i].value);
        }
        for (let i = 0; i < topInputs.length; i++) {
            if (topInputs[i].checked)
                summe += 0.5;
        }
        console.log(summe);
        document.getElementById("sum").innerText = summe.toString() + " €";
    }
    function clickButton(_event) {
        let proof = [];
        let name = document.getElementById("name");
        let vorname = document.getElementById("vorname");
        let strasse = document.getElementById("strasse");
        let nr = document.getElementById("nr");
        let plz = document.getElementById("plz");
        let stadt = document.getElementById("stadt");
        let land = document.getElementById("land");
        if (name.validity.valid != true)
            proof.push("name");
        if (vorname.validity.valid != true)
            proof.push("vorname");
        if (strasse.validity.valid != true)
            proof.push("strasse");
        if (nr.validity.valid != true)
            proof.push("nr");
        if (plz.validity.valid != true)
            proof.push("plz");
        if (stadt.validity.valid != true)
            proof.push("stadt");
        if (land.validity.valid != true)
            proof.push("land");
        else {
            alert("Ihre Eingaben sind nicht vollstaendig.");
        }
    }
})(Form || (Form = {}));
//# sourceMappingURL=arrays.js.map