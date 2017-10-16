class Stack {

  /**
   * We're going to again be backed by a JavaScript array, but this time it
   * represents a list like we implemented before rather than memory.
   */

  constructor() {
    this.list = [];
    this.length = 0;
  }

  /**
   * We're going to implement two of the functions from list's "push" and "pop"
   * which are going to be identical in terms of functionality.
   */

  /**
   * Push to add items to the top of the stack.
   */

  push(value) {
    this.length++;
    this.list.push(value);
  }

  /**
   * And pop to remove items from the top of the stack.
   */

  pop() {
    // Don't do anything if we don't have any items.
    if (this.length === 0) return;

    // Pop the last item off the end of the list and return the value.
    this.length--;
    return this.list.pop();
  }

  /**
   * We're also going to add a function in order to view the item at the top of
   * the stack without removing it from the stack.
   */

  peek() {
    // Return the last item in "items" without removing it.
    return this.list[this.length - 1];
  }

  /**
   * Check whether stack is empty or not
   * @returns {boolean}
   */
  isEmpty() {
    return this.length < 1;
  }
}

/**
 *
 * You are going to build a stone wall. The wall should be straight and N
 * meters long, and its thickness should be constant; however, it should have
 * different heights in different places. The height of the wall is specified
 * by a zero-indexed array H of N positive integers. H[I] is the height of the
 * wall from I to I+1 meters to the right of its left end. In particular, H[0]
 * is the height of the wall's left end and H[N−1] is the height of the wall's
 * right end.
 * The wall should be built of cuboid stone blocks (that is, all sides of such
 * blocks are rectangular). Your task is to compute the minimum number of
 * blocks needed to build the wall.
 Write a function:
 function solution(H);
 that, given a zero-indexed array H of N positive integers specifying the height of the wall, returns the minimum number of blocks needed to build it.
 For example, given array H containing N = 9 integers:
 H[0] = 8    H[1] = 8    H[2] = 5
 H[3] = 7    H[4] = 9    H[5] = 8
 H[6] = 7    H[7] = 4    H[8] = 8
 the function should return 7. The figure shows one possible arrangement of seven blocks.
 Assume that:
 N is an integer within the range [1..100,000];
 each element of array H is an integer within the range [1..1,000,000,000].
 Complexity:
 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 Elements of input arrays can be modified.
 * @param H
 * @returns {*}
 */

export function solution(H) {
  const stack = new Stack();
  let stackSum = 0;
  let blocksCount = 0;
  H.forEach((value) => {
    while (value < stackSum) {
      stackSum -= stack.pop();
      if (value > stackSum) {
        stack.push(value - stackSum);
        stackSum = value;
        blocksCount++;
      }
    }
    if (value > stackSum) {
      stack.push(value - stackSum);
      stackSum = value;
      blocksCount++;
    }
  });
  return blocksCount;
}
