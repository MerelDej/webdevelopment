const setup = () => {
    let stoppen = false;
    let gemeentes = document.getElementById("gemeentes");
    let array = [];
    let gemeenten = "";
    while(!stoppen){
        gemeenten = window.prompt("Gemeente:");
        if(gemeenten !== "stop" && gemeenten !== "Stop"){
            array.push(gemeenten);
            array.sort();
        } else{
            stoppen = true;
        }
    }
    for(let i = 0; i < array.length; i++){
        gemeentes.innerHTML += "<option value = \"" + array[i] + "\">" + array[i] + "</option>";
    }
}

window.addEventListener("load", setup);