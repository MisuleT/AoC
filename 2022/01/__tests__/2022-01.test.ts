import {readFileSync} from "fs";
import {part1, part2} from "../2022-01";

describe('advent of code 1', () => {
    const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`
    describe('part 1', () => {
        it('sample', () => {
            expect(part1(input)).toBe(24000);
        });

        it('real', () => {
            const input = readFileSync('2022/01/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part1(input)).toBe(71471);
        });
    });

    describe('part 2 mock', () => {
        it('sample', () => {
            expect(part2(input)).toBe(45000);
        });

        it('real', () => {
            const input = readFileSync('2022/01/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part2(input)).toBe(211189);
        });
    });
});
