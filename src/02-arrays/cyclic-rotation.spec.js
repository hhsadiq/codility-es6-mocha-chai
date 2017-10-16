import { expect } from 'chai';
import {
  solution
} from './cyclic-rotation';

describe('cyclic rotation of array', function () {


  /**
   * Test 1
   */
  [
    {
      A: [3, 8, 9, 7, 6],
      expected: [6, 3, 8, 9, 7],
      K: 1
    },
    {
      A: [3, 8, 9, 7, 6],
      expected: [9, 7, 6, 3, 8],
      K: 3
    },
    {
      A: [3, 8, 9, 7, 6],
      expected: [3, 8, 9, 7, 6],
      K: 0
    },
    {
      A: [1],
      expected: [1],
      K: 13
    },
    {
      A: [],
      expected: [],
      K: 13
    },
    {
      A: [1],
      expected: [1],
      K: 0
    },
    {
      A: [-1000, 200, 0],
      expected: [-1000, 200, 0],
      K: 3
    }
  ].forEach(context => {
    it(`Rotate Array ${context.A}, ${context.K} times`, function () {
      expect(solution(context.A, context.K))
        .to
        .eql(context.expected);
    });
  });
});
