const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter words separated by spaces: ", (input) => {
    let words = input.split(" ");
    let grouped = new Map();
    for(let word of words){
    let firstChar = word[0].toLowerCase();
    if(!grouped.has(firstChar)){
        grouped.set(firstChar, []);
    }
    grouped.get(firstChar).push(word);
}
console.log(grouped);
rl.close();
});