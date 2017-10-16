/**
 * Merge sort algorithm
 * @param arr
 * @param order ASC | DESC
 * @returns {*}
 */
export function mergeSort(arr, order = 'ASC') {
  if (arr.length < 1) {
    return [];
  }
  if (arr.length === 1) {
    return arr;
  }
  const leftArray = arr.slice(0, Math.floor((arr.length) / 2));
  const rightArray = arr.slice(Math.floor((arr.length) / 2), arr.length);
  return mergeSortedArrays(
    mergeSort(leftArray, order),
    mergeSort(rightArray, order),
    order);
}

/**
 * Merge two sorted arrays so that resulted array is also sorted,
 * @param arr1
 * @param arr2
 * @param order ASC | DESC (To sort in ASC order, it assumes that given
 * arrays are in ASC order, same for DESC order)
 * @returns {*}
 */
export function mergeSortedArrays(arr1, arr2, order = 'ASC') {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return 'invalid input';
  }
  let i = 0, j = 0, k = 0, arr3 = [];
  while (i < arr1.length && j < arr2.length) {
    const condition = {
      'ASC': arr1[i] <= arr2[j],
      'DESC': arr1[i] > arr2[j]
    };
    if (condition[order.toUpperCase()]) {
      arr3[k++] = arr1[i++];
    } else {
      arr3[k++] = arr2[j++];
    }
  }
  if (i >= arr1.length) {
    for (j; j < arr2.length; j++) {
      arr3[k++] = arr2[j];
    }
  } else {
    for (i; i < arr1.length; i++) {
      arr3[k++] = arr1[i];
    }
  }
  return arr3;
}
