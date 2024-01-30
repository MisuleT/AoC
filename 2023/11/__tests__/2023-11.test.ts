import {readFileSync} from "fs";
import {solve} from "../2023-11";
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
            expect(solve(input, 2)).toBe(374);
        });

        it('real', () => {
            const input = readFileSync('2023/11/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(solve(input, 2)).toBe(9445168);
        });
    });

    describe('part 2', () => {
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
            expect(solve(input, 10)).toBe(1030);
        });

        it('real', () => {
            const input = readFileSync('2023/11/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(solve(input, 1000000)).toBe(742305960572);
        });
    });
});
