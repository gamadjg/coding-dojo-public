
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
  
    isEmpty() {
      return this.root === null;
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
  
    insertRecursive(newVal, curr = this.root) {
      if (this.isEmpty()) {
        this.root = new BSTNode(newVal);
        return this;
      }
  
      if (newVal > curr.data) {
        if (curr.right === null) {
          curr.right = new BSTNode(newVal);
          return this;
        }
        return this.insertRecursive(newVal, curr.right);
      }
  
      if (curr.left === null) {
        curr.left = new BSTNode(newVal);
        return this;
      }
      return this.insertRecursive(newVal, curr.left);
    }
  
    insertMany(arr) {
      for (const i of arr) {
        this.insertRecursive(i);
      }
    }
  
  
    /**
     * Recursively counts the total number of nodes in this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during the traversal of this tree.
     * @returns {number} The total number of nodes.
     */
    size(node = this.root) {
      if (node == null) {
        return 0;
      }
      //     (1+1+1+1)                        (1+1+1+1+1)
      return this.size(node.left) + 1 + this.size(node.right)
    }
  
  
    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree.
     */
    height(node = this.root) {
      if (node == null) {
        return 0;
      }
      return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
  
    /**
     * Determines if this tree is a full tree. A full tree is a tree where every
     * node has both a left and a right except for the leaf nodes (last nodes)
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {boolean} Indicates if this tree is full.
     */
    isFull(node = this.root) {
      /*
      11 -> keep going
      10 -> false
      01 -> false
      00 -> true
      */
      // if empty tree
      if (node == null) {
          return 0;
        }
      // if single node
      if(node.left == null && node.right == null) {
        return true;
      }
      // if left & right subtrees are full
      if(node.left !== null && node.right !== null){
        return (this.isFull(node.left) && this.isFull(node.right));
      }
      // if nothing works then false
      return false;
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
  
  
  
  /* threeLevelTree 
          root
          10
        /   \
      5     15
    / \    / \
  2   6  13  
  */
  let threeLevelTree = new BinarySearchTree();
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
  let fullTree = new BinarySearchTree();
  fullTree.insertMany([25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90])
  fullTree.print();
  // console.log(fullTree.size());
  // console.log(threeLevelTree.size());
  
  // console.log(threeLevelTree.size()); // 6
  // console.log(fullTree.size()); // 15
  
  // console.log(threeLevelTree.height()); // 3
  // console.log(fullTree.height()); // 4
  
  console.log(threeLevelTree.isFull()); // false
  console.log(fullTree.isFull()); // true