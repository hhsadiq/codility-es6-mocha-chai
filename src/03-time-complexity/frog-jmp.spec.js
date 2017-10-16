import { expect } from 'chai';
import {
  solution
} from './frog-jmp';

describe('frog jmp', function () {
  [
    {
      X: 10,
      Y: 85,
      D: 30,
      expected: 3
    },
    {
      X: 1,
      Y: 1,
      D: 10,
      expected: 0
    },
    {
      X: 1,
      Y: 1,
      D: 1,
      expected: 0
    },
    {
      X: 190,
      Y: 1000000000,
      D: 1100000,
      expected: 910
    },
    {
      X: 1,
      Y: 100,
      D: 1,
      expected: 99
    }
  ].forEach(context => {
    it(`X:${context.X} Y:${context.Y} D:${context.D}`, function () {
      expect(solution(context.X, context.Y, context.D))
        .to
        .eql(context.expected);
    });
  });

});
