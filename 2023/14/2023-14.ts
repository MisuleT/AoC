export const part1 = (input: string) => {
    const grid = input.split('\n').map(line => line.split(''));
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === "O") {
                for (let i = y - 1; i >= 0; i--) {
                    if (grid[i][x] === "#" || grid[i][x] === "O") {
                        grid[y][x] = ".";
                        grid[i + 1][x] = "O";
                        break;
                    }

                    if (i === 0) {
                        grid[y][x] = ".";
                        grid[0][x] = "O";
                        break;
                    }
                }
            }
        }
    }
    // console.log(grid);
    let sum = 0;
    let multiplyBy = grid.length +1;
    for (let i = 0; i < grid.length; i++) {
        let count = 0;
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 'O') {
                count++;
            }
        }
        multiplyBy--;
        sum += (count * multiplyBy);
    }
    return sum;
}

export const part2 = (input: string) => {
    return 0;
}
