// @ts-expect-error 
import * as readlineSync from "readline-sync";

let input: string = readlineSync.question("Enter a number: ");

let num: number = Number(input);
let sum: number = 0;

while (num > 0) {
    let digit: number = num % 10;
    sum = sum + digit;
    num = Math.floor(num / 10);
}

console.log("Sum = " + sum);