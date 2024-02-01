
export const part1 = (input: string) => {
    const lines = input.split('\n');
    let result = 0
    for (const line of lines) {
        const pattern = line.split(" ")[0];
        const  counts = line.split(" ")[1].split(',').map(Number);
        result += getCombinationsCount(pattern, counts)
    }
    return result;
}

function getCombinationsCount(pattern: string, counts: number[]): number {
    let result = 0;
    const firstChar = pattern[0];
    if(pattern.length === 0){
        if(counts.length === 0) {
            return 1;
        }
        return 0;
    }
    if (firstChar === '.'){
        return getCombinationsCount(pattern.slice(1), counts);
    }
    if(firstChar === '?'){
        result = getCombinationsCount(pattern.replace(pattern[0], '.'), counts) +
            getCombinationsCount(pattern.replace(pattern[0], '#'), counts);
    }
    if(firstChar === '#'){
        if(counts.length === 0) return 0;

        if(pattern.slice(0, counts[0]).includes('.')) return 0;

        if(pattern.length < counts.reduce((a, b) => a + b, 0)) return 0;

        if(counts.length === 1){
            return getCombinationsCount(pattern.slice(counts[0]), []);
        }
        if(counts.length > 1){
            if(pattern[counts[0]] === '#') return 0; // ####.. 3 -> too long
            return getCombinationsCount(pattern.slice(counts[0]+1), counts.slice(1));
        }
    }
    return result;
}

export const part2 = (input: string) => {
    const lines = input.split('\n');



    let result = 0

    return result;
}
