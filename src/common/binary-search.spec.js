import { expect } from 'chai';
import {
  binarySearchIterative,
  binarySearchRecursive
} from './binary-search';

const cases = [
  {
    arr: [1, 2, 3, 4, 6, 7, 11, 12, 13, 14, 16, 17],
    key: 3,
    expected: 2
  },
  {
    arr: [1, 2, 3, 4, 6, 7, 11, 12, 13, 14, 16],
    key: 3,
    expected: 2
  },
  {
    arr: [1, 2, 3, 4, 6, 7, 11, 12, 13, 14, 16, 17],
    key: 1,
    expected: 0
  },
  {
    arr: [1, 2, 3, 4, 6, 7, 11, 12, 13, 14, 16, 17],
    key: 17,
    expected: 11
  },
  {
    arr: [1, 2, 3, 4, 6, 7, 11, 12, 13, 14, 16, 17],
    key: 13,
    expected: 8
  },
  {
    arr: [1, 2, 3, 4, 6, 7, 11, 12, 13, 14, 16, 17],
    key: 7,
    expected: 5
  },
  {
    arr: [1, 2, 3, 4, 6, 7, 11, 12, 13, 14, 16, 17],
    key: 11,
    expected: 6
  },
  {
    arr: [1, 2, 3, 4, 6, 7, 11, 12, 13, 14, 16],
    key: 13,
    expected: 8
  },
  {
    arr: [1, 2, 3, 4, 6, 7, 11, 12, 13, 14, 16],
    key: 2,
    expected: 1
  },
  {
    arr: [1, 2, 3, 4, 6, 7, 11, 12, 13, 14, 16],
    key: 7,
    expected: 5
  },
  {
    arr: [1, 2, 3, 4, 6, 7, 11, 12, 13, 14, 16],
    key: 27,
    expected: -1
  },
  {
    arr: [],
    key: 31,
    expected: -1
  },
  {
    arr: [],
    key: '',
    expected: -1
  }
];

describe('Iterative binary search: ', function () {
  cases.forEach(context => {
    it(`Finding ${context.key} in ${context.arr}`, function () {
      expect(binarySearchIterative(context.arr, context.key))
        .to
        .equal(context.expected);
    });

  });
});
describe('Recursive binary search: ', function () {
  cases.forEach(context => {
    it(`Finding ${context.key} in ${context.arr}`, function () {
      expect(binarySearchRecursive(context.arr, context.key))
        .to
        .equal(context.expected);
    });

  });
});
