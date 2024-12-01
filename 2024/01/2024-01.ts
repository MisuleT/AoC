export const part1 = (input: string) => {
    const lines = input.split('\n')
    const firstColumn: number[] = [];
    const secondColumn: number[] = [];

    lines.forEach(line => {
        const [first, second] = line.trim().split(/\s+/).map(Number);
        firstColumn.push(first);
        secondColumn.push(second);
    });


    firstColumn.sort((a, b) => a - b);
    secondColumn.sort((a, b) => a - b);

    const distances = firstColumn.map((num, index) => Math.abs(num - secondColumn[index]));
    return distances.reduce((a, b) => a + b, 0);
};

export const part2 = (input: string) => {
    const lines = input.split('\n')
    const firstColumn: number[] = [];
    const secondColumn: number[] = [];
    const secondColumnCount: { [key: number]: number } = {};

    lines.forEach(line => {
        const [first, second] = line.trim().split(/\s+/).map(Number);
        firstColumn.push(first);
        secondColumn.push(second);
        secondColumnCount[second] = (secondColumnCount[second] || 0) + 1;
    });

    return   firstColumn.reduce((sum, num) => {
        return sum + (num * (secondColumnCount[num] || 0));
    }, 0);
};
