import { expect } from 'chai';
import {
  solution
} from './binary-gap';

const cases = [
  {
    input: '10100101010110001',
    expected: 3
  },
  {
    input: '0000',
    expected: 0
  },
  {
    input: '11111',
    expected: 0
  },
  {
    input: '100001',
    expected: 4
  },
  {
    input: '0000010',
    expected: 0
  },
  {
    input: '0100011',
    expected: 3
  },
  {
    input: '110010100000000',
    expected: 2
  },
  {
    input: '100011101101110100011100001',
    expected: 4
  }
];

describe('binary gap', function () {
  cases.forEach(context => {
    it(`Input ${context.input}`, function () {
      expect(solution(parseInt(context.input, 2)))
        .to
        .eql(context.expected);
    });
  });
});
