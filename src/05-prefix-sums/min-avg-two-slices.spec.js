import { expect } from 'chai';
import {
  solution
} from './min-avg-two-slices';

describe('min avg of two slices', function () {
  [
    {
      A: [4, 2, 2, 5, 1, 5, 8],
      expected: 1
    },
    {
      A: [0, 1],
      expected: 0
    },
    {
      A: [9, 8, 1, 1, 12, 1, 1],
      expected: 2
    },
    {
      A: [0, 0, 0, 0],
      expected: 0
    },
    {
      A: [0, 0, 0, 0, 1],
      expected: 0
    },
    {
      A: [-3, -5, -8, -4, -10],
      expected: 2
    },
    {
      A: [-10, -5, -654, -2, -9932],
      expected: 3
    },
    {
      A: [-1, -5, -654, -2, -2],
      expected: 1
    },
    {
      A: [-1, -1, 654, 2, 2],
      expected: 0
    },
    {
      A: [9, 8, 1, 1, 12, 543, -1000],
      expected: 5
    },
    {
      A: [5, 3, 5, 1],
      expected: 1
    }
  ].forEach(context => {
    it(`A: ${context.A} `, function () {
      expect(solution(context.A))
        .to
        .eql(context.expected);
    });
  });
});
