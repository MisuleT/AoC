function moveToNorth(grid: string[][]) {
    let newGrid = grid;
    for (let y = 0; y < newGrid.length; y++) {
        for (let x = 0; x < newGrid[y].length; x++) {
            if (newGrid[y][x] === "O") {
                for (let i = y - 1; i >= 0; i--) {
                    if (newGrid[i][x] === "#" || newGrid[i][x] === "O") {
                        newGrid[y][x] = ".";
                        newGrid[i + 1][x] = "O";
                        break;
                    }

                    if (i === 0) {
                        newGrid[y][x] = ".";
                        newGrid[0][x] = "O";
                        break;
                    }
                }
            }
        }
    }
    return newGrid;
}

function moveToWest(grid: string[][]) {
    let newGrid = grid;

    for (let y = 0; y < newGrid.length; y++) {
        for (let x = 0; x < newGrid[y].length; x++) {
            if (newGrid[y][x] === "O") {
                // Check cells to the left of current cell
                for (let i = x - 1; i >= 0; i--) {
                    if (newGrid[y][i] === "#" || newGrid[y][i] === "O") {
                        // Found a wall or another 'O', move here
                        newGrid[y][x] = ".";
                        newGrid[y][i + 1] = "O";
                        break;
                    }
                    if (i === 0) {
                        // Reached the left edge, can't move any further
                        newGrid[y][x] = ".";
                        newGrid[y][0] = "O";
                        break;
                    }
                }
            }
        }
    }

    return newGrid;
}


function moveToEast(grid: string[][]) {
    let newGrid = grid;

    for (let y = 0; y < newGrid.length; y++) {
        for (let x = newGrid[y].length - 1; x >= 0; x--) {
            if (newGrid[y][x] === "O") {
                for (let i = x + 1; i < newGrid[y].length; i++) {
                    if (newGrid[y][i] === "#" || newGrid[y][i] === "O") {
                        newGrid[y][x] = ".";
                        newGrid[y][i - 1] = "O";
                        break;
                    }

                    if (i === newGrid[y].length - 1) {
                        newGrid[y][x] = ".";
                        newGrid[y][newGrid[y].length - 1] = "O";
                        break;
                    }
                }
            }
        }
    }

    return newGrid;
}


function moveToSouth(grid: string[][]) {
    let newGrid = grid.reverse();
    const moved = moveToNorth(newGrid)
    return moveToNorth(moved).reverse()
}




export const part1 = (input: string) => {
    const grid = input.split('\n').map(line => line.split(''));
    const moved = moveToNorth(grid);
    let sum = 0;
    let multiplyBy = moved.length +1;
    for (let i = 0; i < moved.length; i++) {
        let count = 0;
        for (let j = 0; j < moved[i].length; j++) {
            if (moved[i][j] === 'O') {
                count++;
            }
        }
        multiplyBy--;
        sum += (count * multiplyBy);
    }
    return sum;
}

function doCycle(arr: string[][]){
    let newArr = moveToNorth(arr)
    newArr = moveToWest(newArr);
    newArr = moveToSouth(newArr);
    newArr = moveToEast(newArr);
    return newArr;
}

const hashTableCache = {};

const hash = (grid: string[][]) => {
    return grid.map(row => row.join(',')).join(';');
}

let cache = {};
export const part2 = (input: string) => {
    const grid = input.split('\n').map(line => line.split(''));
    let finalGrid = [...grid];
    for(let i = 0; i < 1000000; i++) {
        finalGrid = doCycle(finalGrid);
    }
    let sum = 0;
    let multiplyBy = finalGrid.length +1;
    for (let i = 0; i < finalGrid.length; i++) {
        let count = 0;
        for (let j = 0; j < finalGrid[i].length; j++) {
            if (finalGrid[i][j] === 'O') {
                count++;
            }
        }
        multiplyBy--;
        sum += (count * multiplyBy);
    }
    return sum;
}
