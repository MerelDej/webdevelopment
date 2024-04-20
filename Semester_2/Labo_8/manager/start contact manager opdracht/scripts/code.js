let personen = [];
let index = -1;

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    valideer();

    if(document.getElementsByClassName("invalid").length === 0) {
        let voornaam = document.getElementById("txtVoornaam").value;
        let familienaam = document.getElementById("txtFamilienaam").value;
        let geboorteDatum = document.getElementById("txtGeboorteDatum").value;
        let email = document.getElementById("txtEmail").value;
        let aantalKinderen = document.getElementById("txtAantalKinderen").value;
        if (index === -1) {
            personen.push({
                voornaam: voornaam,
                familienaam: familienaam,
                geboorteDatum: geboorteDatum,
                email: email,
                aantalKinderen: aantalKinderen
            });
            let option = document.createElement("option");
            index = personen.length - 1;
            option.id = index;
            option.addEventListener("click", toonPersoon);
            document.getElementById("lstPersonen").appendChild(option);
        }
        else {
            personen[index].voornaam = voornaam;
            personen[index].familienaam = familienaam;
            personen[index].geboorteDatum = geboorteDatum;
            personen[index].email = email;
            personen[index].aantalKinderen = aantalKinderen;
        }
        document.getElementById(index).innerHTML = voornaam + " " + familienaam;
    }
};

const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    index = -1;
    document.getElementById("lstPersonen").reset();
};

const toonPersoon = () => {
    const selectedIndex = document.getElementById("lstPersonen").selectedIndex;
    if (selectedIndex !== -1) {
        const geselecteerdePersoon = personen[selectedIndex];
        document.getElementById("txtVoornaam").value = geselecteerdePersoon.voornaam;
        document.getElementById("txtFamilienaam").value = geselecteerdePersoon.familienaam;
        document.getElementById("txtGeboorteDatum").value = geselecteerdePersoon.geboorteDatum;
        document.getElementById("txtEmail").value = geselecteerdePersoon.email;
        document.getElementById("txtAantalKinderen").value = geselecteerdePersoon.aantalKinderen;
    }
};

const voegBeginToe = () => {
    personen.push(
        {
            voornaam: "Jan",
            familienaam: "Janssens",
            geboorteDatum: new Date("2010-10-10"),
            email: "jan@example.com",
            aantalKinderen: 0
        },
        {
            voornaam: "Mieke",
            familienaam: "Mickelsen",
            geboorteDatum: new Date("1980-01-01"),
            email: "mieke@example.com",
            aantalKinderen: 1
        },
        {
            voornaam: "Piet",
            familienaam: "Pieters",
            geboorteDatum: new Date("1970-12-31"),
            email: "piet@example.com",
            aantalKinderen: 2
        }
    );
    updatePersonenLijst();
}

const updatePersonenLijst = () => {
    const lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.innerHTML = "";
    personen.forEach(voegToe);
}

const voegToe = (p, i) => {
    const lstPersonen = document.getElementById("lstPersonen");
    const option = document.createElement("option");
    option.text = `${p.voornaam} ${p.familienaam}`;
    option.value = index;
    lstPersonen.add(option);
}

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", toonPersoon);

    voegBeginToe();
};

window.addEventListener("load", setup);