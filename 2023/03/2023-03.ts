export function part1(input: string): number {
    const lines = input.split('\n').map(line => line.split(''));
    // console.log(lines)
    // lines.pop();
    let sum = 0;

    function isNumber(s: string){
        return s.match(/[0-9]/);
    }

    for (let i = 0; i < lines.length; i++) {
        let currentNumber = '', checkNumber = false, nearSymbol = false;

        for (let j = 0; j < lines[i].length; j++) {

            if (isNumber(lines[i][j]) && !checkNumber) {
                checkNumber = true;
                currentNumber = '';
                nearSymbol = false;
            }

            if ((j == lines[i].length - 1 || !isNumber(lines[i][j])) && checkNumber) {
                if (nearSymbol) sum += parseInt(currentNumber + ((lines[i][j].match(/[0-9]/)) ? lines[i][j] : ''));
                checkNumber = false;
            }

            if (checkNumber) {
                currentNumber += lines[i][j];

                for (let j = -1; j <= 1; j++) {
                    for (let i = -1; i <= 1; i++) {
                        if (i == 0 && j == 0) continue;
                        if (i + j < 0 || i + j >= lines.length || j + i < 0 || j + i >= lines[i].length) continue;

                        if (!lines[i + j][j + i].match(/[0-9.]/)) nearSymbol = true;
                    }
                }
            }
        }
    }

    return sum;
}

export function part2(input: string) {
    const lines = input.split('\n');
    const grid = input.split('\n').map(line => line.split(''));
    // grid.pop()
    let gearNumbers = {};

    for (let y = 0; y < grid.length; y++) {
        let currentNumber = '', checkNumber = false, gearLocation = null;

        for (let x = 0; x < grid[y].length; x++) {

            if (grid[y][x].match(/[0-9]/) && !checkNumber) {
                checkNumber = true;
                currentNumber = '';
                gearLocation = null;
            }

            if ((x == grid[y].length - 1 || !grid[y][x].match(/[0-9]/)) && checkNumber) {
                if (gearLocation) { // @ts-ignore
                    gearNumbers[gearLocation].push(parseInt(currentNumber + ((grid[y][x].match(/[0-9]/)) ? grid[y][x] : '')));
                }
                checkNumber = false;
            }

            if (checkNumber) {
                currentNumber += grid[y][x];

                //  star
                for (let j = -1; j <= 1; j++) {
                    for (let i = -1; i <= 1; i++) {
                        if (i == 0 && j == 0) continue;
                        if (y + j < 0 || y + j >= grid.length || x + i < 0 || x + i >= grid[y].length) continue;

                        const char = grid[y + j][x + i];
                        if (char == '*') {
                            gearLocation = `${x + i},${y + j}`;
                            // @ts-ignore
                            if (gearNumbers[gearLocation] == null) gearNumbers[gearLocation] = [];
                        }
                    }
                }
            }
        }
    }
    return Object.values(gearNumbers).reduce((sum, array) => {
        // @ts-ignore
        if (array.length == 2) sum += array[0] * array[1];
        return sum;
    }, 0);
}

