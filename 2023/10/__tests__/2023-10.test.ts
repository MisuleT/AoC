import {readFileSync} from "fs";
import {part1, part2} from "../2023-10";
describe('advent of code 9', () => {
    describe('part 1', () => {
        it('sample', () => {
            const input = `.....
.S-7.
.|.|.
.L-J.
.....`
            expect(part1(input)).toBe(4);
        });

        it('real', () => {
            const input = readFileSync('2023/10/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part1(input)).toBe(0);
        });
    });

    describe('part 2 mock', () => {
        it('sample', () => {
            const input = `...........
.S-------7.
.|F-----7|.
.||.....||.
.||.....||.
.|L-7.F-J|.
.|..|.|..|.
.L--J.L--J.
...........`
            expect(part2(input)).toBe(4);
        });

        it('real', () => {
            const input = readFileSync('2023/10/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part2(input)).toBe(0);
        });
    });
});
