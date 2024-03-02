const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    sliders[0].addEventListener("change", updateR);
    sliders[0].addEventListener("input", updateR);
    sliders[1].addEventListener("change", updateG);
    sliders[1].addEventListener("input", updateG);
    sliders[2].addEventListener("change", updateB);
    sliders[2].addEventListener("input", updateB);
    change();
    window.addEventListener("click", change)
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
const change = () => {
    let colors=document.getElementsByClassName("color");
    colors[0].style.backgroundColor = color();
}
window.addEventListener("load", setup);