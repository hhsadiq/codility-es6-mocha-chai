import { Queue } from './queue';

export class Tree {
  /**
   * Generate the tree from JSON like structure
   * @param root
   */
  constructor(root) {
    this.root = root;
  }

  /**
   * Breadth first traversal
   * @param callback
   */
  breadthFirstTraversal(callback) {
    const q = new Queue();
    callback(this.root.value);
    this.root.children.forEach((node) => q.enqueue(node));
    while (!q.isEmpty()) {
      const node = q.dequeue();
      callback(node.value);
      node.children.forEach((value) => q.enqueue(value));
    }
  }

  /**
   * Breadth first traversal
   * @param callback
   */
  depthFirstTraversal(callback) {
    this._depthFirstTraversal(
      this.root,
      callback
    );
  }

  /**
   * @param node
   * @param callback
   * @private
   */
  _depthFirstTraversal(node, callback) {
    if (node.children < 1) {
      callback(node.value);
      return;
    }
    node.children.forEach(child => this._depthFirstTraversal(child, callback));
    callback(node.value);
  }

  sumOfEachPath() {
    return this._sumOfEachPath(this.root);
  }

  _sumOfEachPath(node, arr = [], parentSum = 0) {
    if (node.children < 1) {
      arr.push(parentSum + node.value);
      return;
    }
    parentSum += node.value;
    node.children.forEach(child =>
      this._sumOfEachPath(child, arr, parentSum));
    return arr;
  }

  /**
   * https://www.pramp.com/challenge/15oxrQx6LjtQj9JK9XqA
   * @returns {*}
   */
  minPath() {
    return this._minPathPrampSolution(this.root);
  }

  /**
   * @param node
   * @param min
   * @param parentSum
   * @returns {*}
   * @private
   */
  _minPath(node, min = [Infinity], parentSum = 0) {
    if (node.children < 1) {
      const pathSum = parentSum + node.value;
      min [0] = pathSum < min[0] ? pathSum : min[0];
      return;
    }
    parentSum += node.value;
    node.children.forEach(child =>
      this._minPath(child, min, parentSum));
    return min[0];
  }

  /**
   * @param node
   * @returns {*}
   * @private
   */
  _minPathPrampSolution(node) {
    if (node.children < 1) {
      return node.value;
    }
    let min = Infinity;
    node.children.forEach(child => {
      const tempCost = this._minPathPrampSolution(child);
      min = tempCost < min ? tempCost : min;
    });
    return min + node.value;
  }

}
