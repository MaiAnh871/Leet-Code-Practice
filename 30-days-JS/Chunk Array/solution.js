/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
    let chunkedArr = [];
    for (let i = 0; i < arr.length; i = i + size) {
        let tempArr = [];
        for (let j = 0; j < size; j++) {
            if (arr[i + j] != null) {
                tempArr.push(arr[i + j]);
            }
        }
        chunkedArr.push(tempArr);
    }
    return chunkedArr;
};
