export function part1(input: string): number {
    let totalPoints = 0;
    const lines = input.split('\n').map(line => line.replace(/Card\s+\d+: /, ''));
    lines.pop();

    lines.forEach((card, index) => {
       const [winningNumbers, numbers] = card.split(' | ').map(part => part.split(/ +/).map(Number));
        console.log(winningNumbers);
        console.log(numbers);

        const matchingNumbers = numbers.filter(num => winningNumbers.includes(num));

        if(matchingNumbers.length > 0){
            totalPoints += Math.pow(2, matchingNumbers.length - 1);
        }
    });
    return totalPoints;
}

export function part2(input: string): number {
    let sum = 0;
    const lines = input.split('\n');
    lines.pop();

    let cardCount = Array(lines.length + 1).fill(1);
    cardCount[0] = 0;
    for(let row = 0; row<lines.length; row++) {
        const line = lines[row];
        console.log(line);

        // @ts-ignore
        const cardId = Number(line.match(/\d+/)[0] * 1);
        const [winningNumbers, myNumbers] = line.split(' | ').map(part => part.split(/ +/).map(Number));
        const matchingNumbers = myNumbers.filter(num => winningNumbers.includes(num));
        const  matches = matchingNumbers.length;

        for(let i = 1; i <= matches; i++) {
            cardCount[cardId + i] += cardCount[cardId];
        }
    }
    console.log(cardCount);
    cardCount.forEach((val) => {
        sum += val;
    });

    return sum;

}

