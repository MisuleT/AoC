import {readFileSync} from "fs";
import {part1, part2} from "../2023-18";
describe('advent of code 18', () => {
    const input = `R 6 (#70c710)
D 5 (#0dc571)
L 2 (#5713f0)
D 2 (#d2c081)
R 2 (#59c680)
D 2 (#411b91)
L 5 (#8ceee2)
U 2 (#caa173)
L 1 (#1b58a2)
U 2 (#caa171)
R 2 (#7807d2)
U 3 (#a77fa3)
L 2 (#015232)
U 2 (#7a21e3)`
    describe('part 1', () => {

        it('sample', () => {

            expect(part1(input)).toBe(62);
        });

        it('real', () => {
            const input = readFileSync('2023/18/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part1(input)).toBe(33491);
        });
    });

    describe('part 2', () => {
        it('sample', () => {
            expect(part2(input)).toBe(952408144115);
        });

        it('real', () => {
            const input = readFileSync('2023/18/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part2(input)).toBe(87716969654406);
        });
    });
});
