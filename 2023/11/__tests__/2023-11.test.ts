import {readFileSync} from "fs";
import {part1, part2} from "../2023-11";
describe('advent of code 11', () => {
    describe('part 1', () => {
        it('sample', () => {
            const input = `...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`
            expect(part1(input)).toBe(374);
        });

        it('real', () => {
            const input = readFileSync('2023/11/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part1(input)).toBe(0);
        });
    });

    describe('part 2', () => {
        it('sample', () => {
            const input = ``
            expect(part2(input)).toBe(0);
        });

        it('real', () => {
            const input = readFileSync('2023/11/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part2(input)).toBe(0);
        });
    });
});
