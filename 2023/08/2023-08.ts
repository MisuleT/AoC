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
    const pattern = /\b\w+\b/g;
    const entries = lines.map(line => line.match(pattern));
    entries.pop();

    let step = 1;

    // @ts-ignore
    let linesWithNode =  entries.filter(entry => entry[0].endsWith('A'));
    // @ts-ignore
    let nodes = linesWithNode.map(line => line[0]);
    //console.log(nodes)
    let count = 0;
    while (!nodes.every(node => node.endsWith('Z'))) {
        // @ts-ignore
        let newNodes: string[] = [];
        console.log('nodes', nodes)
        nodes.forEach(node => {
            // @ts-ignore
            let final = (entries.find(d => d[0] === node))
            console.log('final', final)
            // @ts-ignore
            newNodes.push(final[directions[count]])
            // @ts-ignore
            if(final[directions[count]].endsWith('Z')){
                step++
                // console.log(step)
            }
        })
        count++
        if(count === directions.length) {
            count = 0
        }
        nodes = [];
        // @ts-ignore
        nodes = newNodes;
    }
    return step;
}
