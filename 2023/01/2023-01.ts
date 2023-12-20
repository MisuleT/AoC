export const part1 = (input: string) => {
    const numbers = input.split('\n').map(line => line.replace(/\D/g, ''));
    // console.log(numbers);
    let firstAndLastCharacters: [string, string][] = [];
    if (numbers && numbers.length > 0) {
        firstAndLastCharacters = numbers.map(number =>{
            const firstDigit = number[0];
            const lastDigit = number[number.length - 1];
            return [firstDigit, lastDigit ? lastDigit  : firstDigit]
        })
    }
    const combinedFirstAndLast = firstAndLastCharacters.map(both => {
        let combined;
        if (both) {
            combined = both[0] + both[both.length - 1];
            combined = parseInt(combined);
        }
        return combined;
    });

    console.log(combinedFirstAndLast)
    let sum = 0;
    combinedFirstAndLast.forEach(num =>{
        if(num){
            sum += num;
        }
    })
    return sum;
};

const NUMBER_MAP = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
};

export const part2 = (input: string) => {
    const lines = input.split('\n');

    let numbers: string[][] = []

    lines.forEach(line => {
        console.log(line)
        const lineNumbers: string[] = []
        const regexPattern = /(one|two|three|four|five|six|seven|eight|nine|\d(?=[^\w\d]*))/gi;


        let matches;
        const foundMatches = [];
        //const regexPattern = /(one|two|three|four|five|six|seven|eight|nine|\d+)/g;
        // const match = line.match(regexPattern);
        while ((matches = regexPattern.exec(line)) !== null) {
            foundMatches.push(matches[0]);
        }
        console.log(foundMatches)
        if(foundMatches){
            foundMatches.forEach(m => {
                // @ts-ignore
                NUMBER_MAP[m.toLowerCase()] ? lineNumbers.push(NUMBER_MAP[m.toLowerCase()]) : lineNumbers.push(m)
            })
            numbers.push(lineNumbers)
        }

    })

    console.log(numbers);
    let firstAndLastCharacters: [string, string][] = [];
    if (numbers && numbers.length > 0) {
        firstAndLastCharacters = numbers.map(number =>{
            const firstDigit = number[0];
            const lastDigit = number[number.length - 1];
            return [firstDigit, lastDigit ? lastDigit  : firstDigit]
        })
    }
    const combinedFirstAndLast = firstAndLastCharacters.map(both => {
        let combined;
        if (both) {
            combined = both[0] + both[both.length - 1];
            combined = parseInt(combined);
        }
        return combined;
    });

    console.log(combinedFirstAndLast)
    let sum = 0;
    combinedFirstAndLast.forEach(num =>{
        if(num){
            sum += num;
        }
    })
    return sum;
};

export const solveSolution = (input: string) =>{
    const lines = input.split(/\r?\n/);
    let sum = 0;

    for (let i = 0; i < lines.length; i++) {
        // Set replacedText with lines[i] to solve for part 1
        const replacedText = expandText(lines[i]);
        if(replacedText){
            const firstDigit = replacedText.match(/(\d{1}?)/)[1];
            const lastDigit = replacedText.match(/(\d{1}?)(?:\D*)$/)[1];
            const number = Number(`${firstDigit}${lastDigit}`);
            sum += number;
        }
    }
    return sum;
}

function expandText (text: any) {
    let expandedText = text;
    expandedText = expandedText.replaceAll("one", "o1ne");
    expandedText = expandedText.replaceAll("two", "t2wo");
    expandedText = expandedText.replaceAll("three", "t3hree");
    expandedText = expandedText.replaceAll("four", "f4our");
    expandedText = expandedText.replaceAll("five", "f5ive");
    expandedText = expandedText.replaceAll("six", "s6ix");
    expandedText = expandedText.replaceAll("seven", "s7even");
    expandedText = expandedText.replaceAll("eight", "e8ight");
    expandedText = expandedText.replaceAll("nine", "n9ine");

    return expandedText;
}
