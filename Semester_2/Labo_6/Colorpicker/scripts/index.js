const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    sliders[0].addEventListener("change", update);
    sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("change", update);
    sliders[1].addEventListener("input", update);
    sliders[2].addEventListener("change", update);
    sliders[2].addEventListener("input", update);
    update();

    let btn = document.getElementById("btn");
    btn.addEventListener("click", save);

    //lijst met alle divs met id save
    //voor elk div zet je een eventlistener als je erop klikt
}
const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let txtOutput1 = document.getElementById("txtOutput1");
    txtOutput1.innerHTML = sliders[0].value;
    let rood = sliders[0].value;
    let txtOutput2 = document.getElementById("txtOutput2");
    txtOutput2.innerHTML = sliders[1].value;
    let groen =  sliders[1].value;
    let txtOutput3 = document.getElementById("txtOutput3");
    txtOutput3.innerHTML = sliders[2].value;
    let blauw = sliders[2].value;
    let swatch = document.getElementById("color");
    color.style.backgroundColor = "rgb("+ rood +","+ groen +","+ blauw +")";
    return "rgb("+ rood +","+ groen +","+ blauw +")";
}

const save = () => {
    let s = document.getElementById("save");
    let nDiv = document.createElement("div");

    s.appendChild(nDiv);
    nDiv.setAttribute("data-rgb", update());
    let kleur = document.createElement("div");
    nDiv.style.backgroundColor = update();
    nDiv.classList.add("swatch");
    nDiv.appendChild(kleur);
    let btn = document.createElement("input");
    btn.setAttribute("value", "X");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "verwijder");
    btn.addEventListener("click", del);
    nDiv.appendChild(btn);
    nDiv.addEventListener("click", change);
}

const del = (i) => {
    let div = i.currentTarget.parentElement;
    div.remove();
    i.stopPropagation();
    i.preventDefault();
}

const change = (i) => {
    let color=document.getElementById("color");
    let blok = i.currentTarget;
    let sliders = document.getElementsByClassName("slider");
    color.style.backgroundColor = blok.getAttribute("data-rgb");
    slider[0] = blok.getAttribute();
}
window.addEventListener("load", setup);