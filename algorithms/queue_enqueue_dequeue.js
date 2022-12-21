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
		this.head = null;
		this.length = 0;
	}
	/**
	 * Adds a new given item to the back of this queue.
	 * - Time: O(n) constant.
	 * - Space: O(n) constant.
	 * @param {any} item The new item to add to the back.
	 * @returns {number} The new length of this queue.
	 */
	enqueue(item) {
		if (this.isEmpty()) {
			this.head = new QueueNode(item);
			this.length++;
			return 1;
		}
		let current = this.head;
		while (current.next) {
			current = current.next;
		}
		const newNode = new QueueNode(item);
		current.next = newNode;
		this.length++;
		return this.length;
	}
	/**
	 * Removes and returns the first item of this queue.
	 * - Time: O(1) constant
	 * - Space: O(1) constant.
	 * @returns {any} The first item or undefined if empty.
	 */
	dequeue() {
		if (this.isEmpty()) {
			return undefined;
		}
		const returnNode = this.head;
		this.head = this.head.next;
		returnNode.next = null;
		return returnNode;
	}
	/**
	 * Retrieves the first item without removing it.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @returns {any} The first item or undefined if empty.
	 */
	front() {
		if (this.isEmpty()) {
			return undefined;
		}
		return new QueueNode(this.head.data);
	}
	/**
	 * Returns whether or not this queue is empty.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @returns {boolean}
	 */
	isEmpty() {
		return this.head === null;
	}

	/**
	 * Retrieves the size of this queue.
	 * using queue convention
	 * - Time: O(n) constant.
	 * - Space: O(n) constant.
	 * @returns {number} The length.
	 */
	size() {
		let tempArr = [];
		while (this.head !== null) {
			let current = this.dequeue();
			tempArr.push(current.data);
		}
		console.log(tempArr);

		for (let i = 0; i < tempArr.length - 1; i++) {
			this.enqueue(tempArr[i]);
		}
		return tempArr.length;
	}
}

const newQueue = new Queue();
console.log(newQueue.isEmpty());
newQueue.enqueue(21);
newQueue.enqueue(56);
newQueue.enqueue(95);
newQueue.enqueue(10);
newQueue.enqueue(60);
newQueue.enqueue(101);
console.log(newQueue.dequeue());
console.log(newQueue.front());
console.log(newQueue.size());
