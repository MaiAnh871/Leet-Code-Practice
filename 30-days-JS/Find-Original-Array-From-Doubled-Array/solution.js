var findOriginalArray = function (changed) {
    if (changed.length % 2 !== 0) {
        return [];
    }
    let originalArr = [];
    let i = 0;
    let sortedArr = changed.sort((a, b) => a - b);
    // console.log("Sorted Array: " + sortedArr);

    // console.log(sortedArr[i]);
    while (i < sortedArr.length) {
        // console.log("Element: " + sortedArr[i]);
        let valToFind = sortedArr[i] * 2;
        // console.log("Double element: " + valToFind);
        if (sortedArr[i] == 0) {
            let count = sortedArr.filter((x) => x == 0).length;
            if (count % 2 == 0) {
                for (let j = 0; j < count / 2; j++) {
                    originalArr.push(0);
                }
                sortedArr = sortedArr.filter((x) => x != 0);
            } else {
                return [];
            }
        } else if (sortedArr.includes(valToFind)) {
            originalArr.push(sortedArr[i]);
            // console.log("Original Array: " + originalArr);
            sortedArr.splice(i, 1);
            sortedArr.splice(sortedArr.indexOf(valToFind), 1);
            // console.log("Poped array: " + sortedArr);
        } else {
            return [];
        }
    }
    return originalArr;
};

fn = findOriginalArray([0, 0]);
console.log(fn);
