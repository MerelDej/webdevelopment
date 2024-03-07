const setup = () => {
    let btn=document.getElementById("btn");
    btn.addEventListener("click", button);
}

const button = () => {
    let tekst = document.getElementById("text");
    let resultaat = "";
    for(let i = 0; i < tekst.value.length; i++){
        if(tekst.value.charAt(i) === " "){
            resultaat += tekst.value.charAt(i);
        } else{
            resultaat += tekst.value.charAt(i) + " ";
        }
    }
    console.log(resultaat.trim());
}
window.addEventListener("load", setup);