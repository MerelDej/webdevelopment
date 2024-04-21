const setup = () => {
    let btn = document.querySelector("#btn");
    btn.addEventListener("click", dat);
}

const bereken = (i, g) => {
    let dagen = document.querySelector("#dag");
    let aantal = (i - g)/86400000;
    let l = i.getDate() + "/" + (i.getMonth()+1) + "/" + i.getFullYear();
    return dagen.innerHTML = "Er zijn al " + Math.floor(aantal) + " dagen gepasseert.";
}

const dat = () => {
    let date = new Date();
    return bereken(date, new Date(document.querySelector("#date").value));
}

window.addEventListener("load", setup);