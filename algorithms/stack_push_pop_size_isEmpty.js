class StackNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top and removed items are removed from the top / back.
 */
class Stack {
	/**
	 * The constructor is executed when instantiating a new Stack() to construct
	 * a new instance.
	 * @returns {Stack} This new Stack instance is returned without having to
	 *    explicitly write 'return' (implicit return).
	 */
	constructor() {
		this.head = null;
	}

	/**
	 * Adds a new given item to the top / back of this stack.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @param {any} item The new item to be added to the top / back.
	 * @returns {number} The new length of this stack.
	 */
	push(item) {
		if (this.isEmpty()) {
			this.head = new StackNode(item);
			return 1;
		}

		const newNode = new StackNode(item);
		newNode.next = this.head;
		this.head = newNode;
		return this.size();
	}

	/**
	 * Removes the top / last item from this stack.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @returns {any} The removed item or undefined if this stack was empty.
	 */
	pop() {
		if (this.isEmpty()) {
			return undefined;
		}
		const result = this.head;
		this.head = result.next;
		result.next = null;
		return result;
	}

	/**
	 * Retrieves the top / last item from this stack without removing it.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @returns {any} The top / last item of this stack.
	 */
	peek() {
		if (this.isEmpty()) return undefined;
		return this.head.data;
	}

	/**
	 * Returns whether or not this stack is empty.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @returns {boolean}
	 */
	isEmpty() {
		return this.head === null;
	}

	/**
	 * Returns the size of this stack.
	 * - Time: O(n) constant.
	 * - Space: O(n) constant.
	 * @returns {number} The length.
	 */
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

const stack = new Stack();
//console.log(stack.peek())
console.log(stack.push(5));
console.log(stack.push(4));
console.log(stack.push(23));
console.log(stack.size());
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
stack.print();
