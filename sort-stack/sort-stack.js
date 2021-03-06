function Stack() {
    this.top = null;
}

Stack.prototype.sort = function() {
    //do not use any data structures except for the helper stack created below
    var helperStack = new Stack();
    //your code here
};

Stack.prototype.push = function(val) {
    var newNode = new Node(val);
    if (!this.top) {
        this.top = newNode;
        return;
    }
    newNode.next = this.top;
    this.top = newNode;
};

Stack.prototype.pop = function() {
    if (!this.top) return null;
    var popped = this.top.val;
    this.top = this.top.next;
    return popped;
};

Stack.prototype.peek = function() {
    if (!this.top) return null;
    return this.top.val;
};

Stack.prototype.isEmpty = function() {
    return this.top === null || this.top === undefined;
};

function Node(val,next) {
    this.val = val;
    this.next = next;
}

module.exports = Stack;
