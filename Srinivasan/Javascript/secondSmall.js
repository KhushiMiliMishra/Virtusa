const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter elements separated by spaces: ", (input) => {
    let arr = input.split(" ").map(Number);
    let small = Infinity;
    let secondsmall = Infinity;
    for(let num of arr){
        if(num < small){
            secondsmall = small;
            small = num;
        } else if(num > small && num < secondsmall){
            secondsmall = num;
        }
    }
    if(secondsmall === Infinity){
        console.log("There is no second smallest element");
    } else {
        console.log("Second smallest element is " + secondsmall);
    }
    rl.close();
});