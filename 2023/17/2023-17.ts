import {MinBucketQueue} from "bucket-priority-queue";

const getNextPositions: Record<string, (x: number, y: number) => [number, number, string][]> =  {
    R: (x: number,y: number) => [
        [x+1, y, 'R'],
        [x, y+1, 'D'],
        [x, y-1, 'U'],
    ],
    L: (x: number,y: number) => [
        [x-1, y, 'L'],
        [x, y+1, 'D'],
        [x, y-1, 'U'],
    ],
    U: (x: number,y: number) => [
        [x, y-1, 'U'],
        [x+1, y, 'R'],
        [x-1, y, 'L'],
    ],
    D: (x: number,y: number) => [
        [x, y+1, 'D'],
        [x+1, y, 'R'],
        [x-1, y, 'L'],
    ]
};

type Step = [number, number, string, number, number];

const getKey = ([x,y,direction, step]: Step) => {
    return JSON.stringify([x,y,direction, step]);
}

function bfs(map: number[][], minStep: number, maxStep: number) {
    const startPos2: Step = [0, 0, 'R', 0, 0] // x. y, direction, step count, heatLoss
    const startPos: Step = [0, 0, 'D', 0, 0] // x. y, direction, step count, heatLoss
    const finalPos: [number, number] = [map[0].length-1, map.length-1,]
    let que =  new MinBucketQueue<Step>(); // works only for positive integers
    que.push(startPos, 0);
    que.push(startPos2, 0);

    let visited = new Set<string>();
    visited.add(getKey(startPos));
    visited.add(getKey(startPos2));
    while (que.length > 0) {
        let [x, y, direction, step, heatLoss] = que.pop()!;
        if(x === finalPos[0] && y === finalPos[1] && step >= minStep) {
            return heatLoss;
        }
        let nextPositions = getNextPositions[direction](x,y);
        for (const [nx, ny, nDirection] of nextPositions) {
            if (nx < 0 || ny < 0 || nx >= map.length || ny >= map.length) continue;
            if(maxStep && step  === maxStep && direction === nDirection) continue;
            if(step  < minStep && direction !== nDirection) continue;
            const nStep =  direction === nDirection ? step + 1 : 1; // when direction change step is 1 again
            const nextStep: Step = [nx, ny, nDirection, nStep, heatLoss + map[ny][nx]]
            if (visited.has(getKey(nextStep))) continue;

            // A* add distance between position in map  and final
            // const priority = heatLoss + map[ny][nx] + (finalPos[0] - nx + finalPos[1]- ny);

            const priority = heatLoss + map[ny][nx];
            que.push(nextStep, priority);
            visited.add(getKey(nextStep));
        }
    }
    return 0;
}

export const part1 = (input: string) => {
    const map = input.split('\n').map(a => a.split('').map(Number));
    return bfs(map, 0, 3);
}
export const part2 = (input: string) => {
    const map = input.split('\n').map(a => a.split('').map(Number));
    return bfs(map, 4, 10);
}
