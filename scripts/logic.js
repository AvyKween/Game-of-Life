/*------------ MAKES AND POPULATES A 2D GRID WITH THE GIVEN AMOUNT OF COLUMNS AND ROWS ------------*/
const make2DArray = (cols, rows) => {
    let arr = new Array(cols).fill();
    const matrix = arr.map(
        () => new Array(rows)
            .fill()
            .map(() => floor(random(2)))
    )
    return matrix
}

/*------------ GENERATES THE NEXT GENERATION BASED ON PREVIOUS ONE------------*/
const generateNext = (grid) => {
    const nextGeneration = grid.map((col, i) =>
        col.map((v, j) => nextCell(v, i, j, grid))
    )
    return nextGeneration
}

/* ------------ GENERATES THE NEXT CELL BASED ON ITS COORDS AND SURROUNDINGS CELLS ------------ */
const nextCell = (v, x, y, grid) => {
    // x: column, y: rows
    const cols = grid.length
    const rows = grid[0].length
    let sum = 0
    let newValue;
    
    /* --- Corners --- */
    
    // Top Left Corner
    if (x === 0 && y === 0) {
        sum = grid[x + 1][y]     === 0 ? sum : sum + 1
        sum = grid[x][y + 1]     === 0 ? sum : sum + 1
        sum = grid[x + 1][y + 1] === 0 ? sum : sum + 1        
    }

    // Bot Left Corner
    if (x === 0 && y === rows - 1) {            
        sum = grid[x][y - 1]     === 0 ? sum : sum + 1
        sum = grid[x + 1][y - 1] === 0 ? sum : sum + 1
        sum = grid[x + 1][y]     === 0 ? sum : sum + 1
    }

    // Top Right Corner
    if (x === cols - 1 && y === 0) {            
        sum = grid[x - 1][y]     === 0 ? sum : sum + 1
        sum = grid[x - 1][y + 1] === 0 ? sum : sum + 1
        sum = grid[x][y + 1]     === 0 ? sum : sum + 1
    }

    // Bot Right Corner 
    if (x === cols - 1 && y === rows - 1) {     
        sum = grid[x - 1][y - 1] === 0 ? sum : sum + 1
        sum = grid[x][y - 1]     === 0 ? sum : sum + 1
        sum = grid[x - 1][y]     === 0 ? sum : sum + 1
    }

    
    /* --- Edges --- */

    // Top Edge Cells
    if (y === 0 && x > 0 && x < cols - 1) {
        sum = grid[x - 1][y]     === 0 ? sum : sum + 1
        sum = grid[x + 1][y]     === 0 ? sum : sum + 1
        sum = grid[x - 1][y + 1] === 0 ? sum : sum + 1
        sum = grid[x][y + 1]     === 0 ? sum : sum + 1
        sum = grid[x + 1][y + 1] === 0 ? sum : sum + 1
    }

    // Bot Edge Cells
    if (y === rows - 1 && x > 0 && x < cols - 1) { 
        sum = grid[x - 1][y - 1] === 0 ? sum : sum + 1
        sum = grid[x][y - 1]     === 0 ? sum : sum + 1
        sum = grid[x + 1][y - 1] === 0 ? sum : sum + 1
        sum = grid[x - 1][y]     === 0 ? sum : sum + 1
        sum = grid[x + 1][y]     === 0 ? sum : sum + 1
    }
    
    // Left Edge Cells
    if (x === 0 && y > 0 && y < rows - 1) {
        sum = grid[x][y - 1]     === 0 ? sum : sum + 1
        sum = grid[x + 1][y - 1] === 0 ? sum : sum + 1
        sum = grid[x + 1][y]     === 0 ? sum : sum + 1
        sum = grid[x][y + 1]     === 0 ? sum : sum + 1
        sum = grid[x + 1][y + 1] === 0 ? sum : sum + 1
    }
    
    // Right Edge Cells
    if (x === cols - 1 && y > 0 && y < rows - 1) {
        sum = grid[x - 1][y - 1] === 0 ? sum : sum + 1
        sum = grid[x][y - 1]     === 0 ? sum : sum + 1
        sum = grid[x - 1][y]     === 0 ? sum : sum + 1
        sum = grid[x - 1][y + 1] === 0 ? sum : sum + 1
        sum = grid[x][y + 1]     === 0 ? sum : sum + 1
    }


    /* --- Remaining Cells --- */
    if (x > 0 && x < cols - 1 && y > 0 && y < rows - 1) {
        sum = grid[x - 1][y - 1] === 0 ? sum : sum + 1
        sum = grid[x][y - 1]     === 0 ? sum : sum + 1
        sum = grid[x + 1][y - 1] === 0 ? sum : sum + 1
        
        sum = grid[x - 1][y]     === 0 ? sum : sum + 1
        sum = grid[x + 1][y]     === 0 ? sum : sum + 1
        
        sum = grid[x - 1][y + 1] === 0 ? sum : sum + 1
        sum = grid[x][y + 1]     === 0 ? sum : sum + 1
        sum = grid[x + 1][y + 1] === 0 ? sum : sum + 1
    }

    /* --- RULES --- */
    // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
    // Any live cell with two or three live neighbours lives on to the next generation.
    // Any live cell with more than three live neighbours dies, as if by overpopulation.
    // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    if (v === 1 && (sum === 2 || sum === 3) ) {
        newValue = 1
    } else {
        newValue = 0
    }

    if (v === 0 && (sum === 3) ) {
        newValue = 1
    }

    return newValue
}