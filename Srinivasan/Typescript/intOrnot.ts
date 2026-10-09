import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    let num: number = Number(input);

    if (Number.isInteger(num)) {
        console.log("Number is an Integer");
    } else {
        console.log("Number is a Floating-point");
    }

    rl.close();
});