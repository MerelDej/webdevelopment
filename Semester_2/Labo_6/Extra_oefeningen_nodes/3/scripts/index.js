const setup = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", btn);
}

const btn = () => {
    let div = document.querySelector("div");
    let p = document.createElement("p");
    div.appendChild(p);
    p.innerTEXT = "HELLOOOOOOOOOOOO";
}

window.addEventListener("load", setup);