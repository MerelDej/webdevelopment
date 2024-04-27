const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    let array = [];
    array.push(red, green, blue);
    localStorage.setItem("sliderValues", JSON.stringify(array));
}

const restoreSliderValues = () => {
    let rgb = JSON.parse(localStorage.getItem("sliderValues"));
    document.getElementById("sldRed").value = rgb[0];
    document.getElementById("sldGreen").value = rgb[1];
    document.getElementById("sldBlue").value = rgb[2];
}

const storeSwatches = () => {
    let swatches = document.getElementsByClassName("saves");
    let array = [];
    for (let i of swatches) {
        array.push(i.style.backgroundColor);
    }
    localStorage.setItem("swatches", JSON.stringify(array));
}

const restoreSwatches = () => {
    let swatches = JSON.parse(localStorage.getItem("swatches"));
    for (let i = 0; i < swatches.length; i++) {
        let rgbString = swatches[i];
        let rgbValues = rgbString.substring(4, rgbString.length - 1).split(",");
        let r = parseInt(rgbValues[0]);
        let g = parseInt(rgbValues[1]);
        let b = parseInt(rgbValues[2]);
        addSwatchComponent(r, g, b);
    }
}
