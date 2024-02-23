const setup = () => {
    let btnKopieer =document.getElementById("btnKopieer");
    const kopieer = () => {
        let txtInput =document.getElementById("txtInput");
        let tekst=txtInput.value;
        console.log(tekst);
    }
    btnKopieer.addEventListener("click",kopieer)
}
window.addEventListener("load", setup);
