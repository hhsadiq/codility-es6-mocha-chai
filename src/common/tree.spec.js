import { expect } from 'chai';
import {
  Tree
} from './tree';
import { treeCases } from './common-cases.spec';

describe('tree', () => {
  it('Generate the tree', () => {
    expect(new Tree(treeCases[0].tree).root)
      .to
      .eql(treeCases[0].tree);
  });


  treeCases.forEach((context, i) => {
    const myTree = new Tree(context.tree);
    it(`Breadth first traversal in tree ${i}`, () => {
      let traversalResult = [];
      myTree.breadthFirstTraversal(value => traversalResult.push(value));
      expect(traversalResult)
        .to
        .eql(context.BFT);
    });

    it(`Depth first traversal in tree ${i}`, () => {
      let traversalResult = [];
      myTree.depthFirstTraversal(value => traversalResult.push(value));
      expect(traversalResult)
        .to
        .eql(context.DFT);
    });

    it(`Should return sum of each path in tree ${i}`, () => {
      expect(myTree.sumOfEachPath())
        .to
        .eql(context.sumOfEachPath);
    });

    it(`Should return minimum path in tree ${i}`, () => {
      expect(myTree.minPath())
        .to
        .eql(context.minPath);
    });
  });
});
