// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let grid = document.getElementById('grid');
    let row = document.createElement('tr');

    if(numCols === 0) 
        numCols++; 
    
    for(let i = 0; i < numCols; i++) {
        let child = document.createElement('td');
        row.appendChild(child); 
    }

    grid.appendChild(row);
    numRows++;
}

// Add a column (similar to row)
function addC() {
    let grid = document.getElementById('grid');
    let row = document.createElement('tr');

    if (numRows === 0) {
        numRows++; 
        grid.appendChild(row); 
    }

    for (let i = 0; i < numRows; i++) {
        let child = document.createElement('td');
        grid.children[i].appendChild(child);
    }

    numCols++;
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}

function changeColor(cell) {
    cell.style.backgroundColor = colorSelected;
}