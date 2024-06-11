let global = {
    naam: "",
    woorden: ["acryl", "patch", "seraf", "zeikt", "educt"],
    woord: ""
}

const setup = () => {
    let n = document.getElementById("nieuw");
    n.addEventListener("click", popup);
    n.focus();
    document.getElementById("go").addEventListener("click", enter);
    document.getElementById("clear").addEventListener("click", delHist);
    let r = Math.floor(Math.random() * global.woorden.length);
    global.woord = global.woorden[r];
    let his = document.getElementById("highscores");
    let div = document.createElement("ol");
    his.appendChild(div);
}

const enter = () => {
    let gok = document.getElementById("gok").value;
    document.getElementById("nieuw").hidden;
    if(gok.length === 5){
        let grid = document.getElementById("gokken");
        let div = document.createElement("div");
        grid.appendChild(div);
        for(let i = 0; i < gok.length; i++){
            let le = document.createElement("div");
            for(let ind = 0; ind < global.woord.length; ind++){
                le.innerText = gok[i];
                if(global.woord[i] === gok[i]){
                    le.setAttribute("class", "juist");
                } else if(global.woord.indexOf(gok[i]) !== -1){
                    le.setAttribute("class", "bevat");
                } else {
                    le.setAttribute("class", "fout");
                }
            }
            div.appendChild(le);
        }
    }
    if(gok === global.woord){
        voegHToe();
    }
}

const voegHToe = () => {
    let ol = document.querySelector("ol");
    let li = document.createElement("li");


}

const popup = () => {
    global.naam = window.prompt("Naam speler:");
}

const delHist = () => {
    let his = document.getElementById("highscores");
    let c = his.childNodes;
    for(let i = 0; i < c; i++){
        if(c.item(i).nodeName === "ol"){
            c.item(i).remove();
        }
    }
}

window.addEventListener("load", setup);