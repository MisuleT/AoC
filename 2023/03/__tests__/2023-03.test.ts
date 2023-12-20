import {readFileSync} from "fs";
import {part1, part2} from "../2023-03";

describe('advent of code 3', () => {
    describe('part 1', () => {
        it('sample', () => {
            const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`
            expect(part1(input)).toBe(4361);
        });

        it('real', () => {
            const input = readFileSync('2023/03/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part1(input)).toBe(0);
        });
    });

    describe('part 2 mock', () => {
        it('sample', () => {
            const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`
            expect(part2(input)).toBe(467835);
        });

        it('real', () => {
            const input = readFileSync('2023/03/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part2(input)).toBe(72514855);
        });
    });
});
