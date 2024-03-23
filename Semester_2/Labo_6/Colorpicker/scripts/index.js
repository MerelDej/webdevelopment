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
    let txtOutput = document.getElementById("txtOutput1");
    txtOutput.innerHTML = sliders[0].value;
    return sliders[0].value;
}
const updateG = () => {
    let sliders = document.getElementsByClassName("slider");
    let txtOutput = document.getElementById("txtOutput2");
    txtOutput.innerHTML = sliders[1].value;
    return sliders[1].value;
}
const updateB = () => {
    let sliders = document.getElementsByClassName("slider");
    let txtOutput = document.getElementById("txtOutput3");
    txtOutput.innerHTML = sliders[2].value;
    return sliders[2].value;
}
const color = () => {
    let rood = updateR();
    let groen = updateG();
    let blauw = updateB();
    return "rgb("+ rood +","+ groen +","+ blauw +")";
}
const change = () => {
    let colors=document.getElementsByClassName("color");
    colors[0].style.backgroundColor = color();
}

const save = () => {
    let s = document.getElementById("save");
    let nDiv = document.createElement("div");
    s.appendChild(nDiv);
    let kleur = document.createElement("div");
    kleur.style.backgroundColor = color();
    kleur.style.height = "100px";
    kleur.style.width = "100px";
    nDiv.appendChild(kleur);
    let btn = document.createElement("input");
    btn.setAttribute("value", "X");
    btn.setAttribute("type", "button");
    btn.setAttribute("id", "verwijder");
    nDiv.parentNode.appendChild(btn);
    btn.style.float = "right";
    kleur.style.boxSizing = "border-box";


}

window.addEventListener("load", setup);