const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    sliders[0].addEventListener("change", updateR);
    sliders[0].addEventListener("input", updateR);
    sliders[1].addEventListener("change", updateG);
    sliders[1].addEventListener("input", updateG);
    sliders[2].addEventListener("change", updateB);
    sliders[2].addEventListener("input", updateB);
    change();
    window.addEventListener("click", change);

    let btn = document.getElementById("btn");
    btn.addEventListener("click", save);
}
const updateR = () => {
    let sliders = document.getElementsByClassName("slider");
    let txtOutput = document.getElementById("txtOutput1")
    txtOutput.innerHTML = sliders[0].value;
    return sliders[0].value;
}
const updateG = () => {
    let sliders = document.getElementsByClassName("slider");
    let txtOutput = document.getElementById("txtOutput2")
    txtOutput.innerHTML = sliders[1].value;
    return sliders[1].value;
}
const updateB = () => {
    let sliders = document.getElementsByClassName("slider");
    let txtOutput = document.getElementById("txtOutput3")
    txtOutput.innerHTML = sliders[2].value;
    return sliders[2].value;
}
const color = () => {
    let rood = updateR();
    let groen = updateG();
    let blauw = updateB();
    return "rgb("+ rood +","+ groen +","+ blauw +")";
}

const save = () => {
    let s = document.getElementById("save");
    let nDiv = document.createElement("div");

    let id = 0;
    let saved = s.childNodes;
    for(let i = 0; i < saved.length; i++){
        id = parseInt(saved[saved.length-1].getAttribute("data-ID")) + 1;
    }

    s.appendChild(nDiv);
    nDiv.style.padding = "10px";
    s.style.display = "flex";
    s.style.flexDirection = "row";
    nDiv.setAttribute("class", "kleur");
    nDiv.setAttribute("data-ID", `${id}`);
    let kleur = document.createElement("div");
    kleur.style.backgroundColor = color();
    kleur.style.height = "100px";
    kleur.style.width = "100px";
    nDiv.appendChild(kleur);
    let btn = document.createElement("input");
    btn.setAttribute("value", "X");
    btn.setAttribute("type", "button");
    btn.setAttribute("id", "verwijder");
    kleur.appendChild(btn);
    kleur.style.display = "flex";
    kleur.style.justifyContent = "right";
}

const del = (i) => {
    let div = i.currentTarget.parentElement;
    let saved = document.querySelectorAll("#save > div")

    for(let i = 0; i < saved.length; i++){
        if(div.getAttribute("data-ID") === saved[i].getAttribute("data-ID")){
            saved[i].remove();
            saved[i].style.display = "none";
            saved[i].style.padding = "0";
        }
    }
    i.stopPropagation();
    i.preventDefault();
}

const change = () => {
    let colors=document.getElementsByClassName("color")[0];
    colors.style.backgroundColor = color();
    colors.style.borderRadius = "25px";

    let blok = document.getElementsByClassName("kleur");
    if(blok.length !== 0){
        for(let i = 0; i < blok.length; i++){
            let btn = blok[i].querySelector("#verwijder");
            btn.addEventListener("click", del);
        }
    }
}
window.addEventListener("load", setup);