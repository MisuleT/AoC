export const part1 = (input: string) => {
    const numbers = input.split('\n\n')
        .map(line => line.split('\n'))
        .map(line => line.map(Number).reduce((a, b) => a + b, 0));
    return Math.max(...numbers);
};

export const part2 = (input: string) => {
    return input.split('\n\n')
        .map(line => line.split('\n'))
        .map(line => line.map(Number).reduce((a, b) => a + b, 0))
        .sort((a,b) => b - a)
        .slice(0, 3)
        .reduce((a, b) => a + b, 0);
};
