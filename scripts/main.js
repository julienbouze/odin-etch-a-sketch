const grid = document.querySelector('#grid');
setGridSize(4);
function getUserChoice(){
    let sideNumber = prompt("What number of square by side do you want ? MAX : 100");
    if (sideNumber == null || sideNumber < 4){
        sideNumber = 4;
    }
    if (sideNumber > 100){
        sideNumber = 100;
    }
    setGridSize(sideNumber);
}

function hover() {
    let currentColor = this.style.backgroundColor;
    if (currentColor) {
        let rgbValues = currentColor.match(/\d+/g); 
        let red = parseInt(rgbValues[0]);
        let green = parseInt(rgbValues[1]);
        let blue = parseInt(rgbValues[2]);
        
        red = Math.max(0, red - 25);
        green = Math.max(0, green - 25);
        blue = Math.max(0, blue - 25);
        
        this.style.backgroundColor = `rgb(${red},${green},${blue})`; 
    } 
    else {
        let red = getRandomColor();
        let green = getRandomColor();
        let blue = getRandomColor();
        this.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }

}

function setGridSize(number){
    if (grid.hasChildNodes){
        grid.innerHTML = "";
    }
    
    let divSize = String(100 / number).concat("%");
    gridSize = number*number;
    for(let i = 0 ; i < gridSize ; ++i){
        let div = document.createElement('div');
        div.classList.add('square');
        div.style.flexBasis = divSize;
        div.style.paddingBottom = divSize;
        div.id = i+1;
        div.addEventListener("mouseover", hover);
        grid.appendChild(div);
    }
}
const gridSizeBtn = document.querySelector('#gridSizeBtn');
gridSizeBtn.addEventListener("click",getUserChoice);

function getRandomColor(){
    return Math.floor(Math.random()* 256);
}
