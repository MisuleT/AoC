export const part1 = (input: string) => {
    const lines = input.split('\n');
    const directions = lines[0].replaceAll('L', '1').replaceAll('R', '2').split("");
    lines.shift();
    lines.shift();

    const entries = lines.map(line => line.match(/[A-Z]+/g));

    let count = 0;
    let node = 'AAA'
    let step = 0;

    while (node !=='ZZZ'){
        // @ts-ignore
        const line =  entries.find(entry => entry[0] === node);
        // @ts-ignore
        node = line[directions[count]];

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
    const directions = lines[0].replaceAll('L', '1').replaceAll('R', '2').split("");
    lines.shift();
    lines.shift();
    let numbers: number[] = [];
    const pattern = /\b\w+\b/g;
    const entries = lines.map(line => line.match(pattern));
    // entries.pop();

    for (let i = 0; i < entries.length; i++) {
        // @ts-ignore
        if(entries[i][0].endsWith('A')){
            let directionStep = 0
            let count = 0
            // @ts-ignore
            let node = (entries[i][0])
            while(true){
                 count++

                if(directionStep >= directions.length ) directionStep = 0;
                // @ts-ignore
                const myNode = entries.find(entry => entry[0] === node)
                // @ts-ignore
                node = myNode[directions[directionStep]]
                console.log(directionStep, directions[directionStep], node);
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
