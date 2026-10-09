function groupByFirstChar(words) {
  const groups = new Map();

  for (const word of words) {
    const key = word[0].toLowerCase();
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(word);
  }
  return groups;
}

const words = ["apple", "avocado", "banana", "blueberry", "cherry", "cranberry"];
const result = groupByFirstChar(words);

for (const [letter, list] of result) {
  console.log(letter, "=>", list);
}