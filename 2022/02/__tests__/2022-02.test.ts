import {readFileSync} from "fs";
import {part1, part2} from "../2022-02";

describe('advent of code 2', () => {
    const input = `A Y
B X
C Z`
    describe('part 1', () => {
        it('sample', () => {
            expect(part1(input)).toBe(15);
        });

        it('real', () => {
            const input = readFileSync('2022/02/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part1(input)).toBe(10595);
        });
    });

    describe('part 2 mock', () => {
        it('sample', () => {
            expect(part2(input)).toBe(12);
        });

        it('real', () => {
            const input = readFileSync('2022/02/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part2(input)).toBe(0);
        });
    });
});
