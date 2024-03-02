const setup = () => {
    let btnBereken=document.getElementById("herbereken");
    btnBereken.addEventListener("click", bereken);
}

const berekenen1 = () => {
    let txtOutput=document.getElementById("txtOutput1");
    let aantal1=document.getElementById("aantal1");

    let prijs= 10;
    let btw=0.06;
    let aantal = aantal1.value;
    let pa = prijs * aantal;
    let resultaat = pa + (pa * btw);
    let resultaatTekst= resultaat.toFixed(2) + " EUR";
    txtOutput.innerHTML= resultaatTekst;
    return resultaat;
}
const berekenen2 = () => {
    let txtOutput=document.getElementById("txtOutput2");
    let aantal2=document.getElementById("aantal2");

    let prijs= 15;
    let btw=0.21;
    let aantal = aantal2.value;
    let pa = prijs * aantal;
    let resultaat = pa + (pa * btw);
    let resultaatTekst= resultaat.toFixed(2) + " EUR";
    txtOutput.innerHTML= resultaatTekst;
    return resultaat;
}
const berekenen3 = () => {
    let txtOutput=document.getElementById("txtOutput3");
    let aantal3=document.getElementById("aantal3");

    let prijs= 12.20;
    let btw= 0.21;
    let aantal = aantal3.value;
    let pa = prijs * aantal;
    let resultaat = pa + (pa * btw);
    let resultaatTekst= resultaat.toFixed(2) + " EUR";
    txtOutput.innerHTML= resultaatTekst;
    return resultaat;
}
const totaal = () => {
    let txtOutput=document.getElementById("txtOutput");
    let res1 = berekenen1();
    let res2 = berekenen2();
    let res3 = berekenen3();
    let resultaat = res1 + res2 + res3;
    let resultaatTekst= resultaat.toFixed(2) + " EUR";
    txtOutput.innerHTML= resultaatTekst;
}
const bereken = () => {
    berekenen1();
    berekenen2();
    berekenen3();
    totaal();
}
window.addEventListener("load", setup);