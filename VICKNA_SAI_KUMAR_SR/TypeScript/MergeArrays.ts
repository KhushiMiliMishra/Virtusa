
import * as readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter the first array elements separated by spaces: ", (firstInput: string) => {
    input.question("Enter the second array elements separated by spaces: ", (secondInput: string) => {
        const firstArray = firstInput.trim().split(/\s+/);
        const secondArray = secondInput.trim().split(/\s+/);

        const mergedArray = [...firstArray, ...secondArray];

        console.log("Merged array: " + mergedArray.join(" "));

        input.close();
    });
});
