function shoelace(corners: [number, number][]) {
    let sum  = 0;
    for (let i = 0; i < corners.length-1; i++) {
        const [xN, yN]= corners[i+1]
        const [x, y]= corners[i]
        sum += (y + yN)*(x - xN);
    }
    return sum / 2;
}

export const part1 = (input: string) => {
    const instructions = input.split('\n').map(a => a.split(' '));
    const corners: [number, number][] = []
    let [x,y] = [0,0];
    let stepCount = 0;
    for (const [direction, steps] of instructions) {
        stepCount += Number(steps);
        if(direction === 'R') x += Number(steps);
        if(direction === 'D') y += Number(steps);
        if(direction === 'L') x -= Number(steps);
        if(direction === 'U') y -= Number(steps);
        corners.push([x,y]);
    }
    const result = shoelace(corners);

    return (result + stepCount/2) +1;
}
const DIRECTION_MAP: Record<string, string>= {
    '0': 'R',
    '1': 'D',
    '2': 'L',
    '3': 'U'
}
export const part2 = (input: string) => {
    const instructions = input.split('\n').map(a => a.split('#')).map(([a, hexa]) => {
        const step =  parseInt(hexa.substring(0, 5), 16);
        const direction = DIRECTION_MAP[hexa.substring(5,6)];
        return [direction, step];
    });
    const corners: [number, number][] = []
    let [x,y] = [0,0];
    let stepCount = 0;
    for (const [direction, steps] of instructions) {
        stepCount += Number(steps);
        if(direction === 'R') x += Number(steps);
        if(direction === 'D') y += Number(steps);
        if(direction === 'L') x -= Number(steps);
        if(direction === 'U') y -= Number(steps);
        corners.push([x,y]);
    }
    const result = shoelace(corners);

    return (result + stepCount/2) +1;
}
