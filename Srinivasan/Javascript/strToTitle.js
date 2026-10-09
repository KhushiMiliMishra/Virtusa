const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a string: ", (input) => {
    let words = input.split(" ");
    let result ="";
    for(let word of words){
        result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
    }
    console.log("Title Case: " + result.trim());
    rl.close();
});