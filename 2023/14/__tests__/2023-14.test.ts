import {readFileSync} from "fs";
import {part1, part2} from "../2023-14";
describe('advent of code 14', () => {
    const input = `O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....`
    describe('part 1', () => {

        it('sample', () => {

            expect(part1(input)).toBe(136);
        });

        it('real', () => {
            const input = readFileSync('2023/14/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part1(input)).toBe(108759);
        });
    });

    describe('part 2', () => {
        it('sample', () => {
            expect(part2(input)).toBe(64);
        });

        it('real', () => {
            const input = readFileSync('2023/14/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part2(input)).toBe(89089);
        });
    });
});
