import React, { useState, useEffect, useRef } from 'react';
import { createLinkedList } from '../../d3/d3LinkedList'; // Import your D3 logic here
import '../../styles/DataStructures/LinkedListPage.css';

function LinkedListPage() {
  const [numNodes, setNumNodes] = useState(0);
  const svgRef = useRef(null);

  useEffect(() => {
    // Call the D3 function to create the linked list when numNodes changes
    createLinkedList(svgRef.current, numNodes);
  }, [numNodes]);

  return (
//     <div className="linkedlist-container">
//       <h1 className="linkedlist-title">Linked List Animation</h1>
//       <p className="linkedlist-content">
//         Enter the number of nodes to visualize a linked list.
//       </p>
//       <input
//         type="number"
//         value={numNodes}
//         onChange={(e) => setNumNodes(parseInt(e.target.value))}
//         placeholder="Enter number of nodes"
//         className="linkedlist-input"
//       />
//       <svg ref={svgRef}></svg> {/* This is where D3 will render the animation */}

//       {/* New Content Starts Here */}

//       <h2 className="linkedlist-subtitle">What is a Linked List?</h2>
//       <p className="linkedlist-description">
//         A <b>Linked List</b> is a linear data structure where each element is a separate object called a <b>node</b>. Each node contains two parts:
//       </p>
//       <ul className="linkedlist-list">
//         <li><b>Data:</b> The value stored in the node.</li>
//         <li><b>Next:</b> A reference to the next node in the sequence.</li>
//       </ul>
//       <p>
//         Unlike arrays, linked lists do not require contiguous memory locations, making them dynamic and flexible in size.
//       </p>

//       <h2 className="linkedlist-subtitle">Types of Linked Lists</h2>
//       <h3 className="linkedlist-subsubtitle">Singly Linked List</h3>
//       <p>
//         Each node points to the next node in the sequence. It allows traversal in only one direction.
//       </p>
//       <pre className="linkedlist-code">
//         {`class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//     }

//     // Methods will be added here
// }`}
//       </pre>

//       <h3 className="linkedlist-subsubtitle">Doubly Linked List</h3>
//       <p>
//         Each node has two references: one to the next node and one to the previous node. This allows traversal in both directions.
//       </p>
//       <pre className="linkedlist-code">
//         {`class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     // Methods will be added here
// }`}
//       </pre>

//       <h3 className="linkedlist-subsubtitle">Circular Linked List</h3>
//       <p>
//         The last node points back to the first node, forming a circle. This can be applied to both singly and doubly linked lists.
//       </p>
//       <pre className="linkedlist-code">
//         {`class CircularLinkedList {
//     constructor() {
//         this.head = null;
//     }

//     // Methods will be added here
// }`}
//       </pre>

//       <h2 className="linkedlist-subtitle">Operations on Linked Lists</h2>

//       <h3 className="linkedlist-subsubtitle">Insertion</h3>
//       <p>Adding a new node to the linked list. It can be done at various positions:</p>
//       <ul className="linkedlist-list">
//         <li><b>At the Beginning:</b> Insert a node before the current head.</li>
//         <li><b>At the End:</b> Insert a node after the current tail.</li>
//         <li><b>After a Specific Node:</b> Insert a node after a given node in the list.</li>
//       </ul>
//       <pre className="linkedlist-code">
//         {`// Inserting at the beginning of a Singly Linked List
// insertAtBeginning(data) {
//     const newNode = new Node(data);
//     newNode.next = this.head;
//     this.head = newNode;
// }`}
//       </pre>

//       <h3 className="linkedlist-subsubtitle">Deletion</h3>
//       <p>Removing a node from the linked list. It can be done from various positions:</p>
//       <ul className="linkedlist-list">
//         <li><b>At the Beginning:</b> Remove the head node.</li>
//         <li><b>At the End:</b> Remove the tail node.</li>
//         <li><b>A Specific Node:</b> Remove a node with a particular value.</li>
//       </ul>
//       <pre className="linkedlist-code">
//         {`// Deleting a node by value in a Singly Linked List
// deleteNode(data) {
//     if (this.head === null) return;

//     if (this.head.data === data) {
//         this.head = this.head.next;
//         return;
//     }

//     let current = this.head;
//     while (current.next && current.next.data !== data) {
//         current = current.next;
//     }

//     if (current.next) {
//         current.next = current.next.next;
//     }
// }`}
//       </pre>

//       <h3 className="linkedlist-subsubtitle">Traversal</h3>
//       <p>Accessing each node in the linked list to perform operations like searching or printing.</p>
//       <pre className="linkedlist-code">
//         {`// Traversing a Singly Linked List
// traverse() {
//     let current = this.head;
//     while (current) {
//         console.log(current.data);
//         current = current.next;
//     }
// }`}
//       </pre>

//       <h3 className="linkedlist-subsubtitle">Searching</h3>
//       <p>Finding a node with a specific value within the linked list.</p>
//       <pre className="linkedlist-code">
//         {`// Searching in a Singly Linked List
// search(data) {
//     let current = this.head;
//     while (current) {
//         if (current.data === data) return true;
//         current = current.next;
//     }
//     return false;
// }`}
//       </pre>

//       <h2 className="linkedlist-subtitle">Applications of Linked Lists</h2>
//       <ul className="linkedlist-list">
//         <li><b>Dynamic Memory Allocation:</b> Efficiently managing memory with varying sizes.</li>
//         <li><b>Implementing Stacks and Queues:</b> Linked lists serve as the underlying data structure.</li>
//         <li><b>Graph Adjacency Lists:</b> Representing graphs efficiently.</li>
//         <li><b>Music Player Playlists:</b> Managing songs in a playlist.</li>
//         <li><b>Browser History:</b> Navigating through visited web pages.</li>
//       </ul>

//       <h2 className="linkedlist-subtitle">Advantages and Disadvantages</h2>
//       <h3 className="linkedlist-subsubtitle">Advantages</h3>
//       <ul className="linkedlist-list">
//         <li><b>Dynamic Size:</b> Easily grows and shrinks as needed.</li>
//         <li><b>Efficient Insertions/Deletions:</b> Operations can be performed without reorganizing the entire structure.</li>
//       </ul>
//       <h3 className="linkedlist-subsubtitle">Disadvantages</h3>
//       <ul className="linkedlist-list">
//         <li><b>Memory Overhead:</b> Additional memory is required for storing pointers.</li>
//         <li><b>No Random Access:</b> Accessing elements requires sequential traversal.</li>
//       </ul>

//       <h2 className="linkedlist-subtitle">Example: Implementing a Singly Linked List in JavaScript</h2>
//       <pre className="linkedlist-code">
//         {`class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//     }

//     // Insert at the beginning
//     insertAtBeginning(data) {
//         const newNode = new Node(data);
//         newNode.next = this.head;
//         this.head = newNode;
//     }

//     // Insert at the end
//     insertAtEnd(data) {
//         const newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }
//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }

//     // Delete a node by value
//     deleteNode(data) {
//         if (!this.head) return;

//         if (this.head.data === data) {
//             this.head = this.head.next;
//             return;
//         }

//         let current = this.head;
//         while (current.next && current.next.data !== data) {
//             current = current.next;
//         }

//         if (current.next) {
//             current.next = current.next.next;
//         }
//     }

//     // Traverse the list
//     traverse() {
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// // Usage
// const list = new SinglyLinkedList();
// list.insertAtBeginning(10);
// list.insertAtEnd(20);
// list.insertAtEnd(30);
// list.traverse(); // Output: 10, 20, 30
// list.deleteNode(20);
// list.traverse(); // Output: 10, 30
// `}
//       </pre>

//       {/* New Content Ends Here */}
//     </div>
<div className="linkedlist-container">
  <h1 className="linkedlist-title">Linked List Visualization</h1>
  <p className="linkedlist-content">
    Enter the number of nodes to visualize a linked list.
  </p>
  <input
    type="number"
    value={numNodes}
    onChange={(e) => setNumNodes(parseInt(e.target.value))}
    placeholder="Enter number of nodes"
    className="linkedlist-input"
  />
  <svg ref={svgRef}></svg> {/* This is where D3 will render the animation */}

  <h2 className="linkedlist-subtitle">What is a Linked List?</h2>
  <p className="linkedlist-description">
    A <b>linked list</b> is a linear data structure where each element, called a <b>node</b>, contains two components:
  </p>
  <ul>
    <li>
      <b>Data:</b> The value stored in the node.
    </li>
    <li>
      <b>Pointer:</b> A reference to the next node in the sequence.
    </li>
  </ul>
  <p>
    Unlike arrays, linked lists allow dynamic memory allocation, making them more flexible but less efficient for random access.
  </p>

  <h2>Types of Linked Lists</h2>
  <img
        src="/images/LinkedListTypes.webp"
        alt="Types of Linked Lists"
        style={{height:300}}
      />
  <ul>
    <li>
      <b>Singly Linked List:</b> Each node points to the next node, and the last node points to <b>null</b>.
    </li>
    <li>
      <b>Doubly Linked List:</b> Each node contains pointers to both its <b>previous</b> and <b>next</b> nodes.
    </li>
    <li>
      <b>Circular Linked List:</b> The last node points back to the first node, forming a loop.
    </li>
  </ul>

  <h3>Node Structure</h3>
  <pre className="code">
{`class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // Pointer to the next node
    }
}`}
  </pre>

  <h2>Operations on Linked Lists</h2>
  <video width="70%" height="auto" controls>
    <source src="/videos/LinkedList.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <h3>1. Insertion</h3>
  <p>Adding elements to the linked list at various positions:</p>
  <ul>
    <li><b>At the beginning:</b></li>
    <pre className="code">
{`function insertAtBeginning(head, data) {
    const newNode = new Node(data);
    newNode.next = head;
    return newNode;
}`}
    </pre>
    <li><b>At the end:</b></li>
    <pre className="code">
{`function insertAtEnd(head, data) {
    const newNode = new Node(data);
    if (!head) return newNode;
    let current = head;
    while (current.next) {
        current = current.next;
    }
    current.next = newNode;
    return head;
}`}
    </pre>
  </ul>

  <h3>2. Deletion</h3>
  <p>Removing elements from the linked list:</p>
  <ul>
    <li><b>Delete from beginning:</b></li>
    <pre className="code">
{`function deleteFromBeginning(head) {
    if (!head) return null;
    return head.next;
}`}
    </pre>
    <li><b>Delete from end:</b></li>
    <pre className="code">
{`function deleteFromEnd(head) {
    if (!head || !head.next) return null;
    let current = head;
    while (current.next.next) {
        current = current.next;
    }
    current.next = null;
    return head;
}`}
    </pre>
  </ul>

  <h3>3. Traversal</h3>
  <p>Visiting each node sequentially:</p>
  <pre className="code">
{`function traverseLinkedList(head) {
    let current = head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}`}
  </pre>

  <h3>4. Search</h3>
  <p>Find a specific element in the linked list:</p>
  <pre className="code">
{`function searchLinkedList(head, value) {
    let current = head;
    while (current) {
        if (current.data === value) return true;
        current = current.next;
    }
    return false;
}`}
  </pre>

  <h2>Applications of Linked Lists</h2>
  <ul>
    <li>Implementation of stacks and queues.</li>
    <li>Dynamic memory management.</li>
    <li>Graph adjacency lists.</li>
    <li>Polynomial manipulations.</li>
  </ul>

  <h2>Advantages of Linked Lists</h2>
  <ul>
    <li>Dynamic memory allocation.</li>
    <li>Efficient insertions and deletions.</li>
  </ul>

  <h2>Disadvantages of Linked Lists</h2>
  <ul>
    <li>Increased memory usage due to pointers.</li>
    <li>Sequential access makes random access less efficient.</li>
  </ul>
</div>

  );
}

export default LinkedListPage;
