function moveToNorth(newGrid: string[][]) {
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
}

function moveToWest(newGrid: string[][]) {
    for (let y = 0; y < newGrid.length; y++) {
        for (let x = 0; x < newGrid[y].length; x++) {
            if (newGrid[y][x] === "O") {
                for (let i = x - 1; i >= 0; i--) {
                    if (newGrid[y][i] === "#" || newGrid[y][i] === "O") {
                        newGrid[y][x] = ".";
                        newGrid[y][i + 1] = "O";
                        break;
                    }
                    if (i === 0) {
                        newGrid[y][x] = ".";
                        newGrid[y][0] = "O";
                        break;
                    }
                }
            }
        }
    }
}

function moveToEast(newGrid: string[][]) {
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
}

function moveToSouth(grid: string[][]) {
    grid.reverse();
    moveToNorth(grid)
    return grid.reverse()
}

export const part1 = (input: string) => {
    const grid = input.split('\n').map(line => line.split(''));
    moveToNorth(grid);
    return getSumResult(grid);
}

const getSumResult = (grid: string[][]): number => {
    let sum  = 0
    for (let y = grid.length - 1; y >= 0; y--) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === "O") {
                sum += (grid.length - y)
            }
        }
    }
    return sum;
}

function doCycle(grid: string[][]){
    moveToNorth(grid);
    moveToWest(grid);
    moveToSouth(grid);
    moveToEast(grid);
}

const cache = new Map();

export const part2 = (input: string) => {
    const grid = input.split('\n').map(line => line.split(''));
    let cycleCount = 0;

    for(let i = 0; i < 1000000000; i++) {
        const key = grid.map(row => row.join(',')).join(';');
        if (cache.has(key)) {
            let [storedIndex, storedCount] = cache.get(key);
            let remainingCycles = 1000000000 - i;
            let skippedCycles = Math.floor(remainingCycles / (i - storedIndex));
            // let remainingCells = 1000000000 % (i - storedIndex);
            i += skippedCycles * (i - storedIndex);
            cycleCount += skippedCycles * storedCount;
        } else {
            cache.set(key, [i, cycleCount]);
        }
        doCycle(grid);
        cycleCount++;
    }
    return getSumResult(grid);
}
