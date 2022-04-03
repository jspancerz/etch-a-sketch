const container = document.querySelector(".container");

function createDiv(){
   const block = document.createElement('div');
   block.addEventListener("mouseenter", ()=>{
    block.classList.add("block")
   })
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

function hoverColor(){
    block.addEventListener("mouseenter", function(e){
        event.target.style.color = "purple";
    })
}





createGrid()
