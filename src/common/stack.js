export class Stack {
  constructor() {
    this.stack = [];
    this.height = 0;
  }
  pop() {
    if (this.height === 0) return;
    this.height--;
    return this.stack.pop();
  }
  push(value) {
    this.height++;
    this.stack.push(value);
  }
  isEmpty() {
    return this.height < 1;
  }
  peek() {
    return this.stack[this.height - 1];
  }
}
