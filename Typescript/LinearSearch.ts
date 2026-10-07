// @ts-expect-error
import * as readlineSync from "readline-sync";

let n: number = Number(readlineSync.question("Enter n: "));

let arr: number[] = [];

for (let i = 0; i < n; i++) {
    arr[i] = Number(readlineSync.question("Enter element: "));
}

let target: number = Number(readlineSync.question("Enter target: "));

let found: boolean = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        console.log("Element found at index " + i);
        found = true;
        break;
    }
}

if (!found) {
    console.log("Element not found");
}