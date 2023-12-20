
export const part1 = (inputData: string) => {
    // @ts-ignore
    const seeds = inputData.replace(/\n/g, "").match(/seeds: ([\d\s]+)/)[1].split(" ").map(x => +x)

    const maps = inputData.split(/\n+[a-z\-]+ map:\n/)
        .splice(1)
        .map(x => x.split(/\n/).map(y => y.split(" ").map(z => +z)))

    let finalNumbers: number[] = []

    seeds.forEach((seed) => {
        let currentNumber = seed
        maps.forEach((mapx) => {
            for (let set of mapx ) {
                if (currentNumber >= set[1] && currentNumber < set[1]+set[2]) {
                    currentNumber = set[0] + (currentNumber - set[1]);
                    console.log(`Seed ${seed} is now ${currentNumber}`)
                    break;
                }
            }
        })
        finalNumbers.push(currentNumber)
    })
    return Math.min(...finalNumbers)
}
export const part2 = (inputData: string) => {

    // @ts-ignore
    const seedsArray = inputData.replace(/\n/g, "").match(/seeds: ([\d\s]+)/)[1].split(" ").map(Number)

    const seedsObj = {}

    seedsArray.forEach((seed, index) => {
        if (index%2 === 0) {
            // @ts-ignore
            seedsObj[seed] = seedsArray[index+1]
        }
    })

    const maps = inputData.split(/\n+[a-z\-]+ map:\n/)
        .splice(1)
        .map(x => x.split(/\n/).map(y => y.split(" ").map(Number)))

    const newMaps = maps.reverse().map(x => x.sort((a,b) => a[0] - b[0]))

    const locations = newMaps[0]

    const otherMaps = newMaps.splice(1)


        let lowestStart;
        for (let locationSet of locations) {
            let currentNumber = locationSet[1]
            for (let i = locationSet[1]; i < locationSet[1] + locationSet[2]; i++) {
                currentNumber = i;
                otherMaps.forEach((otherMap) => {
                    for (let set of otherMap ) {
                        if (currentNumber >= set[0] && currentNumber < set[0]+set[2]) {
                            currentNumber = set[1] + (currentNumber - set[0]);
                            break;
                        }
                    }
                })
                for (let seed of Object.keys(seedsObj)) {
                    // @ts-ignore
                    if (currentNumber >= +seed && (currentNumber < (+seed + seedsObj[seed]))) {
                        lowestStart = i - locationSet[1]
                        break;
                    }
                }
                // @ts-ignore
                if (lowestStart >= 0) {
                    break;
                }
            }
            // @ts-ignore
            if (lowestStart >= 0) {
                break;
            }
        }
        return lowestStart

}
