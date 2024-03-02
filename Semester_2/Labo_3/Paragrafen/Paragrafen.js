const setup = () => {
    let i;
    let paragrafen=document.getElementsByClassName("belangrijk");
    for (i=0;i<paragrafen.length;i++) {
        paragrafen[i].classList.add("opvallend");
    }
}
window.addEventListener("load", setup);