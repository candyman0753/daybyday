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
    if (index < 0 || index >= this.size) {
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
  indexOf(val) {
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current.val === val) {
        return i;
      } else {
        current = current.next;
      }
    }
    return -1;
  }
  append(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      const last = this.get(this.size - 1);
      last.next = node;
    }
    this.size++;
  }
  insert(val, index) {
    this._indexCheck(index);
    if (index === 0) {
      this.head = new Node(val, this.head);
    } else {
      const target = this.get(index - 1);
      target.next = new Node(val, target.next);
    }
    this.size++;
  }
  remove(val) {
    if (!this.head) {
      return null;
    }
    if (this.head.val === val) {
      this.head = this.head.next;
      this.size--;
      return val;
    } else {
      let current = this.head;
      while (current.next) {
        if (current.next.val === val) {
          current.next = current.next.next;
          this.size--;
          return val;
        } else {
          current = current.next;
        }
      }
    }
    return null;
  }
  removeAll(val) {
    let copy = new Node(null, this.head),
      temp = copy;
    while (temp.next) {
      if (temp.next.val === val) {
        temp.next = temp.next.next;
        this.size--;
      } else {
        temp = temp.next;
      }
    }
    this.head = copy.next;
  }
  removeAt(index) {
    this._indexCheck(index);
    let pre,
      target = null;
    if (index === 0) {
      target = this.head;
      this.head = target.next;
    } else {
      pre = this.get(index - 1);
      target = pre.next;
      pre.next = target.next;
    }
    this.size--;
    return target ? target.val : null;
  }
  set(val, index) {
    this._indexCheck(index);
    const target = this.get(index);
    target.val = val;
  }
  length() {
    return this.size;
  }
  clear() {
    this.head = null;
    this.size = 0;
  }
  printf() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    const result = arr.join(" -> ") || null;
    console.log(result);
    return result;
  }
}
const iteratorMake = arr => {
  let index = 0;
  return {
    next: () => {
      return index >= arr.length
        ? { value: undefined, done: true }
        : { value: arr[index++], done: false };
    }
  };
};
function* firstStep() {
  yield "挖坑";
}
function* plant() {
  // yield* firstStep();
  yield "挖坑";
  const tree = yield "松树";
  const result = yield "000";
  yield result;
}
