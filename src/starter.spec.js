import { expect } from 'chai';
import {
  solution
} from './starter';

describe('starter', function () {
  [
    {
      N: 5,
      A: [3, 4, 4, 6, 1, 4, 4],
      expected: [3, 4, 4, 6, 1, 4, 4]
    }
  ].forEach(context => {
    it(`N: ${context.N} A: ${context.A} `, function () {
      expect(solution(context.N, context.A))
        .to
        .eql(context.expected);
    });
  });
});
