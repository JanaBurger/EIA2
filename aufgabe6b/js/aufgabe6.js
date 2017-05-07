/*
Aufgabe: 6b
Name: Jana Burger
Matrikel: 255076
Datum: 6.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
Aufgabe wurde mit Selina und Jacqueline erstellt*/
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0=w oder 1=m) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    //Codeblock 1
    function saveData(_input) {
        let data = _input.split(",");
        console.log(data);
        if (data.length <= 5) {
            return "Angabe ist nicht vollst�ndig";
        }
        if (isNaN(parseInt(data[0]))) {
            return "Matrikelnummer ist keine Nummer";
        }
        let studi = {
            Matrikelnummer: parseInt(data[0]),
            Name: data[1],
            Vorname: data[2],
            Alter: parseInt(data[3]),
            Geschlecht: parseInt(data[4]) == 0,
            Kommentar: data[5]
        };
        let geschlecht;
        if (parseInt(data[4]) == 0) {
            geschlecht = "weiblich";
        }
        else {
            geschlecht = "m�nnlich";
        }
        console.log(studi);
        students.push(studi);
        return "Student " + "\n" + studi.Name + " " + studi.Vorname + ", " + studi.Alter + " Jahre, " + geschlecht + ", \nMatrikelnummer: "
            + studi.Matrikelnummer + "\n" + "Kommentar: " + studi.Kommentar + " \nwurde erfolgreich eingetragen";
    }
    //Codeblock 2
    function queryData(_matrikel) {
        //Schleife, if/ else Anweisung
        for (let i = 0; i < students.length; i++) {
            if (students[i].Matrikelnummer == _matrikel) {
                let geschlecht;
                if (students[i].Geschlecht == true) {
                    geschlecht = "weiblich";
                }
                else {
                    geschlecht = "m�nnlich";
                }
                return "Die Matrikelnummer " + students[i].Matrikelnummer + " geh�rt zu diesem Student: " + "\n" + students[i].Name + " " + students[i].Vorname + ", " + students[i].Alter
                    + " Jahre, " + geschlecht + ", " + "\nKommentar: " + students[i].Kommentar;
            }
            else {
                return "Zu dieser Matrikelnummer gibt es keinen registrierten Studenten.";
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=aufgabe6.js.map