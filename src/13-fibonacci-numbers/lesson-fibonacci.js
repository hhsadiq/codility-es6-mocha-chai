/**
 *
 * @param N
 * @returns {*}
 */

export function solution(N) {
  const nums = new Array(N + 1).fill(0);
  nums[1] = 1;
  for (let i = 2; i < nums.length; i++){
    nums[i] = nums[i - 1] + nums[i - 2];
  }
  return nums;
}
