import { expect } from 'chai';
import {
  solution
} from './equi-leader';

describe('equi leader', function () {
  [
    {
      A: [1],
      expected: 0
    },
    {
      A: [1, 2],
      expected: 0
    },
    {
      A: [5, 1, 23, 34, 3, 3],
      expected: 0
    },
    {
      A: [4, 3, 4, 4],
      expected: 2
    },
    {
      A: [4, 4, 2, 5, 3, 4, 4, 4],
      expected: 3
    },
    {
      A: [5, 2, 5],
      expected: 0
    },
    {
      A: [4, 3, 4, 4, 4, 2],
      expected: 2
    }
  ].forEach(context => {
    it(`A: ${context.A} `, function () {
      expect(solution(context.A))
        .to
        .eql(context.expected);
    });
  });
});
