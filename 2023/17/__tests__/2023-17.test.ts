import {readFileSync} from "fs";
import {part1, part2} from "../2023-17";
describe('advent of code 16', () => {
    const input = `2413432311323
3215453535623
3255245654254
3446585845452
4546657867536
1438598798454
4457876987766
3637877979653
4654967986887
4564679986453
1224686865563
2546548887735
4322674655533`
    describe('part 1', () => {

        it('sample', () => {

            expect(part1(input)).toBe(102);
        });

        it('real', () => {
            const input = readFileSync('2023/17/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part1(input)).toBe(686);
        });
    });

    describe('part 2', () => {
        it('sample', () => {
            expect(part2(input)).toBe(94);
        });

        it('real', () => {
            const input = readFileSync('2023/17/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part2(input)).toBe(801);
        });
    });
});
