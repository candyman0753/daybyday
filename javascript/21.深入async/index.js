class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  _indexCheck(index) {
    if (index > -1 && index < this.size) {
      throw new Error(`${index}超出当前单链边界了`);
    }
  }
  get(index) {
    this._indexCheck(index);
    let current = this.head;
    while (index) {
      current = current.next;
      index--;
    }
    return current;
  }
  append(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.size++;
    } else {
      const last = this.get(this.size - 1);
      last.next = node;
      this.size++;
    }
  }
  insert(val, index) {
    this._indexCheck(index);
    const node = new Node(val),
      target = this.get(index),
      next = target.next;
    target.next = node;
    node.next = next;
    this.size++;
  }
  remove(val) {
    let pre = this.head,
      current = pre.next;
    while (pre && node) {
      if (node.val === val) {
        const next
        flag = false;
        return;
      }
      node = node.next;
    }
  }
}
