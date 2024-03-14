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
    const values = input.split('\n').map(line =>  line.split(' '));
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        const  opponentTurn = values[i][0];
        const  myTurn =  values[i][1];
        if(myTurn === 'X'){ // lose
            switch (opponentTurn){
                case 'A': sum  += 3; break;
                case 'B': sum  += 1; break;
                case 'C': sum  += 2; break;
            }
        }
        if(myTurn === 'Y'){ // draw
            switch (opponentTurn){
                case 'A':  sum  += 3 + 1; break;
                case 'B':  sum  += 3 + 2; break;
                case 'C':  sum  += 3 + 3; break;
            }
        }
        if(myTurn === 'Z'){ // win
            switch (opponentTurn){
                case 'A': sum  += 6 + 2; break;
                case 'B':  sum  += 6 + 3;break;
                case 'C':  sum  += 6 + 1;break;
            }
        }
    }
    return sum;
};
