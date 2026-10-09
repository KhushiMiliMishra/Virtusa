import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter no. of elements: ", (input) => {
    let n: number = Number(input);
    let arr: number[] = [];
    let sum: number = 0;
    rl.question("Enter elements separated by space: ", (input) => {
        arr = input.split(" ").map(Number);
        for(let i=0; i<n; i++){
            sum += arr[i];
        }
        let avg: number = sum/n;
        console.log("Average of array is ", avg);
        rl.close();
    });
});