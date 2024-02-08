import {readFileSync} from "fs";
import { solve} from "../2023-13";
describe('advent of code 13', () => {
    const input = `#.##..##.
..#.##.#.
##......#
##......#
..#.##.#.
..##..##.
#.#.##.#.

#...##..#
#....#..#
..##..###
#####.##.
#####.##.
..##..###
#....#..#`
    describe('part 1', () => {

        it('sample', () => {

            expect(solve(input)).toBe(405);
        });

        it('real', () => {
            const input = readFileSync('2023/13/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(solve(input)).toBe(27300);
        });
    });

    describe('part 2', () => {
        it('sample', () => {
            expect(solve(input, true)).toBe(400);
        });

        it('real', () => {
            const input = readFileSync('2023/13/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(solve(input, true)).toBe(29276);
        });
    });
});
