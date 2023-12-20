import {readFileSync} from "fs";
import {part1, part2, solveSolution} from "../2023-01";

describe('advent of code 1', () => {
    describe('part 1', () => {
        it('sample', () => {
            const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`
            expect(part1(input)).toBe(142);
        });

        it('real', () => {
            const input = readFileSync('2023/01/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part1(input)).toBe(55108);
        });
    });

    describe('part 2 mock', () => {
        it('sample', () => {
            const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`
            expect(solveSolution(input)).toBe(281);
        });

        it('real', () => {
            const input = readFileSync('2023/01/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(solveSolution(input)).toBe(55108);
        });
    });
});
