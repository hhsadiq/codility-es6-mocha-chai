/**
 * Merge sort algorithm
 * @param arr
 * @param order ASC | DESC
 * @returns {*}
 */
export function quickSort(arr, order = 'ASC') {
  const pivotIndex = Math.floor(Math.random() * (arr.length));
  const pivot = arr[pivotIndex];
  if (arr.length <= 1) {
    return arr;
  }
  const result = sortAroundPivot(arr, pivot, order);
  const leftArray = result.array.slice(0, result.sortedPivotIndex);
  const rightArray = result.array.slice(result.sortedPivotIndex + 1,
    arr.length);
  return quickSort(leftArray, order)
    .concat([pivot, ...quickSort(rightArray, order)]);
}

/**
 * Move all values greater than pivot to one side and smaller to other
 * @param arr
 * @param pivot
 * @param order
 * @returns {{array: (Array.<T>|*), sortedPivotIndex: number}}
 */
export function sortAroundPivot(arr, pivot, order = 'ASC') {
  let sortedPivotIndex = 0, occurrence = 0;
  let arrWithoutPivot = arr.filter((value) => {
    if (value === pivot) {
      occurrence++;
    }
    return value !== pivot;
  });
  arrWithoutPivot.forEach((value, i) => {
    const condidtion = {
      'ASC': arrWithoutPivot[i] < pivot,
      'DESC': arrWithoutPivot[i] > pivot
    };
    if (condidtion[order.toUpperCase()]) {
      if (arrWithoutPivot[i] !== pivot) {
        const temp = arrWithoutPivot[sortedPivotIndex];
        arrWithoutPivot[sortedPivotIndex] = arrWithoutPivot[i];
        arrWithoutPivot[i] = temp;
      }
      sortedPivotIndex++;
    }
  });
  const pivotArray = new Array(occurrence).fill(pivot);
  arrWithoutPivot.splice(sortedPivotIndex, 0, ...pivotArray);
  return {
    'array': arrWithoutPivot,
    sortedPivotIndex
  };
}
