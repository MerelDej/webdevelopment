const setup = () => {
    let valid= document.getElementById("valideer");
    valid.addEventListener("click", valideer);
}

const valideer = () => {
    valideerVoornaam();
    valideerFamilienaam();
    valideerGeboortedatum();
    valideerEmail();
    valideerAtlKinderen();
}

const valideerVoornaam = () => {
    let name = document.getElementById("name");
    let errName = document.getElementById("errVoornaam");
    let voornaam = name.value.trim();
    if(voornaam.length > 30) {
        name.className = "invalid";
        errName.innerHTML = "maximum 30 karakters";
    } else {
        name.className = "";
        errName.innerHTML = "";
    }
}

const valideerFamilienaam = () => {
    let sname = document.getElementById("sname");
    let errSname = document.getElementById("errFamilienaam");
    let familienaam = sname.value.trim();
    if(familienaam.length === 0) {
        sname.className = "invalid";
        errSname.innerHTML = "verplicht veld";
    }
    else if(familienaam.length > 30) {
        sname.className = "invalid";
        errSname.innerHTML = "maximum 50 karakters";
    } else{
        sname.className = "";
        errSname.innerHTML = "";
    }
}

const valideerGeboortedatum = () => {
    let date = document.getElementById("date");
    let errDate = document.getElementById("errDatum");
    let geboortedatum = date.value.trim();
    if(geboortedatum.length === 0) {
        date.className = "invalid";
        errDate.innerHTML = "verplicht veld";
    }
    else if(geboortedatum.length !== 10 || geboortedatum.charAt(4) !== "-" || geboortedatum.charAt(7) !== "-" || !isGetal(geboortedatum.slice(0, 4)) || !isGetal(geboortedatum.slice(5, 7)) || !isGetal(geboortedatum.slice(8, 10))) {
        date.className = "invalid";
        errDate.innerHTML = "formaat is niet jjjj‐mm‐dd";
    } else{
        date.className = "";
        errDate.innerHTML = "";
    }
}

const valideerEmail = () => {
    let mail = document.getElementById("email");
    let errEmail = document.getElementById("errEmail");
    let email = mail.value.trim();
    console.log(email.slice(1, email.length - 1))
    if(email.length === 0) {
        console.log(email)
        mail.className = "invalid";
        errEmail.innerHTML = "verplicht veld";
    }
    else if(email.length < 3 || !email.slice(1, email.length - 1).includes("@") || email.slice(1, email.length - 1).indexOf("@") !== email.slice(1, email.length - 1).lastIndexOf("@")) {
        mail.className = "invalid";
        errEmail.innerHTML = "geen geldig email adres";
    } else {
        mail.className = "";
        errEmail.innerHTML = "";
    }
}

const isGetal = (nummer) => {
    return !isNaN(nummer);
}

const valideerAtlKinderen = () => {
    let atlk = document.getElementById("aantalk");
    let errAtlK = document.getElementById("errAantal_kinderen");
    let aantal_kinderen = parseInt(atlk.value.trim());
    if(isNaN(aantal_kinderen) || aantal_kinderen < 0) {
        atlk.className = "invalid";
        errAtlK.innerHTML = "is geen positief getal";
    } else if(aantal_kinderen > 99) {
        atlk.className = "invalid";
        errAtlK.innerHTML = "is te vruchtbaar";
    } else {
        atlk.className = "";
        errAtlK.innerHTML = "";
    }
}
window.addEventListener('load', setup);