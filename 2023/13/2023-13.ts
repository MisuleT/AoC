function findMirror(pattern: string[][], useSmudge = false): number {
    let result = 0

    const columnCount = pattern[0].length;

    for (let mirrorPos = 1; mirrorPos < columnCount; mirrorPos++) {

        const start = mirrorPos < columnCount / 2 ? 0 : mirrorPos - (columnCount - mirrorPos);
        const end = mirrorPos > columnCount / 2 ? columnCount : 2 * mirrorPos;
        let isMirror = true;
        let hasSmudge = !useSmudge;

        for (const row of pattern) {
            const left = row.slice(start, mirrorPos);
            const right = row.slice(mirrorPos, end);
            right.reverse();
            if (left.join() !== right.join()) {
               if(hasSmudge){
                   isMirror = false;
                   break;
               }
                hasSmudge = true;
            }
        }
        if (isMirror && hasSmudge) {
            result += mirrorPos;
            break;
        }
    }
    return result;
}

export const solve = (input: string, useSmudge?: boolean) => {
    const patters = input.split('\n\n');
    let result = 0
    for (let pattern of patters) {
        const patternSplit = pattern.split('\n').map(line => line.split(''));

        result += findMirror(patternSplit, useSmudge);

        const newPattern = patternSplit[0].map((col, i) => patternSplit.map(row => row[i]));
        result += 100 * findMirror(newPattern, useSmudge);
    }
    return result;
}
