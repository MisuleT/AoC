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
    console.log(numbers)
    for (let i = 0; i < numbers.length; i++) {
       const  opponentTurn = numbers[i][0];
       const  myTurn =  numbers[i][1];
        if(opponentTurn === myTurn){
            sum += myTurn + 3;
        }
        // stone
        if(myTurn === 1){
            // scissors
            if(opponentTurn === 3) sum +=myTurn + 6;
            // paper
            if(opponentTurn === 2) sum +=myTurn;
        }
        // paper
        if(myTurn === 2){
            // scissors
            if(opponentTurn === 3) sum +=myTurn;
            // stone
            if(opponentTurn === 1) sum +=myTurn + 6;
        }
        // scissors
        if(myTurn === 3){
            // stone
            if(opponentTurn === 1) sum +=myTurn;
            // paper
            if(opponentTurn === 2) sum +=myTurn + 6;
        }
    }
    return sum;
};

export const part2 = (input: string) => {
   return 0;
};
