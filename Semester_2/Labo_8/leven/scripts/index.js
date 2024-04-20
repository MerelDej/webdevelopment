const setup = () => {
	let dagen = document.querySelector('#dag');
    let date = new Date();
    let geboortedatum = new Date(2005, 11, 15);
    let aantal = bereken(date, geboortedatum);
    dagen.innerHTML = "Ik leef al " + Math.floor(aantal) + " dagen.";
}

const bereken = (i, g) => {
    let aantal = (i - g)/86400000;
    return aantal;
}

window.addEventListener("load", setup);