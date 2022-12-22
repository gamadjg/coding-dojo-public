class StackNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.head = null;
	}
	push(item) {
		if (this.isEmpty()) {
			this.head = new StackNode(item);
			return 1;
		}
		const newNode = new StackNode(item);
		newNode.next = this.head;
		this.head = newNode;
	}
	pop() {
		if (this.isEmpty()) {
			return undefined;
		}
		const result = this.head;
		this.head = result.next;
		result.next = null;
		return result;
	}
	peek() {
		if (this.isEmpty()) return undefined;
		return this.head.data;
	}
	isEmpty() {
		return this.head === null;
	}
	size() {
		let tempArr = [];
		while (this.head !== null) {
			let current = this.pop();
			tempArr.push(current.data);
		}
		for (let i = tempArr.length - 1; i >= 0; i--) {
			this.push(tempArr[i]);
		}
		return tempArr.length;
	}
	print() {
		let runner = this.head;
		let vals = "";
		while (runner) {
			vals += `${runner.data}${runner.next ? ", " : ""}`;
			runner = runner.next;
		}
		console.log(vals);
		return vals;
	}
}

/**
 * Class to represent a Queue but is implemented using two stacks to store the
 * queued items without using any other objects or arrays to store the items.
 * Retains the FIFO (First in First Out) ordering when adding / removing items.
 */
class TwoStackQueue {
	constructor() {
		this.stack1 = new Stack();
		this.stack2 = new Stack();
	}
	/**
	 * Adds a new item to the back of the queue.
	 * - Time: O(?).
	 * - Space: O(?).
	 * @param {any} item To be added.
	 * @returns {number} The new number of items in the queue.
	 */
	enqueue(item) {
		this.stack1.push(item);
		return this.stack1.size();
	}

	/**
	 * Removes the next item in the line / queue.
	 * - Time: O(?).
	 * - Space: O(?).
	 * @returns {any} The removed item.
	 */
	dequeue() {
		if (!this.stack2.isEmpty()) {
			return this.stack2.pop();
		} else if (this.stack1.isEmpty()) {
			return undefined;
		} else {
			while (!this.stack1.isEmpty()) {
				const newNode = this.stack1.pop();
				this.stack2.push(newNode.data);
			}
			return this.stack2.pop();
		}
	}
}

const twoStackQ = new TwoStackQueue();
twoStackQ.enqueue(1);
twoStackQ.enqueue(2);
twoStackQ.enqueue(3);
console.log(twoStackQ.dequeue());
twoStackQ.enqueue(4);
console.log(twoStackQ.dequeue());
console.log(twoStackQ.dequeue());
console.log(twoStackQ.dequeue());

// console.log(twoStackQ.enqueue(50));
