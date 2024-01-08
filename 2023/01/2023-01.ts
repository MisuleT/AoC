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
                .replace(/one/g, 'one1one')
                .replace(/two/g, 'two2two')
                .replace(/three/g, 'three3three')
                .replace(/four/g, 'four4four')
                .replace(/five/g, 'five5five')
                .replace(/six/g, 'six6six')
                .replace(/seven/g, 'seven7seven')
                .replace(/eight/g, 'eight8eight')
                .replace(/nine/g, 'nine9nine')
                .split('')
                .filter((char) => char.match(/\d/))

            return Number(digits[0] + digits[digits.length - 1]);
        })
    return numbers.reduce((a,b) => a+b);
};
