import { expect } from 'chai';
import {
  mergeSort,
  mergeSortedArrays
} from './merge-sort';
import { sortingCases } from './common-cases.spec';

describe('merge sort', function () {
  sortingCases.forEach(context => {
    it(`Sorting ${context.arr}`, function () {
      expect(mergeSort(context.arr, context.order))
        .to
        .eql(context.expected);
    });

  });
});

describe('merge two sorted arrays', () => {
  [
    {
      arr1: [10, 19, 21, 22, 23, 24],
      arr2: [2, 3],
      expected: [2, 3, 10, 19, 21, 22, 23, 24]
    },
    {
      arr1: [2, 3],
      arr2: [10, 19, 21, 22, 23, 24],
      expected: [2, 3, 10, 19, 21, 22, 23, 24]
    },
    {
      arr1: [10],
      arr2: [2],
      expected: [2, 10]
    },
    {
      arr1: [1, 2, 3],
      arr2: [3, 4, 5],
      expected: [1, 2, 3, 3, 4, 5]
    },
    {
      arr1: [10, 19, 23, 27],
      arr2: [1, 2, 12, 21, 26, 31, 39],
      expected: [1, 2, 10, 12, 19, 21, 23, 26, 27, 31, 39]
    },
    {
      arr1: [],
      arr2: [2],
      expected: [2]
    },
    {
      arr1: [2],
      arr2: [],
      expected: [2]
    },
    {
      arr1: [],
      arr2: [],
      expected: []
    },
    {
      arr1: 12,
      arr2: 23,
      expected: 'invalid input'
    },
    {
      arr1: [12],
      arr2: 23,
      expected: 'invalid input'
    },
    {
      arr1: [24, 23, 21, 7, 4],
      arr2: [29, 25],
      order: 'DESC',
      expected: [29, 25, 24, 23, 21, 7, 4]
    },
    {
      arr1: [24],
      arr2: [29],
      order: 'DESC',
      expected: [29, 24]
    },
    {
      arr1: [24, 21],
      arr2: [29, 18],
      order: 'DESC',
      expected: [29, 24, 21, 18]
    },
    {
      arr1: [29, 25],
      arr2: [24, 23, 21, 7, 4],
      order: 'DESC',
      expected: [29, 25, 24, 23, 21, 7, 4]
    },
    {
      arr1: [2, 3],
      arr2: [10, 19, 21, 22, 23, 24],
      expected: [2, 3, 10, 19, 21, 22, 23, 24]
    },
    {
      arr1: [10],
      arr2: [2],
      expected: [2, 10]
    },
    {
      arr1: [1, 2, 3],
      arr2: [3, 4, 5],
      expected: [1, 2, 3, 3, 4, 5]
    },
    {
      arr1: [10, 19, 23, 27],
      arr2: [1, 2, 12, 21, 26, 31, 39],
      expected: [1, 2, 10, 12, 19, 21, 23, 26, 27, 31, 39]
    },
    {
      arr1: [],
      arr2: [2],
      expected: [2]
    },
    {
      arr1: [2],
      arr2: [],
      expected: [2]
    },
    {
      arr1: [],
      arr2: [],
      expected: []
    },
    {
      arr1: 12,
      arr2: 23,
      expected: 'invalid input'
    },
    {
      arr1: [12],
      arr2: 23,
      expected: 'invalid input'
    }
  ].forEach(context => {
    it(`Merging ${context.arr1} and ${context.arr2}`, () => {
      expect(mergeSortedArrays(context.arr1, context.arr2, context.order))
        .to
        .eql(context.expected);
    });
  });
});
