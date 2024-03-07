const setup = () => {
    let text = "De man van An geeft geen hand aan ambetante verwanten";
    let aantal= 0;
    for(let i = 0; i < text.length; i++){
        let ind = text.indexOf("an", i);
        if(ind !== text.indexOf("an", i++)){
            aantal++;
        }
    }
    console.log(aantal);
}
window.addEventListener("load", setup);