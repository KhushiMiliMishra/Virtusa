function removeSpaces(str: string): string {
  return str.replace(/\s/g, "");
}
 
const input: string = "Hello  World  from TypeScript";
console.log("Original :", input);
console.log("No spaces:", removeSpaces(input));