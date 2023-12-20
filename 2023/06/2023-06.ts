
export const part1 = (input: string) => {
    const lines = input.split("\n");
    let result = 1;
    const times = lines[0].match(/\d+/g);
    const distances = lines[1].match(/\d+/g);
    // @ts-ignore
    for(let i = 0; i<times.length; i++) {
        let raceWays = 0;
        // @ts-ignore
        for(let t = 0; t<= (!(times) || times[i] * 1); t++) {
            const speed = t;
            // @ts-ignore
            const time = (times[i] * 1) - t;
            // @ts-ignore
            if((!(distances) || distances[i] * 1) < (speed * time)) {
                raceWays++;
            }
        }
        console.log({i,raceWays});
        result *= raceWays;
    }
    return result;
}
export const part2 = (input: string) => {
    const lines = input.split("\n");
    lines.pop();
    const [times, distances] = lines.map((row) =>
        // @ts-ignore
        row.replaceAll(" ", "").match(/\d+/g).map((digit) => Number(digit))
    );

    console.log(times)

    const seriesOfWaysToWin: number[] = [];

    times.forEach((time, i) => {
        let waysToWin = 0;

        for (let buttonTime = 1; buttonTime < time; buttonTime++) {
            if (buttonTime * (time - buttonTime) > distances[i]) {
                waysToWin++;
            }
        }

        seriesOfWaysToWin.push(waysToWin);
    });

    const multipliedSeriesOfWaysToWin = seriesOfWaysToWin.reduce(
        (product, waysToWin) => product * waysToWin,
        1
    );

    console.log(multipliedSeriesOfWaysToWin);

    return multipliedSeriesOfWaysToWin;
}
