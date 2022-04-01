const container = document.querySelector(".container");


function createDiv(){
   const block = document.createElement('div');
   block.classList.add('block');
   container.appendChild(block);
   console.log(container);
}

function createGrid() {
    let row = 16;
    for(i = 0; i < row; i++){
        createDiv()
        for(j = 0; j < row; j++){
            createDiv()
        }
    }
}