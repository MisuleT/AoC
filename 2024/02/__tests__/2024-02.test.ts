import {readFileSync} from "fs";
import {part1, part2} from "../2024-02";

describe('advent of code 2', () => {
    describe('part 1', () => {
        it('sample', () => {
            const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`
            expect(part1(input)).toBe(2);
        });

        it('real', () => {
            const input = readFileSync('2024/02/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part1(input)).toBe(591);
        });
    });

    describe('part 2 mock', () => {
        it('sample', () => {
            const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`
            expect(part2(input)).toBe(4);
        });

        it('real', () => {
            const input = readFileSync('2024/02/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part2(input)).toBe(621);
        });
    });
});
