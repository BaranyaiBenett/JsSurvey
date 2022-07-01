// main container
const container = document.querySelector(".container");

    
const slider = container.querySelector(".slider");
const leftOverlay = container.querySelector(".progress-minus");
const rightOverlay = container.querySelector(".progress-plus");
const clearButton = container.querySelector(".clearButton");    
const negativeLimit = container.querySelector(".negativeLimit");
const positiveLimit = container.querySelector(".positiveLimit");

function customSlider(){
    const maxVal = slider.getAttribute("max");
    let leftOverlayWidth = "50%";
    let rightOverlayWidth = "50%";
    let color = "white";
    let brightness = Math.abs(slider.value / 100);
    // calculate the hidden parts of the slider
    if(slider.value < 0){
        leftOverlayWidth = (50 - Math.abs((slider.value / maxVal) * 50)) + "%";
        rightOverlayWidth = "50%";
        color = "#02d3a4";
    }else if(slider.value > 0){
        leftOverlayWidth = "50%";
        rightOverlayWidth = (50 - Math.abs((slider.value / maxVal) * 50)) + "%";
        color = "#e00028";
    }else{
        color = "black";
        brightness = 1;
    }

    slider.style.setProperty("--thumb-background-color",color);
    slider.style.setProperty("--thumb-filter",`brightness(${brightness})`);
    rightOverlay.style.width = rightOverlayWidth;
    leftOverlay.style.width = leftOverlayWidth;
    negativeLimit.style.color = "white";
    positiveLimit.style.color = "white";
}

function clearSlider(){
    slider.value = 0
    rightOverlay.style.width = "50%";
    leftOverlay.style.width = "50%";
    slider.style.setProperty("--thumb-background-color","black");
    slider.style.setProperty("--thumb-filter","brightness(1)");
}

slider.addEventListener("input", () => {
    customSlider();
});

clearButton.addEventListener("click", clearSlider);
