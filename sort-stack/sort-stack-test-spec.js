var Stack = require('./sort-stack');

describe('Stack', function () {
  it('pushes and pops', function () {
    var list = new Stack();
    list.push(10);
    list.push(20);
    expect(list.pop()).toBe(20);
    expect(list.pop()).toBe(10);
  });

  it('can sort correctly', function () {
    var stack = new Stack();
    stack.push(9);
    stack.push(15);
    stack.push(11);
    stack.push(4);
    stack.push(2);
    stack.push(6);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    stack.sort();
    expect(stack.peek()).toBe(15);
    expect(stack.pop()).toBe(15);
    expect(stack.pop()).toBe(11);
    expect(stack.pop()).toBe(9);
    expect(stack.pop()).toBe(6);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(null);
  });

  it('can sort stacks with zeroes and negative numbers', function () {
    var stack = new Stack();
    stack.push(8);
    stack.push(-3);
    stack.push(10);
    stack.push(0);
    stack.push(-6);
    stack.push(1);
    expect(stack.pop()).toBe(1);
    stack.sort();
    expect(stack.pop()).toBe(10);
    expect(stack.pop()).toBe(8);
    expect(stack.pop()).toBe(0);
    expect(stack.pop()).toBe(-3);
    expect(stack.pop()).toBe(-6);
    expect(stack.pop()).toBe(null);
  });

});
