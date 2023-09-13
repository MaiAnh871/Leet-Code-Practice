/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let returnedArray = [];
    arr.forEach((element, idx, arr) => {
        returnedArray.push(fn(element, idx));
    });
    return returnedArray;
};
