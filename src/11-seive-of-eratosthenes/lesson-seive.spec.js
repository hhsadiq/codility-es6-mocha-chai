import { expect } from 'chai';
import {
  solution
} from './lesson-seive';

describe('seive', function () {
  [
    {
      N: 5,
      expected: [2, 3, 5]
    }
  ].forEach(context => {
    it(`N: ${context.N} A: ${context.A} `, function () {
      expect(solution(context.N, context.A))
        .to
        .eql(context.expected);
    });
  });
});
