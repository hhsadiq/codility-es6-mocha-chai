class Stack {
  constructor() {
    this.stack = [];
    this.height = 0;
  }
  pop() {
    if (this.height === 0) return;
    this.height--;
    return this.stack.pop();
  }
  push(value) {
    this.height++;
    this.stack.push(value);
  }
  isEmpty() {
    return this.height < 1;
  }
  peek() {
    return this.stack[this.height - 1];
  }
}

/**
 *
 A non-empty zero-indexed array A consisting of N integers is given.
 The leader of this array is the value that occurs in more than half of the elements of A.
 An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of the same value.
 For example, given array A such that:
 A[0] = 4
 A[1] = 3
 A[2] = 4
 A[3] = 4
 A[4] = 4
 A[5] = 2
 we can find two equi leaders:
 0, because sequences: (4) and (3, 4, 4, 4, 2) have the same leader, whose value is 4.
 2, because sequences: (4, 3, 4) and (4, 4, 2) have the same leader, whose value is 4.
 The goal is to count the number of equi leaders.
 Write a function:
 function solution(A);
 that, given a non-empty zero-indexed array A consisting of N integers, returns the number of equi leaders.
 For example, given:
 A[0] = 4
 A[1] = 3
 A[2] = 4
 A[3] = 4
 A[4] = 4
 A[5] = 2
 the function should return 2, as explained above.
 Assume that:
 N is an integer within the range [1..100,000];
 each element of array A is an integer within the range [−1,000,000,000..1,000,000,000].
 Complexity:
 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 Elements of input arrays can be modified.
 * @param A
 * @returns {*}
 */

export function solution(A) {
  let equiLeaderCount = 0;
  const leaderObj = getLeader(A);
  if (leaderObj === -1) {
    return equiLeaderCount;
  }
  const leader = leaderObj.leader;
  let leaderCount = leaderObj.count;
  let leftLeaderCount = 0;
  for (let i = 0; i < A.length - 1; i++) {
    let leftLength = i + 1;
    let rightLength = A.length - leftLength;
    if (A[i] === leader) {
      leaderCount--;
      leftLeaderCount++;
    }
    if (leftLeaderCount > (leftLength / 2) && leaderCount > (rightLength / 2)) {
      equiLeaderCount++;
    }
  }
  return equiLeaderCount;
}

function getLeader(A){
  const stack = new Stack();
  A.forEach((value, i) => {
    if (i === 0) {
      stack.push(value);
    } else {
      if (stack.isEmpty()) {
        stack.push(value);
      } else if (value !== stack.peek()) {
        stack.pop();
      } else {
        stack.push(value);
      }
    }
  });
  const candidate = stack.pop();
  let candidateCount = 0;
  A.forEach((value) => {
    if (value === candidate) {
      candidateCount++;
    }
  });
  return candidateCount > (A.length / 2) ? {
    leader: candidate,
    count: candidateCount
  } : -1;
}
