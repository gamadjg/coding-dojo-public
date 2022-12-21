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

class QueueNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
	constructor() {
		this.head;
		this.length = 0;
	}

	enqueue(item) {
		let node = new QueueNode(item);
		if (!this.head) {
			this.head = node;
			this.length++;
			return this.length;
		}
		let runner = this.head;
		while (runner.next) {
			runner = runner.next;
		}
		runner.next = node;
		this.length++;
		return this.length;
	}

	dequeue() {
		if (this.isEmpty()) {
			return undefined;
		}
		const returnNode = this.head;
		this.head = this.head.next;
		returnNode.next = null;
		this.length--;
		return returnNode;
	}

	isEmpty() {
		return this.head === null;
	}

	/**
	 * Compares this queue to another given queue to see if they are equal.
	 * Avoid indexing the queue items directly via bracket notation(no current or runner), use the
	 * queue methods instead for practice.
	 * Use no extra array.
	 * The queues should be returned to their original order when done.
	 * - Time: O(?).
	 * - Space: O(?).
	 * @param {Queue} q2 The queue to be compared against this queue.
	 * @returns {boolean} Whether all the items of the two queues are equal and
	 *    in the same order.
	 */
	//deque both and store in variables compare and then enque again
	compareQueues(q2) {
		if (this.length !== q2.length) {
			return false;
		}
		let result = true;
		let size = this.length;
		for (let i = 0; i < size; i++) {
			let thisPop = this.dequeue();
			let qPop = q2.dequeue();
			this.enqueue(thisPop.data);
			q2.enqueue(qPop.data);

			if (thisPop.data !== qPop.data) {
				result = false;
			}
		}
		return result;
	}

	/**
	 * Determines if the queue is a palindrome (same items forward and backwards).
	 * Avoid indexing queue items directly via bracket notation(no current or runner), instead use the
	 * queue methods for practice.
	 * Use only 1 stack as additional storage, no other arrays or objects.
	 * The queue should be returned to its original order when done.
	 * - Time: O(?).
	 * - Space: O(?).
	 * @returns {boolean}
	 */

	printQueue() {
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}

	isPalindrome() {
		const stack = new Stack();

		for (let i = 0; i < this.length; i++) {
			const currentNode = this.dequeue();
			this.enqueue(currentNode.data);
			stack.push(currentNode.data);
		}

		let result = true;
		for (let i = 0; i < this.length; i++) {
			const queueNode = this.dequeue();
			const stackNode = stack.pop();
			this.enqueue(queueNode.data);

			if (stackNode.data !== queueNode.data) {
				result = false;
			}
		}
		return result;
	}
}

const newStack = new Stack();

const newQueue1 = new Queue();
newQueue1.enqueue(21);
newQueue1.enqueue(56);
newQueue1.enqueue(95);
newQueue1.enqueue(10);
newQueue1.enqueue(60);
newQueue1.enqueue(101);

const newQueue2 = new Queue();
newQueue2.enqueue(21);
newQueue2.enqueue(56);
newQueue2.enqueue(95);
newQueue2.enqueue(10);
newQueue2.enqueue(60);
newQueue2.enqueue(101);

const newQueue3 = new Queue();
newQueue3.enqueue(1);
newQueue3.enqueue(2);
newQueue3.enqueue(3);
newQueue3.enqueue(3);
newQueue3.enqueue(2);
newQueue3.enqueue(1);

//compareQueues:
console.log(newQueue1.compareQueues(newQueue2)); //true
console.log(newQueue1.compareQueues(newQueue3)); // false

// isPalindrome
console.log(newQueue1.isPalindrome()); // false
console.log(newQueue2.isPalindrome()); // false
console.log(newQueue3.isPalindrome()); // true
