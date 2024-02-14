import {readFileSync} from "fs";
import {part1, part2} from "../2023-15";
describe('advent of code 15', () => {
    const input = `rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7`
    describe('part 1', () => {

        it('sample', () => {

            expect(part1(input)).toBe(1320);
        });

        it('real', () => {
            const input = readFileSync('2023/15/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part1(input)).toBe(517015);
        });
    });

    describe('part 2', () => {
        it('sample', () => {
            expect(part2(input)).toBe(145);
        });

        it('real', () => {
            const input = readFileSync('2023/15/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part2(input)).toBe(286104);
        });
    });
});
