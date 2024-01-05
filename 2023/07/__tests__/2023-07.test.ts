import {readFileSync} from "fs";
import {part1, part2} from "../2023-07";

describe('advent of code 7', () => {
    describe('part 1', () => {
        it('sample', () => {
            const input = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`
            expect(part1(input)).toBe(6440);
        });

        it('real', () => {
            const input = readFileSync('2023/07/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part1(input)).toBe(0);
        });
    });

    describe('part 2 mock', () => {
        it('sample', () => {
            const input = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`
            expect(part2(input)).toBe(5905);
        });

        it('real', () => {
            const input = readFileSync('2023/07/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part2(input)).toBe(252137472);
        });
    });
});
