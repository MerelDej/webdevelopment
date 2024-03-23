const setup = () => {
    let u = document.querySelector("ul");
    let li = u.querySelectorAll("li");
    for(let i = 0; i < li.length; i++){
        li[i].setAttribute("class", "listitem");
    }

    let img = document.createElement("img");
    img.setAttribute("src", "images/foto.jpg");
    img.style.height = "30%";
    img.style.width = "30%";
    u.appendChild(img);
}
window.addEventListener("load", setup);