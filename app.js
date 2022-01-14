

function check() { // FUNACTION USER DATA CHECK
    event.preventDefault()

    var Useramount = document.getElementById("amount").value
    var recommendedNumber = document.getElementById("num").value

    if (!Useramount) {

        alert("Please Enter the amount");

    }
    else if (Useramount) {
        if (Useramount < 0 || Useramount === 0 || Useramount > 100000) {

            alert("Please enter amount under 1 to 100,000");
        }
        else {

            getAmount(Useramount, recommendedNumber);
            Useramount = ""
        }
    }
}



const getAmount = (Useramount, recommendedNumber) => {
    Useramount = Number(Useramount);
    recommendedNumber = Number(recommendedNumber);

    const typesOfNotes = [500, 100, 50, 20, 10, 5, 1];
    const NumberOfNotes = [];
    let preferNotes = null;

    createDiv("Types Of Notes", ": No. Of Notes", ": Amount",) // FUNACATION PARAMETER

    // LIMATE 200

    for (let i = 200; i > 0; i--) {
        if (Useramount / recommendedNumber >= i) {
            preferNotes = i;
            Useramount -= recommendedNumber * preferNotes;
            break

        }
    }

    typesOfNotes.map((typeOfNote, index) => {
        if (typeOfNote === recommendedNumber) { //EQUAL
            NumberOfNotes.push(preferNotes);
            createDiv(typeOfNote, preferNotes, typeOfNote * preferNotes); // FUNACATION PARAMETER
            console.log("RAZA");

        }
        else {     // NOT EQUAL
            const qty = Math.floor(Useramount / typeOfNote);
            Useramount -= qty * typeOfNote;
            NumberOfNotes.push(Number(qty));
            createDiv(typeOfNote, qty, typeOfNote * qty) // FUNACATION PARAMETER


        }
    });
}

const createDiv = (typeOfNote, preferNotes, Useramount) => {



    var TypeOfNote = document.getElementById("TypeOfNote")
    var tage = document.createElement('tr')
    var text = document.createTextNode(`${typeOfNote}`)
    TypeOfNote.appendChild(tage).className = "MyClass"
    tage.appendChild(text)

    var PreferNotes = document.getElementById("PreferNotes")
    var tage = document.createElement('tr')
    var text = document.createTextNode(`${preferNotes}`)
    PreferNotes.appendChild(tage).className = "MyClass"
    tage.appendChild(text)


    var Amount = document.getElementById("Amount")
    var tage = document.createElement('tr')
    var text = document.createTextNode(`${Useramount}`)
    Amount.appendChild(tage).className = "MyClass"
    tage.appendChild(text)

}