
/* ---------- SETUP ---------- */
const resolution = 16;
const gridWidth = 800;
const gridHeight = 640;
let fps = 15;

let grid, cols, rows, initialState;


function setup() {
    createCanvas(gridWidth, gridHeight)

    cols = width / resolution
    rows = height / resolution

    grid = make2DArray(cols, rows)
    initialState = grid
}

function draw() {
    frameRate(fps)
    background(255)

    grid.forEach((col, i) => {
        col.forEach((_, j) => {
            const x = i * resolution
            let y = j * resolution

            if ( grid[i][j] === 1 ) {
                fill(0)
                stroke(0)
                rect(x, y, resolution - 1, resolution - 1)
            } else {
                fill(255)
                stroke(0)
                rect(x, y, resolution - 1, resolution - 1)

            }
        })
    });

    grid = generateNext(grid)
}

/* ---------- CONTROLS ---------- */
const stopBtn = document.getElementById('stop')
const resumeBtn = document.getElementById('resume')
const resetBtn = document.getElementById('reset')
const nextBtn = document.getElementById('nextgen')

stopBtn.addEventListener('click', () => {
    noLoop()
})

resumeBtn.addEventListener('click', () => {
    loop()
})

nextBtn.addEventListener('click', () => {
    draw()
})

resetBtn.addEventListener('click', () => {
    grid = initialState
    draw()
})