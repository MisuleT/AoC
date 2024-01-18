import {readFileSync} from "fs";
import {part1, part2} from "../2023-10";
describe('advent of code 10', () => {
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
            expect(part1(input)).toBe(6931);
        });
    });

    describe('part 2', () => {
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

        it('sample 2 ',  () => {
            const input = `.F----7F7F7F7F-7....
.|F--7||||||||FJ....
.||.FJ||||||||L7....
FJL7L7LJLJ||LJ.L-7..
L--J.L7...LJS7F-7L7.
....F-J..F7FJ|L7L7L7
....L7.F7||L7|.L7L7|
.....|FJLJ|FJ|F7|.LJ
....FJL-7.||.||||...
....L---J.LJ.LJLJ...`
            expect(part2(input)).toBe(8);
        });

        it('real', () => {
            const input = readFileSync('2023/10/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part2(input)).toBe(357);
        });
    });
});
