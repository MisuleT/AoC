
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

const cache = new Map(); // This will store our results
function getCombinationsCount(pattern: string, counts: number[]): number {
    const key = `${pattern}-${counts.join()}`;  // Create a unique key for this combination of pattern and counts
    if (cache.has(key)) return cache.get(key);   // If we've calculated this before, just return the cached result

    let result = 0;
    const firstChar = pattern[0];
    if(pattern.length === 0){
        result = counts.length === 0 ? 1 : 0;
    } else if (firstChar === '.'){
        result = getCombinationsCount(pattern.slice(1), counts);
    } else if(firstChar === '?'){
        result = getCombinationsCount(pattern.replace(pattern[0], '.'), counts) +
            getCombinationsCount(pattern.replace(pattern[0], '#'), counts);
    } else if(firstChar === '#'){
        if(counts.length === 0) result = 0;
        else if(pattern.slice(0, counts[0]).includes('.')) result = 0;
        else if(pattern.length < counts.reduce((a, b) => a + b, 0)) result = 0;
        else if(counts.length === 1){
            result = getCombinationsCount(pattern.slice(counts[0]), []);
        } else if(counts.length > 1){
            if(pattern[counts[0]] === '#') result = 0;
            else result = getCombinationsCount(pattern.slice(counts[0]+1), counts.slice(1));
        }
    }

    cache.set(key, result); // Store the result in our cache for future use
    return result;
}

function repeatArray(arr: number[]) {
    let repeatedArr = [];
    for (let i = 0; i < 5; i++) {
        repeatedArr.push(...arr);
    }
    return repeatedArr;
}
export const part2 = (input: string) => {
    const lines = input.split('\n');
    let result = 0
    for (const line of lines) {
        const extendedPattern = (line.split(" ")[0] + '?').repeat(5);
        const countsMatch = line.split(" ")[1].split(',').map(Number);
        const pattern = extendedPattern.slice(0, extendedPattern.length -1)
        const counts = repeatArray(countsMatch)
        result += getCombinationsCount(pattern, counts)
    }
    return result;

}
