import {readFileSync} from "fs";
import {part1, part2} from "../2023-12";
describe('advent of code 11', () => {
    describe('part 1', () => {

        it('sample one row', () => {
            const input = `???.### 1,1,3`
            expect(part1(input)).toBe(1);
        });

        it('sample', () => {
            const input = `???.### 1,1,3
.??..??...?##. 1,1,3
?#?#?#?#?#?#?#? 1,3,1,6
????.#...#... 4,1,1
????.######..#####. 1,6,5
?###???????? 3,2,1`
            expect(part1(input)).toBe(21);
        });

        it('real', () => {
            const input = readFileSync('2023/12/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part1(input)).toBe(7541);
        });
    });

    describe('part 2', () => {
        it('sample', () => {
            const input = `???.### 1,1,3
.??..??...?##. 1,1,3
?#?#?#?#?#?#?#? 1,3,1,6
????.#...#... 4,1,1
????.######..#####. 1,6,5
?###???????? 3,2,1`
            expect(part2(input)).toBe(525152);
        });

        it('real', () => {
            const input = readFileSync('2023/12/input.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(part2(input)).toBe(17485169859432);
        });
    });
});
