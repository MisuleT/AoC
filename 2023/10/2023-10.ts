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
    return {maxSteps, visited};
}

const TILE_MAP: Record<string, string> = {
    "|": "║",
    "-": "═",
    L: "╚",
    J: "╝",
    "7": "╗",
    F: "╔",
}

function print(map: string[][], visited: Set<string>){
    let index = 0;
    const visetedArr = Array.from(visited);
    const time = setInterval(()=>{
        const position = visetedArr[index];
        const [x, y] = position.split(',').map(Number);
        map[y][x] = TILE_MAP?.[map[y][x]] || 'o';
        if(index % 20 === 0){
            const joined = map.map(line => line.join('')).join('\n');
            console.clear();
            console.log(joined)
        }
        index++;
        if(index >= visetedArr.length) clearInterval(time);
    }, 3)

}

export const part1 = (input: string) => {
    const map = input.split('\n').map(line => line.split(''));
    const lineWithS = map.find(line => line.includes('S'));
    const startY = map.indexOf(lineWithS!);
    const startX = lineWithS?.indexOf('S')!;
    map[startY][startX] = 'F';
    const result = getStep(map, startX, startY)
    print(map, result.visited);
    return result.maxSteps;
}
// ray casting / count crossing
function countPipes(pipes: string) {
    // Need to check only edges, other combination can be "|F7"
    const matches = pipes.match(/[|LJ]/g);
    return matches ? matches.length : 0
}

export const part2 = (input: string) => {
    const map = input.split('\n').map(line => line.split(''));
    const lineWithS = map.find(line => line.includes('S'));
    const startY = map.indexOf(lineWithS!);
    const startX = lineWithS?.indexOf('S')!;

    map[startY][startX] = 'F';

    const {maxSteps, visited} = getStep(map, startX, startY);

    let result = 0;

    for (let i = 0; i < map.length; i++) {
        let visitedPipes = '';
        for (let j = 0; j <= map[i].length; j++) {

            if(visited.has(`${j},${i}`)) { // visited[x][y]
                visitedPipes += map[i][j]; // map[y][x]
            } else {
                const crossCount  = countPipes(visitedPipes)

                if(crossCount % 2 === 1 ){
                    result++
                }
            }
        }
    }
    return result;
}
