
export function part2(input: string): number {
    const lines = input.split('\n');
    lines.pop();
    let runningTotal = 0;

    lines.forEach(function(value) {
        let [ , sets] = value.split(':').map(i => i.trim());
        let set = sets.split(';').map(i => i.trim());
        let cubeMinimum = { 'red': 0, 'green': 0, 'blue': 0 }

        set.forEach(function(value) {
            let cubes = value.split(",").map(i => i.trim());
            cubes.forEach(function(cube) {
                let [count, color] = cube.split(' ').map(i => i.trim());

                // @ts-ignore
                if (cubeMinimum[color] < Number(count)) { cubeMinimum[color] = Number(count); }
            });
        });

        runningTotal += Object.values(cubeMinimum).reduce( (p, n) => p*n, 1);
    });

    return runningTotal;
}

export function part1(input: string) {
    const lines = input.split('\n');
    //lines.pop()
    let runningTotal = 0;
    const maxcubes = { 'red': 12, 'green': 13, 'blue': 14 }

    lines.forEach(function(value) {
        let [game, sets] = value.split(':').map(i => i.trim());
        // @ts-ignore
        let gameid = Number(game.match(/(\d+$)/)[0]);
        let set = sets.split(';').map(i => i.trim());
        let possible = true;

        set.forEach(function(value) {
            let cubes = value.split(",").map(i => i.trim());
            cubes.forEach(function(cube) {
                let [count, color] = cube.split(' ').map(i => i.trim());
                // @ts-ignore
                if (Number(count) > maxcubes[color]) { possible = false; }
            });
        });

        if (possible) { runningTotal += gameid; }
    });
    return runningTotal;
}

