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

	inorder(node = this.root) {
		if (node) {
			this.inorder(node.left);
			console.log(node.data);
			this.inorder(node.right);
		}
	}

	preorder(node = this.root) {
		if (node) {
			console.log(node.data);
			this.preorder(node.left);
			this.preorder(node.right);
		}
	}

	postorder(node = this.root) {
		if (node) {
			this.postorder(node.left);
			this.postorder(node.right);
			console.log(node.data);
		}
	}

	/**
	 * DFS Inorder: (Left, CurrNode, Right)
	 * Converts this BST into an array following Depth First Search inorder.
	 * See debugger call stack to help understand the recursion.
	 * Example on the fullTree var:
	 * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
	 * @param {Node} node The current node during the traversal of this tree.
	 * @param {Array<number>} vals The data that has been visited so far.
	 * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
	 */
	toArrInorder(node = this.root, vals = []) {
		if (node) {
			this.toArrInorder(node.left, vals);
			vals.push(node.data);
			this.toArrInorder(node.right, vals);
		} else {
			return;
		}
		return vals;
	}

	/**
	 * DFS Preorder: (CurrNode, Left, Right)
	 * Converts this BST into an array following Depth First Search preorder.
	 * Example on the fullTree var:
	 * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
	 * @param {Node} node The current node during the traversal of this tree.
	 * @param {Array<number>} vals The data that has been visited so far.
	 * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
	 */
	toArrPreorder(node = this.root, vals = []) {
		if (node === null) {
			return vals;
		}
		vals.push(node.data);
		if (node.left !== null) {
			this.toArrPreorder(node.left, vals);
		}
		if (node.right !== null) {
			this.toArrPreorder(node.right, vals);
		}
		return vals;
	}

	/**
	 * DFS Postorder (Left, Right, CurrNode)
	 * Converts this BST into an array following Depth First Search postorder.
	 * Example on the fullTree var:
	 * [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
	 * @param {Node} node The current node during the traversal of this tree.
	 * @param {Array<number>} vals The data that has been visited so far.
	 * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
	 */
	toArrPostorder(node = this.root, vals = []) {
		if (node) {
			this.toArrPostorder(node.left, vals);
			this.toArrPostorder(node.right, vals);
			vals.push(node.data);
		} else {
			return;
		}
		return vals;
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

const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

/* fullTree
                      root
                  <-- 10 -->
                /            \
              5             15
            /    \         /    \
           2      6      13    
  */
threeLevelTree.print();
console.log("---- in order (Left Root Right) ----");
console.log(threeLevelTree.toArrInorder());
console.log("---- pre order (Root Left Right) ----");
console.log(threeLevelTree.toArrPreorder());
console.log("---- post order (Left Right Root)----");
console.log(threeLevelTree.toArrPostorder());
