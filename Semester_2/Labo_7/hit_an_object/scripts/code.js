let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0, // id van de timeout timer, zodat we die kunnen annuleren
    positie: { x: 0, y: 0 }
}

const setup = () => {
    let img = document.querySelector("img");
    img.addEventListener("click", hit);
    let btn = document.getElementById("btn");
    btn.addEventListener("click", start);
}

const start = () => {
    global.timeoutId = setInterval(move, global.MOVE_DELAY);
    let btn = document.getElementById("btn");
    btn.remove();
}

const hit = () => {
    let img = document.querySelector("img");
    if(img.getAttribute("src") === global.IMAGE_PATH_PREFIX + 0 + global.IMAGE_PATH_SUFFIX) {
        alert("GAME OVER \n je score is " + global.score);
        clearTimeout(global.timeoutId);
        global.score = 0;
    }
    else {
        global.score++;
        document.getElementById("score").innerText = global.score;
        move();
    }
}

const move = () => {
    let img = document.querySelector("img");
    let X = Math.floor(Math.random() * (600 - global.IMAGE_SIZE));
    let Y = Math.floor(Math.random() * (800 - global.IMAGE_SIZE));
    let randomIndex = Math.floor(Math.random() * global.IMAGE_COUNT);

    global.positie.x = X;
    global.positie.y = Y;

    img.style.left = global.positie.x + "px";
    img.style.top = global.positie.y + "px";
    img.setAttribute("src", global.IMAGE_PATH_PREFIX + randomIndex + global.IMAGE_PATH_SUFFIX);
}

window.addEventListener("load", setup);


