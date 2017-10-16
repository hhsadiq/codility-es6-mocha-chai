import { expect } from 'chai';
import {
  solution
} from './stone-wall';

describe('stone wall', function () {
  [
    {
      H: [1, 2, 3, 4, 1],
      expected: 4
    },
    {
      H: [5, 5, 5, 6, 5],
      expected: 2
    },
    {
      H: [1],
      expected: 1
    },
    {
      H: [8, 8, 5, 7, 9, 8, 7, 4, 8],
      expected: 7
    }
  ].forEach(context => {
    it(`H: ${context.H} `, function () {
      expect(solution(context.H))
        .to
        .eql(context.expected);
    });
  });
});
