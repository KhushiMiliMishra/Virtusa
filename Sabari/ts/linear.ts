function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // found: return index
    }
  }
  return -1; // not found
}

const numbers: number[] = [10, 25, 30, 45, 50];
const target: number = 45;

const index = linearSearch(numbers, target);
if (index !== -1) {
  console.log(`${target} found at index ${index}`);
} else {
  console.log(`${target} not found`);
}