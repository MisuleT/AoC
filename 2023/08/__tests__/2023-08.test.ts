import {readFileSync} from "fs";
import {part1, part2} from "../2023-08";

describe('advent of code 8', () => {
    describe('part 1', () => {
        it('sample', () => {
            const input = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`
            expect(part1(input)).toBe(6);
        });

        it('real', () => {
            const input = readFileSync('2023/08/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part1(input)).toBe(19667);
        });
    });

    describe('part 2 mock', () => {
        it('sample', () => {
            const input = `LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)`
            expect(part2(input)).toBe(6);
        });

        it('real', () => {
            const input = readFileSync('2023/08/input2.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part2(input)).toBe(19185263738117);
        });
    });
});
