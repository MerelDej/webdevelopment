const setup = () => {
    let btnBereken=document.getElementById("herbereken");
    btnBereken.addEventListener("click", bereken);
}
const berekenen1 = () => {
    let txtOutput=document.getElementById("txtOutput1");
    let aantal1=document.getElementById("aantal1");

    let prijs1= 10.00;
    let btw1 = 0.06;
    let aantal = aantal1.value;
    let pa = prijs1 * aantal;
    let resultaat = pa + (pa * btw1);
    let resultaatTekst= resultaat.toFixed(2) + " EUR";
    txtOutput.innerHTML= resultaatTekst;
    return resultaat;
}
const berekenen2 = () => {
    let txtOutput=document.getElementById("txtOutput2");
    let aantal2=document.getElementById("aantal2");

    let prijs2= 15.00;
    let btw2 = 0.21;
    let aantal = aantal2.value;
    let pa = prijs2 * aantal;
    let resultaat = pa + (pa * btw2);
    let resultaatTekst= resultaat.toFixed(2) + " EUR";
    txtOutput.innerHTML= resultaatTekst;
    return resultaat;
}
const berekenen3 = () => {
    let txtOutput=document.getElementById("txtOutput3");
    let aantal3=document.getElementById("aantal3");

    let prijs3 = 12.20;
    let btw3 = 0.21;
    let aantal = aantal3.value;
    let pa = prijs3 * aantal;
    let resultaat = pa + (pa * btw3);
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