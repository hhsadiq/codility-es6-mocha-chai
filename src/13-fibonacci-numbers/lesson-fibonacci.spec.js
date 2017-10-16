import { expect } from 'chai';
import {
  solution
} from './lesson-fibonacci';

describe('fibonacci', function () {
  [
    {
      N: 5,
      expected: [0, 1, 1, 2, 3, 5]
    },
    {
      N: 8,
      expected: [0, 1, 1, 2, 3, 5, 8, 13, 21]
    },
    {
      N: 12,
      expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
    },
    {
      N: 5,
      expected: [0, 1, 1, 2, 3, 5]
    }
  ].forEach(context => {
    it(`N: ${context.N}`, function () {
      expect(solution(context.N))
        .to
        .eql(context.expected);
    });
  });
});
