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
    const extendedInput = extendRowsAndColumnsWithDots(lines).map(line => line.split(''));
    console.log(extendedInput)
    const result = 0
    return result;
}

export const part2 = (input: string) => {
    return 0;
}
