function getNextPositions(x: number, y: number, direction: string, tile: string){
    const positions: [number, number, string][] = [];
    if(tile === '.'){
       if(direction === 'R')  positions.push([x+1, y, direction]);
       if(direction === 'L')  positions.push([x-1, y, direction]);
       if(direction === 'U')  positions.push([x, y-1, direction]);
       if(direction === 'D')  positions.push([x, y+1, direction]);
   }
    if(tile === '|'){
        if(direction === 'R' || direction === 'L')  {
            positions.push([x, y-1, 'U']);
            positions.push([x, y+1, 'D']);
        }
        if(direction === 'D')  positions.push([x, y+1, direction]);
        if(direction === 'U')  positions.push([x, y-1, direction]);
    }
    if(tile === '-'){
        if(direction === 'U' || direction === 'D')  {
            positions.push([x+1, y, 'R']);
            positions.push([x-1, y, 'L']);
        }
        if(direction === 'R')  positions.push([x+1, y, direction]);
        if(direction === 'L')  positions.push([x-1, y, direction]);
    }
    if(tile === '/'){
        if(direction === 'R')  positions.push([x, y-1, 'U']);
        if(direction === 'L')  positions.push([x, y+1, 'D']);
        if(direction === 'U')  positions.push([x+1, y, 'R']);
        if(direction === 'D')  positions.push([x-1, y, 'L']);
    }
    if(tile === '\\'){
        if(direction === 'R')  positions.push([x, y+1, 'D']);
        if(direction === 'L')  positions.push([x, y-1, 'U']);
        if(direction === 'U')  positions.push([x-1, y, 'L']);
        if(direction === 'D')  positions.push([x+1, y, 'R']);
    }
    return positions;
}

function printMap(map: string[][], visited: Set<string>) {
    const buffer= [];
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length ; x++) {
            if (visited.has(`${x}, ${y}`)){
                buffer.push('#');
            }else{
                buffer.push(map[y][x])
            }
        }
        buffer.push('\n');
    }
    console.log(buffer.join(''))
}

function bfs(startPos: [number, number, string], map: string[][]) {
    let que: [number, number, string][] = [startPos];
    let visited = new Set<string>();
    let energized = new Set<string>();
    visited.add(`${startPos[0]}, ${startPos[1]}, ${startPos[2]}`);
    energized.add(`${startPos[0]}, ${startPos[1]}`);
    while (que.length > 0) {
        let [x, y, direction] = que.shift()!;
        let nextPositions = getNextPositions(x, y, direction, map[y][x]);
        for (const [nx, ny, nDirection] of nextPositions) {
            if (nx < 0 || ny < 0 || nx >= map.length || ny >= map.length) continue;
            if (visited.has(`${nx}, ${ny}, ${nDirection}`)) continue;
            que.push([nx, ny, nDirection]);
            visited.add(`${nx}, ${ny}, ${nDirection}`);
            energized.add(`${nx}, ${ny}`);
        }
    }
    // printMap(map, energized)
    return energized.size;
}

export const part1 = (input: string) => {
    const map = input.split('\n').map(a => a.split(''));

    const startPos: [number, number, string] = [0, 0, 'R']
    return bfs(startPos, map);
}
export const part2 = (input: string) => {
    const map = input.split('\n').map(a => a.split(''));
    let result = 0;

    for (let y = 0; y < map.length; y++) {
        result = Math.max( bfs([0, y, 'R'], map), bfs([map[y].length -1, y, 'L'], map), result)
    }

    for (let x = 0; x < map[0].length; x++) {
        result = Math.max( bfs([x, 0, 'D'], map), bfs([x, map.length -1, 'U'], map), result)
    }

    return result;
}
