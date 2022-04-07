const container = document.querySelector(".container");
const newGrid = document.querySelector("#newGrid")

newGrid.addEventListener("click", function(e){
    customGrid()
})

function createDiv(){
   const block = document.createElement('div');
   block.addEventListener("mouseenter", ()=>{
    block.classList.add("block")
   })
   container.appendChild(block);
}

function createGrid(row=16, column=15) {
    for(i = 0; i < row; i++){
        createDiv()
        for(j = 0; j < column; j++){
            createDiv()
        }
    }
}

function customGrid(){
    let userData = prompt('enter a grid size numerically (max 100)', '16')
    while (userData > 100){
     userData = prompt('please try again, your input cannot exceed 100', '16')
    }
    createGrid(userData);
}

createGrid()
