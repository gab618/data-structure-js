class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let node = this.head;
    let count = 0;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  print() {
    let output = "[ ";
    let node = this.head;
    while (node) {
      output = output + node.data.toString() + ", ";
      node = node.next;
    }
    output = output.substring(0, output.length - 2) + " ]";
    console.log(output);
  }

  clear() {
    this.head = null;
  }

  getLastItem() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) lastNode = lastNode.next;
    }
    return lastNode;
  }

  getFirstItem() {
    return this.head;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) return node;
      counter++;
      node = node.next;
    }
    return null;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;

    return this.head;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let tail = this.head;
    while (tail.next) tail = tail.next;
    tail.next = newNode;

    return newNode;
  }

  insertAt(index, data) {
    if (!this.head) {
      const newNode = new Node(data);
      this.head = newNode;
      return newNode;
    }

    if (index === 0) {
      this.insertAtBeginning(data);
      return;
    }

    const newNode = new Node(data);
    const previous = this.getAt(index - 1);
    newNode.next = previous.next;
    previous.next = newNode;
  }

  deleteFirstItem() {
    if (!this.head) return;

    this.head = this.head.next;
    return this.head;
  }

  deleteLastItem() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let tail = this.head.next;

    while (tail.next) {
      previous = tail;
      tail = tail.next;
    }

    previous.next = null;
    return;
  }

  deleteAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) return;

    previous.next = previous.next.next;

    return;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
node1.next = node2;
node2.next = node3;
// node3.next = node1; //loop (circular list)

const list = new LinkedList(node1);

console.log("Size:", list.size());
console.log("First item:", list.getFirstItem().data);
console.log("Last item:", list.getLastItem().data);
console.log("----------");

list.insertAtBeginning(0);
list.insertAtEnd(4);
list.insertAt(0, 9);
list.insertAt(1, 10);
list.deleteFirstItem();
list.deleteLastItem();
list.deleteAt(10);
list.print();

console.log("New size:", list.size());
console.log("New first item:", list.getFirstItem().data);
console.log("New last item:", list.getLastItem().data);
