export const part1 = (input: string) => {
    const numbers = input.split('\n')
        .map(line => line
            .replace('A', '1')
            .replace('B', '2')
            .replace('C', '3')
            .replace('X', '1')
            .replace('Y', '2')
            .replace('Z', '3')
            .split(' ').map(Number)
        );
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i][0] < numbers[i][1]){
            sum += numbers[i][1] + 6;
        }
        if(numbers[i][0] > numbers[i][1]){
            sum += numbers[i][1];
        }
        if(numbers[i][0] === numbers[i][1]){
            sum += numbers[i][1] + 3;

        }
        console.log(numbers[i], numbers[i][1], sum)
    }
    return sum;
};

export const part2 = (input: string) => {
   return 0;
};
