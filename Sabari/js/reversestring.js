function reverseString(str) {
  return str.split("").reverse().join("");
}

const text = "Hello World"; 
console.log("Original:", text);
console.log("Reversed:", reverseString(text));