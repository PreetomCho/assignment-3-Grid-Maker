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
        child.setAttribute('onclick', 'changeColor(this)');
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
        child.setAttribute('onclick', 'changeColor(this)');
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
    let cells = document.getElementsByTagName('td');
    for(let i = 0; i < cells.length; i++) {
        if(cells[i].style.backgroundColor === '')
            cells[i].style.backgroundColor = colorSelected;
    }
}

// Fill all cells
//similar to fillU(), except without the if statement
function fillAll(){
    let cells = document.getElementsByTagName('td')
    for(let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
//also similar to fillU and fillAll, except remove the color
function clearAll(){
    let cells = document.getElementsByTagName('td');
    for(let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = '';
    }
}

//created change color function to change color on click for adding rows/columns
//used given selectColor() function as reference
function changeColor(cells) {
    cells.style.backgroundColor = colorSelected;
}