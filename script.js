const container = document.querySelector(".container");


function createDiv(){
   const block = document.createElement('div');
   block.classList.add('block');
   container.appendChild(block);
}


function createGrid() {
    let row = 16;
    let column = 15;
    for(i = 0; i < row; i++){
        createDiv()
        for(j = 0; j < column; j++){
            createDiv()
        }
    }
}

createGrid()
