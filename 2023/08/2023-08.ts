export const part1 = (input: string) => {
    const lines = input.split('\n');
    const directions = lines[0].replaceAll('L', '1').replaceAll('R', '2').split("").map(Number);
    lines.shift();
    lines.shift();

    const entries: [string, string, string][] = lines.map(line => line.match(/[A-Z]+/g) as [string, string, string]);

    let count = 0;
    let node = 'AAA'
    let step = 0;

    while (node !=='ZZZ'){
        const line =  entries.find(entry => entry[0] === node);
        let direction = directions[count];
        node = line![direction];
        step++
        count++
        if(count === directions.length) {
            count = 0
        }
    }
    return step;
}
export const part2 = (input: string) => {
    const lines = input.split('\n');
    const directions = lines[0].replaceAll('L', '1').replaceAll('R', '2').split("").map(Number);
    lines.shift();
    lines.shift();
    let numbers: number[] = [];
    const pattern = /\b\w+\b/g;
    const entries: [string, string, string][] = lines.map(line => line.match(pattern) as [string, string, string]);
    entries.pop();

    for (let i = 0; i < entries.length; i++) {
        if(entries[i][0].endsWith('A')){
            let directionStep = 0
            let count = 0

            let node = (entries[i][0])
            while(true){
                 count++
                if(directionStep >= directions.length ) directionStep = 0;
                const myNode = entries.find(entry => entry[0] === node)
                node = myNode![directions[directionStep]]
                directionStep++
                if (node[2] == "Z") {
                    numbers.push(count)
                    break;
                }
            }
        }
    }
    return findLCM(numbers)
}

// Function to find the GCD (Greatest Common Divisor)
function gcd(a: number, b: number) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to find the LCM (Least Common Multiple) for an array of numbers
function findLCM(numbers: number[]) {
    if (numbers.length === 0) {
        throw new Error("Array must not be empty");
    }

    let lcm = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        lcm = (lcm * currentNumber) / gcd(lcm, currentNumber);
    }

    return lcm;
}
