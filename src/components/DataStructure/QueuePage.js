import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { drawQueue, enqueue, dequeue } from '../../d3/d3Queue';
import '../../styles/DataStructures/QueuePage.css';

const QueuePage = () => {
  const [queue, setQueue] = useState([]); // Manages the queue
  const [message, setMessage] = useState(''); // Manages any messages (e.g. overflow or empty)
  const [inputValue, setInputValue] = useState(''); // Manages the value in the input field
  const svgRef = useRef(); // Reference to the SVG element

  // Draw the queue every time the queue state changes
  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);
      drawQueue(queue, svg);
    }
  }, [queue]); // Re-render the queue on queue updates

  const handleEnqueue = () => {
    const value = inputValue.trim(); // Get input value and remove extra spaces
    if (value) {
      // Enqueue the value to the queue
      const { queue: updatedQueue, overflow } = enqueue(queue, value);
      if (overflow) {
        setMessage("Queue overflow! Cannot add more elements.");
      } else {
        setQueue(updatedQueue); // Update queue state with new value
        setMessage(''); // Clear any error messages
        setInputValue(''); // Clear the input field
      }
    } else {
      setMessage("Please enter a value to enqueue."); // Handle empty input
    }
  };

  const handleDequeue = () => {
    const { queue: updatedQueue, empty } = dequeue(queue); // Dequeue the value from the queue
    if (empty) {
      setMessage("Queue is empty. Cannot remove elements.");
    } else {
      setQueue(updatedQueue); // Update queue state
      setMessage(''); // Clear any error messages
    }
  };

  return (
    <div className="queue-container">
  <h1 className="queue-title">Queue Data Structure</h1>
  <p className="queue-content">
    A <b>queue</b> is a linear data structure that follows the <b>First In, First Out (FIFO)</b> principle. This means that the first element added to the queue is the first one to be removed. Imagine a queue of people waiting at a ticket counter where the person who arrives first is served first!
  </p>
  <h2>Visualizing Queues</h2>
  <p>
    The D3 visualization below represents the dynamic nature of a queue. Add elements to see the queue grow, and remove them to see the queue shrink.
  </p>
  <svg ref={svgRef} width={600} height={200}></svg> {/* SVG for D3 rendering */}
  <div className="queue-controls">
    <input
      style={{ backgroundColor: "white" }}
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Enter value to enqueue"
    />
    <button onClick={handleEnqueue}>Enqueue</button>
    <button onClick={handleDequeue}>Dequeue</button>
  </div>
  {message && <p className="queue-message">{message}</p>}

  <h2 className="queue-subtitle">Characteristics of a Queue</h2>
  <ul>
    <li><b>FIFO:</b> First In, First Out order for operations.</li>
    <li><b>Enqueue:</b> Add an element to the end of the queue.</li>
    <li><b>Dequeue:</b> Remove an element from the front of the queue.</li>
    <li><b>Peek:</b> View the front element without removing it.</li>
  </ul>
  <img
    src="/images/Queue.png"
    alt="Queue Structure"
    className="queue-image"
    style={{ maxWidth: 400 }}
  />

  <h2>Queue Representation</h2>
  <p>
    A queue can be implemented using arrays or linked lists. Here's the structure for a queue using an array:
  </p>
  <pre className="code">
{`class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }
    peek() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}`}
  </pre>

  <h2>Operations on a Queue</h2>
  <video width="70%" height="auto" controls>
    <source src="/videos/Queue.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <h3>1. Enqueue</h3>
  <p>Add an element to the end of the queue:</p>
  <pre className="code">
{`function enqueue(queue, value) {
    queue.enqueue(value);
}`}
  </pre>

  <h3>2. Dequeue</h3>
  <p>Remove the front element from the queue:</p>
  <pre className="code">
{`function dequeue(queue) {
    if (queue.isEmpty()) {
        console.log("Queue is empty");
        return;
    }
    return queue.dequeue();
}`}
  </pre>

  <h3>3. Peek</h3>
  <p>View the front element without removing it:</p>
  <pre className="code">
{`function peek(queue) {
    if (queue.isEmpty()) {
        console.log("Queue is empty");
        return null;
    }
    return queue.peek();
}`}
  </pre>

  <h3>4. Check if Empty</h3>
  <p>Determine if the queue is empty:</p>
  <pre className="code">
{`function isEmpty(queue) {
    return queue.isEmpty();
}`}
  </pre>

  <h2>Applications of Queues</h2>
  <ul>
    <li>Managing requests in systems (e.g., printer queue).</li>
    <li>Breadth-First Search (BFS) in graphs and trees.</li>
    <li>Data buffering (e.g., IO Buffers, packet queues).</li>
    <li>Task scheduling in operating systems.</li>
  </ul>

  <h2>Advantages of Queues</h2>
  <ul>
    <li>Efficient for scenarios requiring FIFO order.</li>
    <li>Useful for managing shared resources (e.g., CPU scheduling).</li>
  </ul>

  <h2>Disadvantages of Queues</h2>
  <ul>
    <li>Fixed size (for array-based implementation).</li>
    <li>Sequential access makes random access less efficient.</li>
  </ul>

  
  {/* D3 will dynamically render the queue */}
</div>

  );
};

export default QueuePage;
