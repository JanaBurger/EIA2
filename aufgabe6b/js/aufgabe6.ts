/*
Aufgabe: 6b
Name: Jana Burger
Matrikel: 255076
Datum: 6.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
Aufgabe wurde mit Selina und Jacqueline erstellt*/

namespace StudiVZ {

    interface StudentData {
        Matrikelnummer: number;
        Name: string;
        Vorname: string;
        Alter: number;
        Geschlecht: boolean;
        Kommentar: string;
    }

    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0=w oder 1=m) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    //Codeblock 1
    function saveData(_input: string): string {
        let data: string[] = _input.split(",");
        console.log(data);


        if (data.length <= 5) {
            return "Angabe ist nicht vollständig";
        }

        if (isNaN(parseInt(data[0]))) {
            return "Matrikelnummer ist keine Nummer";
        }
       
        let studi: StudentData = {
            Matrikelnummer: parseInt(data[0]),
            Name: data[1],
            Vorname: data[2],
            Alter: parseInt(data[3]),
            Geschlecht: parseInt(data[4]) == 0,
            Kommentar: data[5]
        };
        
        let geschlecht: string;
        if (parseInt(data[4]) == 0) {
            geschlecht = "weiblich";
        }
        else {
            geschlecht = "männlich";
        }

        console.log(studi);

        students.push(studi);

        return "Student " + "\n" + studi.Name + " " + studi.Vorname + ", " + studi.Alter + " Jahre, " + geschlecht + ", \nMatrikelnummer: "
            + studi.Matrikelnummer + "\n" + "Kommentar: " + studi.Kommentar + " \nwurde erfolgreich eingetragen";
    }

    //Codeblock 2
    function queryData(_matrikel: number): string {
        //Schleife, if/ else Anweisung

        for (let i: number = 0; i < students.length; i++) {
            if (students[i].Matrikelnummer == _matrikel) {
                let geschlecht: string;
                if (students[i].Geschlecht == true) {                    
                    geschlecht = "weiblich"; }
                else { 
                    geschlecht = "männlich"; }
                
                return "Die Matrikelnummer " + students[i].Matrikelnummer + " gehört zu diesem Student: " + "\n" + students[i].Name + " " + students[i].Vorname + ", " + students[i].Alter
                    + " Jahre, " + geschlecht + ", " + "\nKommentar: " + students[i].Kommentar;
            }
            else {
                return "Zu dieser Matrikelnummer gibt es keinen registrierten Studenten.";
            }
        }


    }
}