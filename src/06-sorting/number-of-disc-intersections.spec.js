import { expect } from 'chai';
import {
  solution
} from './number-of-disc-intersections';

describe('number of disc intersections', function () {
  [
    {
      A: [1, 5, 2, 1, 4, 0],
      expected: 11
    },
    {
      A: [1, 5, 2, 1, 4, 0, 1, 5, 2, 1, 4, 0, 1, 5, 2, 1, 4, 0, 1, 5, 2, 1, 4, 0, 1, 5, 2, 1, 4, 0],
      expected: 110
    },
    {
      A: [0, 1],
      expected: 1
    },
    {
      A: [0, 2],
      expected: 1
    },
    {
      A: [5, 2, 1, 3],
      expected: 6
    },
    {
      A: [1, 1, 1],
      expected: 3
    },
    {
      A: [],
      expected: 0
    }
  ].forEach(context => {
    it(`A: ${context.A} `, function () {
      expect(solution(context.A))
        .to
        .eql(context.expected);
    });
  });
});
