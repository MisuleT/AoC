import {readFileSync} from "fs";
import {part1, part2} from "../2023-16";
describe('advent of code 16', () => {
    const input = `.|...\\....
|.-.\\.....
.....|-...
........|.
..........
.........\\
..../.\\\\..
.-.-/..|..
.|....-|.\\
..//.|....`
    describe('part 1', () => {

        it('sample', () => {

            expect(part1(input)).toBe(46);
        });

        it('real', () => {
            const input = readFileSync('2023/16/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part1(input)).toBe(8249);
        });
    });

    describe('part 2', () => {
        it('sample', () => {
            expect(part2(input)).toBe(51);
        });

        it('real', () => {
            const input = readFileSync('2023/16/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part2(input)).toBe(8444);
        });
    });
});
