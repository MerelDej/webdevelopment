let btnKopieer = document.getElementById("btnKopieer");
btnKopieer.addEventListener("click", kopieer);

const kopieer = () => {
    let txtOutput = document.getElementById("txtOutput");
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    txtOutput = tekst;
    console.log(tekst);
}