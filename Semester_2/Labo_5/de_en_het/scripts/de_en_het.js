const setup = () => {
	let zin = "De Gisteren zat de jongen op de stoep en at de helft van de appel de";
    for(let i = 0; i < zin.length; i++){
        if(zin.substring(i, i+2) === "de"){
            zin = zin.split(zin.substring(i, i+2)).join("het");
        } else if(zin.substring(i, i+2) === "De"){
            zin = zin.split(zin.substring(i, i+2)).join("Het");
        }
    }
    console.log(zin);
}

window.addEventListener("load", setup);