export const part1 = (input: string) => {
    const numbers = input.split('\n')
        .map(line => line.replace(/\D/g, ''))
        .map(num => Number(num[0] + num[num.length-1]))
    return numbers.reduce((a,b) => a+b);
};

export const part2 = (input: string) => {
    const numbers = input
        .split('\n')
        .map((line) => {
            const digits = line
                .replace(/one/g, 'o1e')
                .replace(/two/g, 't2o')
                .replace(/three/g, 't3e')
                .replace(/four/g, 'f4r')
                .replace(/five/g, 'f5e')
                .replace(/six/g, 's6x')
                .replace(/seven/g, 's7n')
                .replace(/eight/g, 'e8t')
                .replace(/nine/g, 'n9e')
                .split('')
                .filter((char) => char.match(/\d/))

            return Number(digits[0] + digits[digits.length - 1]);
        })
    return numbers.reduce((a,b) => a+b);
};
