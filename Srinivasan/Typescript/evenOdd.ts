import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    let num: number = Number(input);
    if(num % 2 == 0){
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
    rl.close();
});