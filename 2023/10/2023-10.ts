function getNext(x: number, y: number, pipeSymbol: string) {
    if(pipeSymbol === '-') return [[x+1, y], [x-1, y]];
    if(pipeSymbol === 'L') return [[x+1, y], [x, y-1]];
    if(pipeSymbol === 'J') return [[x-1, y], [x, y-1]];
    if(pipeSymbol === 'F') return [[x+1, y], [x, y+1]];
    if(pipeSymbol === '7') return [[x-1, y], [x, y+1]];
    if(pipeSymbol === '|') return [[x, y+1], [x, y-1]];
    throw new Error('unknown pipe' + pipeSymbol);
}
function getStep(map: string[][], startX: number, startY: number) {
    const queue: [number, number, number][] = [];
    queue.push([startX, startY, 0]);

    const visited = new Set<string>()
    visited.add(`${startX},${startY}`)

    let maxSteps = 0;

    while (queue.length > 0){
        const [x,y, step] = queue.shift()!;

        if(step > maxSteps) maxSteps = step;

        const pipeSymbol = map[y][x];

        const nexts = getNext(x, y, pipeSymbol);

        for (const [nextX, nextY] of nexts!) {
            if(visited.has(`${nextX},${nextY}`)) continue;

            visited.add(`${nextX},${nextY}`)
            queue.push([nextX, nextY, step +1]);
        }
    }
    return maxSteps;
}

export const part1 = (input: string) => {
    const map = input.split('\n').map(line => line.split(''));
    const lineWithS = map.find(line => line.includes('S'));
    const startY = map.indexOf(lineWithS!);
    const startX = lineWithS?.indexOf('S')!;
    map[startY][startX] = 'F';
    const result = getStep(map, startX, startY)
    console.log(startX, startY)
    return result;
}
export const part2 = (input: string) => {
    const lines = input.split('\n')
    return 0;
}
