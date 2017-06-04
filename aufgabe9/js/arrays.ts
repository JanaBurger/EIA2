namespace Form {

    window.addEventListener("load", init);

    let eissorten: string[] = ["Erdbeere", "Mango", "Himbeere", "Maracuja", "Banane",
        "Apfel", "Zitrone", "Ananas", "Melone"];

    let milchsorten: string[] = ["Schokolade", "Vanille", "Haselnuss", "Walnuss", "Joghurt", "Stracciatella", "Pistazie", "Nugat"];

    let toppings: string[] = ["Sahne", "Schokosauce", "Erdbeersauce", "Schokostreusel",
        "Gummibaerchen", "Smarties", "kleine Cookies", "bunte Streusel"];

    //    Preise
    let eissortenPrice: number = 1;
    let toppingPrice: number = 0.50;

    let fruchtInputs: HTMLInputElement[] = [];
    let milchInputs: HTMLInputElement[] = [];
    let topInputs: HTMLInputElement[] = [];
    let fieldsetTopping: HTMLElement;
    let fieldsetEissorte: HTMLElement;
    let fieldsetMilchsorte: HTMLElement;


    let step: HTMLInputElement = document.createElement("input");


    function init(_event: Event): void {

        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        let button: HTMLElement = document.getElementById("button");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("change", showSum);
            button.addEventListener("click", clickButton);
        }

        fieldsetEissorte = document.getElementById("fruchteis");
        fieldsetMilchsorte = document.getElementById("milcheis");
        fieldsetTopping = document.getElementById("toppings");

        for (let i: number = 0; i < eissorten.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");

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

        for (let i: number = 0; i < milchsorten.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");

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

        for (let i: number = 0; i < toppings.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");

            input.setAttribute("type", "checkbox");
            label.innerText = toppings[i];
            label.appendChild(input);
            topInputs.push(input);
            fieldsetTopping.appendChild(label);

            input.className = "toppings";

            console.log(toppings[i]);
        }
    }

    function handleChange(_event: Event): void {
        console.log(_event);
        let bestellung: HTMLElement = document.getElementById("bestellung");
        bestellung.innerText = "";

        for (let i: number = 0; i < fruchtInputs.length; i++) {
            if (parseInt(fruchtInputs[i].value) > 0) {
                bestellung.innerText += eissorten[i] + " " + ": " + (parseInt(fruchtInputs[i].value) * 1) + "\n";
            }
        }
        for (let i: number = 0; i < milchInputs.length; i++) {
            if (parseInt(milchInputs[i].value) > 0) {
                bestellung.innerText += milchsorten[i] + " " + ": " + (parseInt(milchInputs[i].value) * 1) + "\n";
            }
        }
        for (let i: number = 0; i < topInputs.length; i++) {
            if (topInputs[i].checked) {
                bestellung.innerText += toppings[i] + " " + "\n";
            }
        }
    }

    function showSum(_event: Event): void {
        let summe: number = 0;

        for (let i: number = 0; i < fruchtInputs.length; i++) {
            summe += parseInt(fruchtInputs[i].value);
        }
        for (let i: number = 0; i < milchInputs.length; i++) {
            summe += parseInt(milchInputs[i].value);
        }
        for (let i: number = 0; i < topInputs.length; i++) {
            if (topInputs[i].checked)
                summe += 0.5;
        }
        console.log(summe);

        document.getElementById("sum").innerText = summe.toString() + " €";

    }

    function clickButton(_event: Event): void {

        let proof: string[] = [];
        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        let vorname: HTMLInputElement = <HTMLInputElement>document.getElementById("vorname");
        let strasse: HTMLInputElement = <HTMLInputElement>document.getElementById("strasse");
        let nr: HTMLInputElement = <HTMLInputElement>document.getElementById("nr");
        let plz: HTMLInputElement = <HTMLInputElement>document.getElementById("plz");
        let stadt: HTMLInputElement = <HTMLInputElement>document.getElementById("stadt");
        let land: HTMLInputElement = <HTMLInputElement>document.getElementById("land");

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

}