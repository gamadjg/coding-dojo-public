class BSTNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	/**
	 * Inserts a new node with the given newVal in the right place to preserver
	 * the order of this tree.
	 * - Time: O(?).
	 * - Space: O(?).
	 * @param {number} newVal The data to be added to a new node.
	 * @returns {BinarySearchTree} This tree.
	 */
	insert(newVal) {
		if (!this.root) {
			const newNode = new BSTNode(newVal);
			this.root = newNode;
			return this;
		}
		let stack = [this.root];
		let current = this.root;
		while (stack.length > 0) {
			current = stack.pop();
			if (newVal < current.data) {
				if (current.left) {
					stack.push(current.left);
				} else {
					const newNode = new BSTNode(newVal);
					current.left = newNode;
				}
			}
			if (newVal >= current.data) {
				if (current.right) {
					stack.push(current.right);
				} else {
					const newNode = new BSTNode(newVal);
					current.right = newNode;
				}
			}
		}
		return this;
	}

	/**
	 * Inserts a new node with the given newVal in the right place to preserver
	 * the order of this tree.
	 * - Time: O(?).
	 * - Space: O(?).
	 * @param {number} newVal The data to be added to a new node.
	 * @param {Node} curr The node that is currently accessed from the tree as
	 *    the tree is being traversed.
	 * @returns {BinarySearchTree} This tree.
	 */
	insertRecursive(newVal, curr = this.root) {
		if (curr === null) {
			const newNode = new BSTNode(newVal);
			curr = newNode;
			console.log(this);
			console.log(curr);
			return this;
		}
		if (newVal < curr.data) {
			console.log("LESS THAN");
			return this.insertRecursive(newVal, (curr = curr.left));
		} else {
			return this.insertRecursive(newVal, (curr = curr.right));
		}
	}
	// Logs this tree horizontally with the root on the left.
	print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
		if (!node) {
			return;
		}

		spaceCnt += spaceIncr;
		this.print(node.right, spaceCnt);

		console.log(
			" ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
				`${node.data}`
		);

		this.print(node.left, spaceCnt);
	}
}

const emptyTree = new BinarySearchTree();

const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
          root
          10
        /   \
      5     15
  */
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
          root
          10
        /   \
      5     15
    / \    / \
  2   6  13  
  */
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

/* fullTree
                      root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
  */

emptyTree.insert(24);
threeLevelTree.insert(17);
// twoLevelTree.insert(3);
console.log(twoLevelTree.insertRecursive(3));
// threeLevelTree.insert(1);
twoLevelTree.print();
// threeLevelTree.print();
// emptyTree.print();
