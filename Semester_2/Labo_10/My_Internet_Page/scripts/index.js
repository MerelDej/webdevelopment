let global = {
    history: []
}

const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", zoek);
    if(localStorage.getItem("history") !== null) {
        herstelHistory();
    }
}

const zoek = () => {
    let input = document.getElementById("input");
    let command = input.value.trim();
    if(command.charAt(0) !== "/" || command.charAt(2) !== " ") {
        alert("Invalid command");
    } else {
        let link;
        let z = command.slice(3);
        let prefix = command.charAt(1);
        switch (prefix) {
            case "g":
                link = "https://www.google.com/search?q=" + z;
                window.open(link);
                historyToevoegen("Google", z, link);
                break;
            case "y":
                link = "https://www.youtube.com/search?q=" + z;
                window.open(link);
                historyToevoegen("Youtube", z, link);
                break;
            case "t":
                link = "https://www.twitter.com/search?q=" + z;
                window.open(link);
                historyToevoegen("Twitter", z, link);
                break;
            case "i":
                link = "https://www.instagram.com/explore/search/keyword/?q=" + z;
                window.open(link);
                historyToevoegen("Instagram", z, link);
                break;
            default:
                alert("Unknown command prefix")
        }
    }
}

const maakKaart = (ttl, t, l) => {
    let col4 = maakElementMClass("div", "col-4");
    let kaart = maakElementMClass("div", "card");
    kaart.classList.add(ttl.toLowerCase());
    let cardBody = maakElementMClass("div", "card-body");
    let titel = maakElementMClassEText("h5", "card-title", ttl);
    let text = maakElementMClassEText("p", "card-text", t);
    let link = maakLink(l);
    link.classList.add(ttl.toLowerCase() + "-btn");

    cardBody.appendChild(titel);
    cardBody.appendChild(text);
    cardBody.appendChild(link);
    kaart.appendChild(cardBody);
    col4.appendChild(kaart);

    let row = document.querySelector("#result > .row");
    row.appendChild(col4);
}

const maakElementMClass = (el, c) => {
    let e = document.createElement(el);
    e.setAttribute("class", c);
    return e;
}

const maakElementMClassEText = (el, c, t) => {
    let e = maakElementMClass(el, c);
    let tn = document.createTextNode(t)
    e.appendChild(tn);
    return e;
}

const maakLink = (l) => {
    let b = document.createElement("a");
    b.href = l;
    b.classList.add("btn");
    b.classList.add("btn-primary");
    b.target = "_blank";
    b.appendChild(document.createTextNode("Go!"));
    return b;
}

const historyToevoegen = (ttl, t, link) => {
    global.history.push({
        titel: ttl,
        text: t,
        url: link
    })
    maakKaart(ttl, t, link);
    localStorage.setItem("history", JSON.stringify(global.history));
}

const herstelHistory = () => {
    global.history = JSON.parse(localStorage.getItem("history"));
    for(let i = 0; i < global.history.length; i++) {
        maakKaart(global.history[i].titel, global.history[i].text, global.history[i].url);
    }
}

window.addEventListener("load", setup);