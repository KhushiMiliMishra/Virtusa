// @ts-expect-error 
import * as readlineSync from "readline-sync";

let sentence: string = readlineSync.question("Enter a sentence: ");

let words: string[] = sentence.split(" ");

let shortest: string = words[0]!;

for (let word of words) {
    if (word.length < shortest.length) {
        shortest = word;
    }
}

console.log(shortest);