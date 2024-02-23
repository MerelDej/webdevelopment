const setup = () => {
    let btnVeranderen=document.getElementById("btnVeranderen");

    btnVeranderen.addEventListener("click", veranderen);
}

const veranderen = () => {
    let txtOutput= document.getElementById("txtOutput");
    let resultaatTekst= "Welkom!";
    txtOutput.innerHTML = resultaatTekst;
}

window.addEventListener('load',setup);