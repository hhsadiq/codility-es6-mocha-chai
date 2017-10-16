import { expect } from 'chai';
import {
  quickSort,
  sortAroundPivot
} from './quick-sort';
import { sortingCases } from './common-cases.spec';

describe('quick sort', function () {
  sortingCases.forEach(context => {
    it(`Sorting ${context.arr}`, function () {
      expect(quickSort(context.arr, context.order))
        .to
        .eql(context.expected);
    });
  });
});

describe('sort the given array around pivot', () => {
  [
    {
      arr: [6, 5, 3, 1, 8, 7, 2, 4],
      pivot: 2,
      expected: [1, 2, 5, 3, 6, 8, 7, 4]
    },
    {
      arr: [6, 5, 2, 3, 1, 8, 7, 2, 4],
      pivot: 2,
      expected: [1, 2, 2, 5, 3, 6, 8, 7, 4]
    },
    {
      arr: [8, 6, 5, 3, 1, 8, 7, 2, 4, 8],
      pivot: 8,
      expected: [6, 5, 3, 1, 7, 2, 4, 8, 8, 8]
    },
    {
      arr: [8, 6, 5, 3, 1, 8, 7, 2, 4, 8],
      pivot: 8,
      order: 'desc',
      expected: [8, 8, 8, 6, 5, 3, 1, 7, 2, 4]
    },
    {
      arr: [6, 5, 3, 1, 8, 7, 2, 4],
      pivot: 1,
      expected: [1, 6, 5, 3, 8, 7, 2, 4]
    },
    {
      arr: [6, 5, 3, 1, 8, 7, 2, 4],
      pivot: 6,
      expected: [5, 3, 1, 2, 4, 6, 8, 7]
    },
    {
      arr: [6, 5, 3, 1, 8, 7, 2, 4],
      pivot: 5,
      expected: [3, 1, 2, 4, 5, 7, 6, 8]
    },
    {
      arr: [6, 5, 3, 1, 8, 7, 2, 4],
      pivot: 5,
      order: 'DESC',
      expected: [6, 8, 7, 5, 3, 1, 2, 4]
    }
  ].forEach(context => {
    it(
      `Sorting the array ${context.arr} around pivot ${context.pivot} in ${context.order || 'ASC'} order`, () => {
        expect(sortAroundPivot(context.arr, context.pivot, context.order).array)
          .to
          .eql(context.expected);
      });
  });
});
