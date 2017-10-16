import { expect } from 'chai';
import {
  divisorsLinear,
  divisorsSquareRoot,
  primality
} from './lesson-primality-and-divisors';

describe('primality and divisors', function () {
  [
    {
      N: 12,
      expected: [1, 2, 3, 4, 6, 12]
    },
    {
      N: 20,
      expected: [1, 2, 4, 5, 10, 20]
    },
    {
      N: 7,
      expected: [1, 7]
    }
  ].forEach(context => {
    it(`N: ${context.N}`, function () {
      expect(divisorsLinear(context.N))
        .to
        .eql(context.expected);
      expect(divisorsSquareRoot(context.N))
        .to
        .eql(context.expected);
    });
  });

  [
    {
      N: 12,
      expected: false
    },
    {
      N: 20,
      expected: false
    },
    {
      N: 13,
      expected: true
    },
    {
      N: 17,
      expected: true
    },
    {
      N: 1009,
      expected: true
    },
    {
      N: 1008,
      expected: false
    },
    {
      N: 1,
      expected: false
    },
    {
      N: 7,
      expected: true
    }
  ].forEach(context => {
    it(`N: ${context.N}`, function () {
      expect(primality(context.N))
        .to
        .eql(context.expected);
    });
  });
});
