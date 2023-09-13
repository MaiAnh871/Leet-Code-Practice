/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let filteredArr = [];
    arr.forEach((element, idx, arr) => {
        if (fn(element, idx)) {
            filteredArr.push(element);
        }
    });
    return filteredArr;
};
