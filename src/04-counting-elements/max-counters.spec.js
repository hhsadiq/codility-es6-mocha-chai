import { expect } from 'chai';
import {
  solution
} from './max-counters';

describe('max counters', function () {
  [
    {
      N: 5,
      A: [3, 4, 4, 6, 1, 4, 4],
      expected: [3, 2, 2, 4, 2]
    },
    {
      N: 1,
      A: [3, 4, 4, 6, 1, 4, 4],
      expected: [1]
    },
    {
      N: 5,
      A: [6],
      expected: [0, 0, 0, 0, 0]
    },
    {
      N: 5,
      A: [1],
      expected: [1, 0, 0, 0, 0]
    },
    {
      N: 5,
      A: [1, 1, 1],
      expected: [3, 0, 0, 0, 0]
    },
    {
      N: 3,
      A: [3, 4, 4, 6, 1, 4, 4],
      expected: [2, 2, 2]
    }
  ].forEach(context => {
    it(`N: ${context.N} A: ${context.A} `, function () {
      expect(solution(context.N, context.A))
        .to
        .eql(context.expected);
    });
  });
});
