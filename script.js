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
    let grid = document.getElementById('grid');
    grid.deleteRow(-1);
    
    if(numRows > 0) //prevent counter from going below 0
        numRows--;
    //if statement to reset grid to prevent potential bug
    if(numRows === 0) 
        numCols = 0;
}

// Remove a column
function removeC() {
    let grid = document.getElementById("grid"); 

    for (let i = 0; i < numRows; i++) {
        grid.rows[i].deleteCell(-1);
    }

    if(numCols > 0) //prevent counter from going below 0
        numCols--; 
    //similar if statement as removeR() for the same reason
    if(numCols === 0) 
        numRows = 0;
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
