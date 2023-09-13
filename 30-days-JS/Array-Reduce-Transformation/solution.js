/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let ans = init;
    nums.forEach((element, idx, nums) => {
        val = fn(ans, element);
        ans = val;
    });
    return ans;
};
