import * as readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findShortestWord(sentence: string): string {
    const words = sentence.trim().split(/\s+/);
    let shortestWord = words[0];

    for (const word of words) {
        if (word.length < shortestWord.length) {
            shortestWord = word;
        }
    }

    return shortestWord;
}

input.question("Enter a sentence: ", (sentence) => {
    const shortestWord = findShortestWord(sentence);
    console.log("Shortest word: " + shortestWord);
    input.close();
});