import { expect } from 'chai';
import {
  Queue
} from './queue';

describe('Queue', function () {
  it('should correctly generate a queue', () => {
    const q = new Queue;
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    expect(q.dequeue())
      .to
      .eql(1);
    expect(q.dequeue())
      .to
      .eql(2);
    expect(q.dequeue())
      .to
      .eql(3);
    expect(q.dequeue())
      .to
      .eql(4);
  });
});
