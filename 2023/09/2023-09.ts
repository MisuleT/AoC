function getNextValue(line: number[]): number {
    if(line.every(num => num === 0)) return 0;
    const diff = getDifferences(line);
    return line[line.length-1] + getNextValue(diff)
}

function getDifferences(line: number[]): number[]{
    const diffs = [];
    for (let i = 1; i < line.length; i++) {
        diffs.push(line[i] - line[i - 1])
    }
    return diffs;
}

export const part1 = (input: string) => {
    const lines = input.split('\n')
        .map(line => line.split(' ').map(Number));
    let result = 0;
    for (const line of lines) {
        result += getNextValue(line)
    }
    return result;
}
export const part2 = (input: string) => {
    const lines = input.split('\n')
        .map(line => line.split(' ').map(Number).reverse());
    let result = 0;
    for (const line of lines) {
        result += getNextValue(line)
    }
    return result;
}
