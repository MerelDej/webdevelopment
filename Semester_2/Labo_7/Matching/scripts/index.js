let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    KAART_NAMEN: ["images/i.jpg", "images/j.jpg", "images/l.jpg", "images/t.jpg", "images/s.jpg", "images/z.jpg"],
    KAARTEN: [],
    isBusy: false,
    GEKOZEN: [],
    timeWait: 1000,
    AANTAL_GEVONDEN: 0
}

const setup = () => {
    let playField = document.getElementById("playField");
    for(let id = 0; id < global.AANTAL_KAARTEN * 2; id++) {
        let kaart = document.createElement("img");
        kaart.className = "kaart";
        kaart.id = ""+id;
        kaart.setAttribute("src", "images/th.jpg");
        playField.appendChild(kaart);
        kaart.addEventListener("click", verwerk);
        global.KAARTEN.splice(Math.floor(Math.random() * id),0 , global.KAART_NAMEN[id % global.AANTAL_KAARTEN]);
    }
}

const verwerk = (event) => {
    if(!global.isBusy && !event.target.classList.contains("omgedraaid")) {
        omdraaien(event);
    }
}

const nietWachten = () => {
    global.isBusy = false;
    global.GEKOZEN = [];
    let field = document.getElementById("playField");
    field.style.cursor = "auto";
}

const omdraaien = (event) => {
    global.GEKOZEN.push(event.target.id);
    event.target.classList.add("omgedraaid");
    event.target.setAttribute("src", global.KAARTEN[event.target.id]);
    if(global.GEKOZEN.length > 1) {
        global.isBusy = true;
        vergelijk();
        let field = document.getElementById("playField");
        field.style.cursor = "wait";
        setTimeout(nietWachten, global.timeWait);
    }
    if(global.AANTAL_GEVONDEN === global.AANTAL_KAARTEN) {
        setTimeout(win, global.timeWait);
    }
}

const win = () => {
    for(let id = 0; id < global.AANTAL_KAARTEN * 2; id++) {
        let bord = document.getElementById(id);
        bord.style.border = "5px solid green";
        bord.style.visibility = "visible";
    }
    alert("JE WINT!!");
}

const vergelijk = () => {
    let id1 = global.GEKOZEN[0];
    let id2 = global.GEKOZEN[1];
    let bord = document.getElementById(id1);
    let bord2 = document.getElementById(id2);
    if(global.KAARTEN[id1] === global.KAARTEN[id2]) {
        global.AANTAL_GEVONDEN++;
        bord.style.border = "5px solid green";
        bord2.style.border = "5px solid green";
        setTimeout(verwerkGelijk, global.timeWait);
    }
    else {
        bord.style.border = "5px solid red";
        bord2.style.border = "5px solid red";
        setTimeout(verwerkOngelijk, global.timeWait);
    }
    setTimeout(removeBorders, global.timeWait);
}

const removeBorders = () => {
    for(let id = 0; id < global.AANTAL_KAARTEN * 2; id++) {
        let bord = document.getElementById(id);
        bord.style.border = "none";
    }
}

const verwerkGelijk = () => {
    let id1 = global.GEKOZEN[0];
    let id2 = global.GEKOZEN[1];
    let vis = document.getElementById(id1);
    let vis2 = document.getElementById(id2);
    vis.style.visibility = "hidden";
    vis2.style.visibility = "hidden";
}

const verwerkOngelijk = () => {
    draaiTerug(global.GEKOZEN[0]);
    draaiTerug(global.GEKOZEN[1]);
}

const draaiTerug = (id) => {
    let kaart = document.getElementById(id);
    kaart.classList.remove("omgedraaid");
    kaart.setAttribute("src", "images/th.jpg");
}

window.addEventListener("load", setup);