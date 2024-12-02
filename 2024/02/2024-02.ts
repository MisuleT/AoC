export const part1 = (input: string): number => {
    const lines = input.split('\n');
    let safeCount = 0;

    for (const line of lines) {
        const levels = line.split(' ').map(Number);
        if (isSafe(levels)) {
            safeCount++;
        }
    }

    return safeCount;
};

const isSafe = (levels: number[]): boolean => {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < levels.length; i++) {
        const diff = levels[i] - levels[i - 1];
        if (diff < 0) increasing = false;
        if (diff > 0) decreasing = false;
        if (increasing && (diff < 1 || diff > 3 || diff === 0)) return false;
        if (decreasing && (diff < -3 || diff > -1 || diff === 0)) return false;
    }

    return increasing || decreasing;
};

const removeElementAtIndex = (levels: number[], index: number): number[] => {
    const newLevels = levels.slice(); // Create a copy of the array
    newLevels.splice(index, 1); // Remove the element at the specified index
    return newLevels;
};

const canBeMadeSafe = (levels: number[]): boolean => {
    for (let i = 0; i < levels.length; i++) {
        const newLevels = removeElementAtIndex(levels, i);
        if (isSafe(newLevels)) {
            return true;
        }
    }
    return false;
};
export const part2 = (input: string): number => {
    const lines = input.split('\n');
    let safeCount = 0;

    for (const line of lines) {
        const levels = line.split(' ').map(Number);
        if (isSafe(levels) || canBeMadeSafe(levels)) {
            safeCount++;
        }
    }

    return safeCount;
};

