import {readFileSync} from "fs";
import {part1, part2} from "../2024-01";

describe('advent of code 1', () => {
    describe('part 1', () => {
        it('sample', () => {
            const input = `3   4
4   3
2   5
1   3
3   9
3   3`
            expect(part1(input)).toBe(11);
        });

        it('real', () => {
            const input = readFileSync('2024/01/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part1(input)).toBe(2430334);
        });
    });

    describe('part 2 mock', () => {
        it('sample', () => {
            const input = `3   4
4   3
2   5
1   3
3   9
3   3`
            expect(part2(input)).toBe(31);
        });

        it('real', () => {
            const input = readFileSync('2024/01/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part2(input)).toBe(28786472);
        });
    });
});
