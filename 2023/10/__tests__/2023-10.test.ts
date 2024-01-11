import {readFileSync} from "fs";
import {part1, part2} from "../2023-10";
describe('advent of code 9', () => {
    describe('part 1', () => {
        it('sample', () => {
            const input = `.....
.S-7.
.|.|.
.L-J.
.....`
            expect(part1(input)).toBe(4);
        });

        it('real', () => {
            const input = readFileSync('2023/10/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part1(input)).toBe(0);
        });
    });

    describe('part 2 mock', () => {
        it('sample', () => {
            const input = `10 13 16 21 30 45`
            expect(part2(input)).toBe(5);
        });

        it('real', () => {
            const input = readFileSync('2023/09/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part2(input)).toBe(0);
        });
    });
});
