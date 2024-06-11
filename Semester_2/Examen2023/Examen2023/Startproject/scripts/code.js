let global = {
    woorden: ["tafel", "later", "begin", "stoel", "stijl", "zaken", "waken", "zagen"],
    woordTeVinden: "",
    naam: "",
    isStarted: false,
    maanden: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
    aantalGokken: 0,
    timeoutId:""
};

const setup = () => {
    document.getElementById("nieuw").addEventListener("click", start);
    document.getElementById("go").addEventListener("click", nieuweGok);
    document.getElementById("clear").addEventListener("click", verwijderen);
    let scores = document.getElementById("highscores");
    let ol = document.createElement("ol");
    scores.appendChild(ol);
    restore();
};

const help = (event) => {
    let clickedElement = event.target;
    let helpDiv = document.querySelector('.help');

    if (global.timeoutId) {
        clearTimeout(global.timeoutId);
        helpDiv.classList.add('hidden')
    }

    if (helpDiv) {
        helpDiv.classList.remove('hidden');

        if (clickedElement.classList.contains('fout')) {
            helpDiv.innerText = "Deze letter komt niet voor in het woord.";
        } else if (clickedElement.classList.contains('juist')) {
            helpDiv.innerText = "Deze letter komt voor in het woord en zit op de juiste plaats.";
        } else {
            helpDiv.innerText = "Deze letter komt voor in het woord maar op een andere plaats.";
        }



        global.timeoutId = setTimeout(() => {
            helpDiv.classList.add('hidden');
        }, 2000);
    }
};

const start = () => {
    kiesWoord();
    geefNaamIn();
    document.getElementById("nieuw").classList.add("hidden");
    global.isStarted = true;
    let scores = document.getElementById("highscores");
    let ol = document.querySelector("div > ol");
    if (ol) {
        ol.remove();
    }
    ol = document.createElement("ol");
    scores.appendChild(ol);
    restore();
    let divs = document.querySelectorAll("#gokken > div");
    divs.forEach(div => div.remove());
};

const restore = () => {
    const highscores = localStorage.getItem('highscores');
    if (highscores) {
        const data = JSON.parse(highscores);
        const scoresList = document.querySelector("div > ol");

        for (const item of data) {
            const { naam, guesses, date } = item;
            let li = document.createElement('li');
            const parsedDate = new Date(date);
            const month = global.maanden[parsedDate.getMonth()];
            const formattedDate = `${parsedDate.getDate()} ${month} om ${parsedDate.getHours()}:${parsedDate.getMinutes()}`;
            li.innerText = `${naam}: ${guesses} gok(ken) \n [${formattedDate}]`;
            scoresList.appendChild(li);
        }
    } else {
        console.log("Er zijn geen highscores opgeslagen.");
    }
};


const nieuweGok = () => {
    if (global.isStarted) {
        let gok = document.getElementById("gok").value.toLowerCase();
        if (gok.length === 5) {
            let aantalJuist = 0;
            let nieuwElement = document.createElement("div");
            for (let i = 0; i < gok.length; i++) {
                let gokLetter = gok[i];
                if (global.woordTeVinden.indexOf(gokLetter) === -1) {
                    let nieuweGok = createElementWithClassNameAndText("div", "fout", gokLetter.toUpperCase());
                    nieuwElement.appendChild(nieuweGok);
                } else if (global.woordTeVinden[i] === gokLetter) {
                    let nieuweGok = createElementWithClassNameAndText("div", "juist", gokLetter.toUpperCase());
                    nieuwElement.appendChild(nieuweGok);
                    aantalJuist++;
                } else {
                    let nieuweGok = createElementWithClassNameAndText("div", "bevat", gokLetter.toUpperCase());
                    nieuwElement.appendChild(nieuweGok);
                }
            }
            global.aantalGokken++;
            if (aantalJuist === 5) {
                gewonnen();
            }
            document.getElementById("gokken").appendChild(nieuwElement);
            document.querySelectorAll("div > div > div > div").forEach(element => {
                element.addEventListener("click", help);
            });
            document.getElementById("gok").value = "";
        }
    }
};

const createElementWithClassNameAndText = (element, className, text) => {
    let NewElement = createElementWithClassName(element, className);
    NewElement.appendChild(document.createTextNode(text));
    return NewElement;
};

const createElementWithClassName = (element, className) => {
    let NewElement = document.createElement(element);
    NewElement.setAttribute("class", className);
    return NewElement;
};

const verwijderen = () => {
    let ol = document.querySelector("div > ol");
    if (ol) {
        ol.remove();
    }
    let scores = document.getElementById("highscores");
    ol = document.createElement("ol");
    scores.appendChild(ol);
    localStorage.setItem("highscores", "[]");
};

const gewonnen = (naam = null, gokken = null) => {
    document.getElementById("nieuw").classList.remove("hidden");
    let playerName = naam === null ? global.naam : naam;
    let numberOfGuesses = gokken === null ? global.aantalGokken : gokken;

    let storage = localStorage.getItem('highscores');
    let highscores = storage ? JSON.parse(storage) : [];

    let duplicate = highscores.some(score => score.naam === playerName && score.guesses === numberOfGuesses);
    if (!duplicate) {
        const today = new Date();
        highscores.push({
            naam: playerName,
            guesses: numberOfGuesses,
            date: today.toISOString()
        });
        highscores.sort((a, b) => a.guesses - b.guesses);
        localStorage.setItem('highscores', JSON.stringify(highscores));
    }

    let ol = document.querySelector("div > ol");
    if (!ol) {
        ol = document.createElement("ol");
        document.getElementById("highscores").appendChild(ol);
    }
    ol.innerHTML = '';

    highscores.forEach((score) => {
        let li = document.createElement('li');
        const parsedDate = new Date(score.date);
        const month = global.maanden[parsedDate.getMonth()];
        const formattedDate = `${parsedDate.getDate()} ${month} om ${parsedDate.getHours()}:${parsedDate.getMinutes()}`;
        li.innerText = `${score.naam}: ${score.guesses} gok(ken) \n [${formattedDate}]`;
        ol.appendChild(li);
    });
};


const kiesWoord = () => {
    global.woordTeVinden = global.woorden[Math.floor(Math.random() * global.woorden.length)];
    console.log(global.woordTeVinden);
};

const geefNaamIn = () => {
    global.naam = window.prompt("Geef je naam in.");
    console.log(global.naam);
};

window.addEventListener("load", setup);
