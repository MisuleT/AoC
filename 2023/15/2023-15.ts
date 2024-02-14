
function getValue(value: string, part2 = false): number{
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
        if(part2 && (value[i] === '=' || value[i] === '-')) break;
        sum += value.charCodeAt(i);
        sum = (sum*17)%256;
    }
    return sum;
}
export const part1 = (input: string) => {
    const values = input.split(',');
    let sum = 0;
    values.forEach(value => {
        sum += getValue(value);
    })
    return sum;
}
export const part2 = (input: string) => {
    const values = input.split(',');
    let boxes: Record<string, number>[]  = [];
    values.forEach(value => {
        const boxNumber = getValue(value, true);
        const box = boxes[boxNumber] || {};
        if(value.includes('-')){
            const label = value.split('-')[0];
            delete box[label];
        }
        if(value.includes('=')){
            const [label, focal] = value.split('=');
            box[label] = Number(focal);
        }
        boxes[boxNumber] = box;
    })
    let sum = 0;
    for (let i = 0; i < boxes.length; i++) {
        if(!boxes[i]) continue;
        let index = 1;
        for (const label in boxes[i]) {
            const focal = boxes[i][label];
            sum = sum + (i+1) * index * focal;
            index++
        }
    }

    return sum;
}
