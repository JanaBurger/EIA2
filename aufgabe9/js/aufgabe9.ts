namespace Form {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }

    function handleChange(_event: Event): void {
        console.log(_event);
        let bestellung: HTMLElement = document.getElementById("bestellung");
        bestellung.innerText = "";

        for (let i: number = 0; i < fruchtInputs.length; i++) {
            if (parseInt(fruchtInputs[i].value) > 0) {
                bestellung.innerText += eissorten[i] + " " + (parseInt(fruchtInputs[i].value) * 1) + "€" + "\n";
            }
        }
    }
}