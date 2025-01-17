import React, { useState, useEffect, useRef } from 'react';
import { createTree } from '../../d3/d3Tree';  // Import the D3 tree logic
import '../../styles/DataStructures/TreePage.css';

function TreePage() {
  const [numNodes, setNumNodes] = useState(0);  // Default to 0 nodes
  const svgRef = useRef(null);

  useEffect(() => {
    // Call the D3 function to create the tree whenever numNodes changes
    createTree(svgRef.current, numNodes);
  }, [numNodes]);

  const handleInputChange = (e) => {
    const value = e.target.value;

    // If input is empty, set numNodes to 0, otherwise parse the number
    setNumNodes(value === '' ? 0 : parseInt(value));
  };

  return (
    <div className="tree-container">
  <h1 className="tree-title">Tree Data Structure</h1>
  <p className="tree-content">
    A <b>tree</b> is a non-linear data structure that represents data in a hierarchical format. It consists of nodes connected by edges. A tree has the following properties:
  </p>
  <ul>
    <li><b>Root:</b> The top node in the tree.</li>
    <li><b>Parent and Child:</b> Each node may have a parent and can have multiple children.</li>
    <li><b>Leaf Node:</b> A node with no children.</li>
    <li><b>Height:</b> The longest path from the root to a leaf node.</li>
  </ul>
  <img
    src="/images/TreeStructure.webp"
    alt="Tree Structure"
    className="tree-image"
    style={{ maxWidth: 500 }}
  />

  <h2>Characteristics of a Tree</h2>
  <ul>
    <li>Has a unique root node.</li>
    <li>Each child node has exactly one parent (except the root).</li>
    <li>No cycles (it is an acyclic graph).</li>
  </ul>

  <h2>Types of Trees</h2>
  <h3>1. Binary Tree</h3>
  <p>
    A tree in which each node has at most two children, referred to as the left child and right child.
  </p>
  <img
    src="/images/BinaryTree.webp"
    alt="Binary Tree"
    className="tree-image"
    style={{ maxWidth: 400 }}
  />

  <h3>2. Binary Search Tree (BST)</h3>
  <p>
    A binary tree with the following properties:
  </p>
  <ul>
    <li>Left subtree contains only nodes with values less than the parent node.</li>
    <li>Right subtree contains only nodes with values greater than the parent node.</li>
  </ul>
  <img
    src="/images/BinarySearchTree.png"
    alt="Binary Search Tree"
    className="tree-image"
    style={{ maxWidth: 400 }}
  />

  <h3>3. AVL Tree</h3>
  <p>
    A self-balancing binary search tree where the difference between the heights of the left and right subtrees cannot exceed 1.
  </p>
  <img
    src="/images/AVLTree.png"
    alt="AVL Tree"
    className="tree-image"
    style={{ maxWidth: 400 }}
  />

  <h3>4. B-Tree</h3>
  <p>
    A self-balancing search tree where nodes can have multiple children. It is optimized for systems that read and write large blocks of data.
  </p>
  <img
    src="/images/BTree.jpg"
    alt="B-Tree"
    className="tree-image"
    style={{ maxWidth: 400 }}
  />

  <h3>5. N-ary Tree</h3>
  <p>
    A tree in which nodes can have up to N children.
  </p>

  <h3>6. Heap</h3>
  <p>
    A special tree-based data structure that satisfies the heap property:
  </p>
  <ul>
    <li><b>Max-Heap:</b> The parent node is always greater than or equal to its children.</li>
    <li><b>Min-Heap:</b> The parent node is always smaller than or equal to its children.</li>
  </ul>
  <img
    src="/images/Heap.png"
    alt="Heap"
    className="tree-image"
    style={{ maxWidth: 400 }}
  />

  <h2>Tree Operations</h2>
  <video width="70%" height="auto" controls>
    <source src="/videos/TreeOperations.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <h3>1. Insertion</h3>
  <p>Adding elements to the tree:</p>
  <pre className="code">
{`function insert(root, value) {
    if (!root) return new Node(value);
    if (value < root.data) root.left = insert(root.left, value);
    else root.right = insert(root.right, value);
    return root;
}`}
  </pre>

  <h3>2. Deletion</h3>
  <p>Removing elements from the tree:</p>
  <pre className="code">
{`function deleteNode(root, value) {
    if (!root) return null;
    if (value < root.data) root.left = deleteNode(root.left, value);
    else if (value > root.data) root.right = deleteNode(root.right, value);
    else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        const minValue = findMin(root.right);
        root.data = minValue;
        root.right = deleteNode(root.right, minValue);
    }
    return root;
}`}
  </pre>

  <h2>Tree Traversals</h2>
<ul>
  <li><b>In-order Traversal:</b> Left → Root → Right</li>
  <li><b>Pre-order Traversal:</b> Root → Left → Right</li>
  <li><b>Post-order Traversal:</b> Left → Right → Root</li>
  <li><b>Level-order Traversal:</b> Traverse level by level.</li>
</ul>

<h3>1. In-order Traversal</h3>
<p>
  Visit the left subtree, then the root node, and finally the right subtree.
</p>
<pre className="code">
{`function inorderTraversal(node) {
    if (node) {
        inorderTraversal(node.left); // Visit left subtree
        console.log(node.data);     // Visit root
        inorderTraversal(node.right); // Visit right subtree
    }
}`}
</pre>

<h3>2. Pre-order Traversal</h3>
<p>
  Visit the root node first, then the left subtree, and finally the right subtree.
</p>
<pre className="code">
{`function preorderTraversal(node) {
    if (node) {
        console.log(node.data);     // Visit root
        preorderTraversal(node.left); // Visit left subtree
        preorderTraversal(node.right); // Visit right subtree
    }
}`}
</pre>

<h3>3. Post-order Traversal</h3>
<p>
  Visit the left subtree first, then the right subtree, and finally the root node.
</p>
<pre className="code">
{`function postorderTraversal(node) {
    if (node) {
        postorderTraversal(node.left); // Visit left subtree
        postorderTraversal(node.right); // Visit right subtree
        console.log(node.data);        // Visit root
    }
}`}
</pre>

<h3>4. Level-order Traversal</h3>
<p>
  Traverse the tree level by level using a queue.
</p>
<pre className="code">
{`function levelOrderTraversal(root) {
    if (!root) return;

    const queue = [root]; // Initialize queue with the root node

    while (queue.length > 0) {
        const current = queue.shift(); // Dequeue the front node
        console.log(current.data);     // Visit the node

        if (current.left) queue.push(current.left); // Enqueue left child
        if (current.right) queue.push(current.right); // Enqueue right child
    }
}`}
</pre>


  <h2>Applications of Trees</h2>
  <ul>
    <li>Hierarchical data storage (e.g., file systems).</li>
    <li>Binary Search Trees for searching and sorting.</li>
    <li>Trie for efficient text search operations.</li>
    <li>Heap for implementing priority queues.</li>
    <li>Decision trees in machine learning.</li>
  </ul>

  <h2>Advantages of Trees</h2>
  <ul>
    <li>Efficient searching and sorting (e.g., BST).</li>
    <li>Dynamic data storage structure.</li>
    <li>Flexible for representing hierarchical data.</li>
  </ul>

  <h2>Disadvantages of Trees</h2>
  <ul>
    <li>Complex implementation compared to linear data structures.</li>
    <li>Requires balancing for optimized operations (e.g., AVL, B-Trees).</li>
  </ul>

  <h2>Tree Visualization</h2>
  <p>
    Enter the number of nodes to visualize a complete binary tree. The tree will be rendered dynamically using D3.js:
  </p>
  <input
    type="number"
    value={numNodes}
    min="0"
    onChange={handleInputChange}
    placeholder="Enter number of nodes"
    className="tree-input"
  />
  <svg ref={svgRef}></svg>
</div>

  );
}

export default TreePage;
