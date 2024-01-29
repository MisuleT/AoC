function duplicateLinesWithDots(lines: string[]): string[] {
    const result = [];
    for (const line of lines) {
        if (/^\.*$/.test(line)) {
            result.push(line, line);
        } else {
            result.push(line);
        }
    }

    return result;
}

function transpose(lines: string[]) {
    return lines[0].split('').map((_, i) => lines.map(row => row[i])).map(row => row.join(''));
}

function extendRowsAndColumnsWithDots(lines: string[]) {
    const transposedLines = transpose(lines);
    const extendedTransposedLines = duplicateLinesWithDots(transposedLines);
    const extendedLines = transpose(extendedTransposedLines);

    return duplicateLinesWithDots(extendedLines);
}

export const part1 = (input: string) => {
    const lines = input.split('\n');
    const universe = extendRowsAndColumnsWithDots(lines).map(line => line.split(''));
    let galaxies = [];
    let num = 0;
    for (let i = 0; i < universe.length; i++) {
        for (let j = 0; j < universe[i].length; j++) {
            if(universe[i][j] === '#') {
                galaxies.push({galaxy: num, column: i, row: j}) // i = column, j = row
                num++;
            }
        }
    }
    let result = 0
    for (let i = 0; i < galaxies.length; i++) {
        for (let j = i+1; j < galaxies.length; j++) {
            result += Math.abs(galaxies[j].row - galaxies[i].row) + Math.abs(galaxies[j].column - galaxies[i].column)
        }
    }
    return result;
}

export const part2 = (input: string) => {
    return 0;
}
