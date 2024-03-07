const setup = () => {
	let text = "De man van An geeft geen hand aan ambetante verwanten";
    for(let i = 0; i < text.length; ){
        let aantal= 0;
        let index= text.indexOf("an", i);
        aantal += index;
        console.log(aantal);
    }
}
window.addEventListener("load", setup);