const setup = () => {
    let btnSubstring= document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let txtOutput=document.getElementById("txtOutput");
    let txtInput= document.getElementById("txtInput");
    let nrEen= document.getElementById("nummerEen");
    let nrTwee= document.getElementById("nummerTwee");

    let resultaat = txtInput.substring(nrEen, nrTwee);
    txtOutput.innerHTML = resultaat;
}

window.addEventListener('load',setup);