const setup = () => {
    let toonRes= document.getElementById("resultaat");
    toonRes.addEventListener("click", toon);
}

const toon = () => {
    let roker = document.getElementById("roker");
    let nl = document.getElementById("nl");
    let fr = document.getElementById("fr");
    let en = document.getElementById("en");
    let buur = document.getElementById("buur");
    let bestelling = document.getElementById("bestelling")

    if(roker.checked){
        console.log("is een roker");
    } else{
        console.log("is geen roker")
    }
    let taal = "";
    if(nl.checked){
        taal = "nl";
    } else if (fr.checked){
        taal = "fr";
    } else if (en.checked){
        taal = "en";
    }
    console.log("moedertaal is " + taal);
    let land = "";
    if(buur.value === "frankrijk"){
        land = "Frankrijk";
    } else if(buur.value === "nederland"){
        land = "Nederland";
    } else{
        land = "Duitsland";
    }
    console.log("favoriete buurland is " + land)
    let bestel = "";
    for(let i = 0; i < bestelling.length; i++){
        if(bestelling[i].selected){
            bestel += bestelling[i].value + " ";
        }
    }
    bestel.trim();
    console.log("bestelling bestaat uit " + bestel);
}

window.addEventListener("load", setup);