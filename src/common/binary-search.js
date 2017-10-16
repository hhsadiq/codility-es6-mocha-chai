/**
 * Find key in sorted array and return its index
 * @param arr
 * @param key
 * @param start
 * @param end
 */
export function binarySearchRecursive(arr, key, start = 0, end = arr.length) {
  const guess = Math.floor( (start + end) / 2);
  if (arr[guess] === key) {
    return guess;
  }
  if (start > end) {
    return -1;
  }
  if (arr[guess] < key) {
    return binarySearchRecursive(arr, key, guess + 1, end);
  } else {
    return binarySearchRecursive(arr, key, start, guess - 1);
  }
}


/**
 * Find key in sorted array and return its index
 * @param arr
 * @param key
 */
export function binarySearchIterative(arr, key) {
  let min = 0;
  let max = arr.length  - 1;
  while (min <= max) {
    let guess = Math.floor((min + max) / 2);
    if (arr[guess] === key) {
      return guess;
    }
    if (arr[guess] < key) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return -1;
}

