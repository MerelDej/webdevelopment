const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    const kopieer = () => {
        let txtOutput = document.getElementById("txtOutput");
        let txtInput = document.getElementById("txtInput");
        let tekst = txtInput.value;
        txtOutput.innerHTML = tekst;
    }
    btnKopieer.addEventListener("click", kopieer);
}
window.addEventListener("load", setup);