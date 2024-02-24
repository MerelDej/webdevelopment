const setup = () => {
    let btnSubstring= document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let txtOutput=document.getElementById("txtOutput");
    let txtInput= document.getElementById("txtInput");
    let nrEen= document.getElementById("nummerEen");
    let nrTwee= document.getElementById("nummerTwee");

    let g1 = parseInt(nrEen.value, 10)
    let g2 = parseInt(nrTwee.value, 10)
    txtOutput.innerHTML = txtInput.value.substring(g1, g2);
}
window.addEventListener('load',setup);