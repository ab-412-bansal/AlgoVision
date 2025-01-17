import React, { useState } from 'react';
import '../../styles/DataStructures/HeapPage.css';

const HeapPage = () => {
    return (
      <div className="heap-container">
      <h1 className="heap-title">Heap Data Structure</h1>
      <p className="heap-content">
        A <b>Heap</b> is a special tree-based data structure that satisfies the 
        <b>Heap Property</b>. The heap is commonly used to implement priority queues 
        and is an efficient structure for managing sorted data dynamically.
      </p>
    
      <h2>Heap Property</h2>
      <ul>
        <li><b>Max-Heap:</b> The value of the parent node is greater than or equal to the values of its children.</li>
        <li><b>Min-Heap:</b> The value of the parent node is smaller than or equal to the values of its children.</li>
      </ul>
      <img
        src="/images/Heap.gif"
        alt="Heap Property Illustration"
        className="heap-image"
        style={{ maxWidth: 500 }}
      />
    
      <h2>Types of Heaps</h2>
      <h3>1. Max-Heap</h3>
      <p>
        A binary heap where the value of each node is greater than or equal to the values of its children. The root node contains the maximum value.
      </p>
      <img
        src="/images/MaxHeap.png"
        alt="Max-Heap"
        className="heap-image"
        style={{ maxWidth: 400 }}
      />
    
      <h3>2. Min-Heap</h3>
      <p>
        A binary heap where the value of each node is smaller than or equal to the values of its children. The root node contains the minimum value.
      </p>
      <img
        src="/images/MinHeap.png"
        alt="Min-Heap"
        className="heap-image"
        style={{ maxWidth: 400 }}
      />
    
      <h2>Heap Operations</h2>
      <p>
        Common operations on heaps include insertion, deletion, and heapify. These operations maintain the heap property.
      </p>
    
      <h3>1. Insertion</h3>
      <p>
        To insert an element into a heap:
      </p>
      <ul>
        <li>Add the element at the end of the heap.</li>
        <li>Restore the heap property by comparing the added element with its parent (heapify up).</li>
      </ul>
      <pre className="code">
    {`function insert(heap, value) {
        heap.push(value); // Add the element at the end
        let index = heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (heap[parentIndex] >= heap[index]) break;
            [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]]; // Swap
            index = parentIndex;
        }
    }`}
      </pre>
    
      <h3>2. Deletion</h3>
      <p>
        To delete the root element:
      </p>
      <ul>
        <li>Replace the root with the last element in the heap.</li>
        <li>Restore the heap property by comparing the new root with its children (heapify down).</li>
      </ul>
      <pre className="code">
    {`function deleteRoot(heap) {
        if (heap.length === 0) return null;
        const root = heap[0];
        heap[0] = heap.pop(); // Replace root with last element
        let index = 0;
    
        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let largest = index;
    
            if (leftChild < heap.length && heap[leftChild] > heap[largest]) {
                largest = leftChild;
            }
            if (rightChild < heap.length && heap[rightChild] > heap[largest]) {
                largest = rightChild;
            }
            if (largest === index) break;
    
            [heap[index], heap[largest]] = [heap[largest], heap[index]]; // Swap
            index = largest;
        }
        return root;
    }`}
      </pre>
    
      <h3>3. Heapify</h3>
      <p>
        Heapify is the process of converting an array into a valid heap. It ensures that the heap property is maintained for all nodes.
      </p>
      <video width="70%" height="auto" controls>
        <source src="/videos/Heapify.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <pre className="code">
    {`function heapify(array, n, index) {
        let largest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;
    
        if (left < n && array[left] > array[largest]) {
            largest = left;
        }
        if (right < n && array[right] > array[largest]) {
            largest = right;
        }
        if (largest !== index) {
            [array[index], array[largest]] = [array[largest], array[index]];
            heapify(array, n, largest);
        }
    }`}
      </pre>
    
      <h2>Heap Applications</h2>
      <ul>
        <li><b>Priority Queue:</b> Heaps are used to implement priority queues where elements are served based on priority.</li>
        <li><b>Heap Sort:</b> An efficient sorting algorithm that uses heapify to sort elements.</li>
        <li><b>Graph Algorithms:</b> Used in Dijkstra's and Prim's algorithms to find the shortest path and minimum spanning tree.</li>
        <li><b>Median Maintenance:</b> Maintaining the median in a dynamic data stream using two heaps.</li>
      </ul>
    
      <h2>Heap Sort Visualization</h2>
      <p>
        Watch this video to understand heap operations visually:
      </p>
      <video width="70%" height="auto" controls>
        <source src="/videos/HeapSort.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
      <h2>Advantages of Heaps</h2>
      <ul>
        <li>Efficient for priority-based operations.</li>
        <li>Supports dynamic data changes.</li>
        <li>Logarithmic time complexity for insertion and deletion.</li>
      </ul>
    
      <h2>Disadvantages of Heaps</h2>
      <ul>
        <li>Heapify operations can be complex to implement correctly.</li>
        <li>Not as memory-efficient as arrays for static data storage.</li>
      </ul>
    </div>
    
    );
};

export default HeapPage;
