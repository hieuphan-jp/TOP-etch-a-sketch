const containerElement = document.querySelector(".container"); 
let N = 100; 
for(let i = 1; i <= N; ++i) {
    const rowElement = document.createElement("div"); 
    //rowElement.textContent = "row"; 
    rowElement.classList.add("row"); 
    containerElement.appendChild(rowElement); 
    for(let j = 1; j <= N; ++j) {
        const cellElement = document.createElement("div"); 
        //cellElement.textContent = "Cell"; 
        cellElement.classList.add("cell"); 
        rowElement.appendChild(cellElement); 
    }
}

function changeColor(color) {
    return function eventHandler(e) {
        if (!isMouseDown) return; // chỉ khi nhấn chuột
        if (e.target.classList.contains("cell")) {
            e.target.style.backgroundColor = color;
        }
    }
}

let isMouseDown = false;
const container = document.querySelector(".container");

container.addEventListener("mousedown", e => {
    isMouseDown = true;
});

container.addEventListener("mouseup", e => {
    isMouseDown = false;
});

containerElement.addEventListener("mousemove", changeColor("black")); 
//containerElement.addEventListener("mouseout", changeColor("white")); 
