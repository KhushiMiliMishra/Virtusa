"use strict";
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const frequency = new Map();
    for (const char of str1) {
        frequency.set(char, (frequency.get(char) || 0) + 1);
    }
    for (const char of str2) {
        if (!frequency.has(char)) {
            return false;
        }
        frequency.set(char, frequency.get(char) - 1);
        if (frequency.get(char) === 0) {
            frequency.delete(char);
        }
    }
    return frequency.size === 0;
}
console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));
console.log(areAnagrams("triangle", "integral"));
