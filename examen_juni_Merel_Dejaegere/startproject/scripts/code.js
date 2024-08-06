let global = {
    vragen: [
        {
            question: "Wie is de hoofdpersoon in Final Fantasy VII Remake?",
            answers: ["Cloud Strife", "Sephiroth", "Tifa Lockhart"],
            correct: "Cloud Strife",
            selected: ""
        },
        {
            question: "Welke wereld wordt verkend in Final Fantasy XV?",
            answers: ["Gaia", "Eos", "Spira", "Cocoon"],
            correct: "Eos",
            selected: ""
        },
        {
            question: "Wie is de antagonist in Final Fantasy VIII?",
            answers: ["Ultimecia", "Kefka", "Seymour", "Kuja", "Edea"],
            correct: "Ultimecia",
            selected: ""
        },
        {
            question: "Heeft hoofdrolspeler in Final Fantasy IX een staart?",
            answers: ["Ja", "Nee"],
            correct: "Ja",
            selected: ""
        },
        {
            question: "Hoe heet de stad waarin het verhaal van Final Fantasy VII Remake begint?",
            answers: ["Midgar", "Junon", "Nibelheim", "Wutai"],
            correct: "Midgar",
            selected: ""
        },
        {
            question: "Welke summon is prominent aanwezig in Final Fantasy XV?",
            answers: ["Ifrit", "Shiva", "Ramuh", "Titan"],
            correct: "Ifrit",
            selected: ""
        },
        {
            question: "Wat is de naam van het luchtschip in Final Fantasy VIII?",
            answers: ["Ragnarok", "Highwind", "Invincible", "Falcon"],
            correct: "Ragnarok",
            selected: ""
        },
        {
            question: "Welke rol vervult Cid Highwind in Final Fantasy VII?",
            answers: ["Luchtschipkapitein", "Wapensmid", "Koning"],
            correct: "Luchtschipkapitein",
            selected: ""
        },
        {
            question: "Wat is het kenmerkende aan Cactuar-wezens in de Final Fantasy-serie?",
            answers: ["Ze zijn altijd groen", "Ze gebruiken de aanval 1000 Needles", "Ze zijn planten"],
            correct: "Ze gebruiken de aanval 1000 Needles",
            selected: ""
        },
        {
            question: "Welk Final Fantasy-wezen zorgt, met zijn aanval genaamd Bad Breath, voor verschillende statuseffecten?",
            answers: ["Malboro", "Chocobo", "Behemoth", "Tonberry"],
            correct: "Malboro",
            selected: ""
        }
    ],
    vraag: 0,
    highsores: []
}

const setup = () => {
    let btnStart=document.getElementById("start");
    btnStart.addEventListener("click", start);

    let btnReset = document.getElementById("reset");
    btnReset.addEventListener("click", reset());
}

const start = () => {
    let btnStart=document.getElementById("start");
    let div = document.getElementById("quiz");
    btnStart.classList.add("d-none");
    div.classList.remove("d-none");
    let zin = "Gestart op "
    let datum = new Date();
    zin += datum.getDate() + " ";
    let maand;
    if(datum.getMonth() === 1){
        maand = "januari"
    } else if (datum.getMonth() === 2){
        maand = "februari"
    }else if (datum.getMonth() === 3){
        maand = "maart"
    }else if (datum.getMonth() === 4){
        maand = "april"
    }else if (datum.getMonth() === 5){
        maand = "mei"
    }else if (datum.getMonth() === 6){
        maand = "juni"
    }else if (datum.getMonth() === 7){
        maand = "juli"
    }else if (datum.getMonth() === 8){
        maand = "augustus"
    }else if (datum.getMonth() === 9){
        maand = "september"
    }else if (datum.getMonth() === 10){
        maand = "oktober"
    }else if (datum.getMonth() === 11){
        maand = "november"
    }else{
        maand = "december"
    }
    zin += maand + " om "+ datum.getHours() + ":" + datum.getMinutes();

    //vragen shuffelen niet met random

    let ul = document.getElementById("questions");
    // let random = Math.floor(Math.random * global.vragen.length);
    // let nr = global.vragen[random];
    for(let i = 1; i < global.vragen.length; i++){
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent("Vraag " + i);
        li.setAttribute("data-nr", i);
        ul.appendChild(li);
    }

    let verberg = document.querySelector("div>p.py-3");
    verberg.classList.add("d-none");

    stelVraag();

    let btnIndienen = document.getElementById("submit");
    btnIndienen.addEventListener("click", indienen());
}

const indienen = () => {
    let div = document.getElementById("quiz");
    div.classList.add("d-none");
    let score = document.getElementById("score");
    let x = document.getElementsByClassName("bg-success").length;
    score.textContent = "Je hebt " + x + " op " + global.vragen.length;
    hsOpslaan();
}

const hsOpslaan = () => {
    let ol = document.getElementById("highscores");
    let li = document.createElement("li");
    for (let i = 0; i < sessionStorage.length; i++){
        let list = document.createElement("li");
        list.textContent = sessionStorage.getItem(i);
    }
    ol.appendChild(li);
    let x = document.getElementsByClassName("bg-success").length;
    li.textContent = x + "punt(en)";
    sessionStorage.setItem("highscores", x + "punt(en)");
}

const stelVraag = () => {
    let ul = document.getElementById("questions");
    let lis = ul.childNodes;
    const sel = lis.selectedIndex;
    lis.selectedIndex.focus();
    global.vraag = sel+1;
    let answerss = document.getElementById("answers");
    let title = document.getElementById("card-title");
    let btnOpslaan = document.getElementsByClassName("btn-success")[0];
    btnOpslaan.addEventListener("click", opslaan());
    let header = document.getElementById("card-header");
    if (sel !== -1) {
        title.textContent = global.vragen[lis[sel].getAttribute("data-nr") -1].question;
        for(let i = 0; i < global.vragen.answers.length; i++){
            let li = document.createElement("li");
            answerss.appendChild(li);
            li.classList.add("list-group-item");
            li.textContent = global.vragen[lis[sel].getAttribute("data-nr") -1].answers[i];
        }
        header.textContent = global.vraag;
    }
    let div = document.getElementsByClassName("card")[0];
    div.classList.remove("d-none");
    let select = answerss.selectedIndex
    if(select !== -1){
        select.classList.add("bg-info");
        global.selected = global.vragen.answers[select];
    }
}

const opslaan = () => {
    let answerss = document.getElementById("answers");
    let title = document.getElementById("card-title");
    let header = document.getElementById("card-header");
    global.vraag++;
    title.textContent = global.vragen[global.vraag].question;
    for(let i = 0; i < global.vragen.answers.length; i++){
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        answerss.appendChild(li);
        li.textContent = global.vragen[global.vraag].answers[i];
    }
    header.textContent = global.vraag;
    let select = answerss.selectedIndex
    if(select !== -1){
        select.classList.add("bg-info");
        global.selected = global.vragen.answers[select];
    }
}

const reset = () => {
    let hs = document.getElementById("highscores");
    let nodes = hs.childNodes;
    sessionStorage.clear();
    for(let i = 1; i < nodes.length; i++){
        hs.removeChild(nodes[i]);
    }
}

window.addEventListener('load',setup);