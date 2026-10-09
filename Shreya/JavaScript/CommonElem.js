function findCommonElements(arr1, arr2) {
    const set = new Set(arr1);
    const common = [];

    for (const num of arr2) {
        if (set.has(num)) {
            common.push(num);
        }
    }

    return common;
}

console.log(findCommonElements(
    [1, 2, 3, 4, 5],
    [3, 4, 5, 6, 7]
));