import {readFileSync} from "fs";
import {part1, part2} from "../2023-06";

describe('advent of code 6', () => {
    describe('part 1', () => {
        it('sample', () => {
            const input = `Time:      7  15   30
Distance:  9  40  200`
            expect(part1(input)).toBe(288);
        });

        it('real', () => {
            const input = readFileSync('2023/06/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part1(input)).toBe(0);
        });
    });

    describe('part 2 mock', () => {
        it('sample', () => {
            const input = `Time:      7  15   30
Distance:  9  40  200`
            expect(part2(input)).toBe(288);
        });

        it('real', () => {
            const input = readFileSync('2023/06/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part2(input)).toBe(0);
        });
    });
});
