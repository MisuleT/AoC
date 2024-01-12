import {readFileSync} from "fs";
import { part1 } from "./2023-10";

const input = readFileSync('input.txt', {
    encoding: 'utf8',
    flag: 'r'
});
part1(input);