import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { drawStack, addNode, removeNode } from '../../d3/d3Stack';
import '../../styles/DataStructures/StackPage.css';

const StackPage = () => {
  const [stack, setStack] = useState([]); // Manages the stack
  const [message, setMessage] = useState(''); // Manages any messages (e.g. overflow or empty)
  const [inputValue, setInputValue] = useState(''); // Manages the value in the input field
  const svgRef = useRef(); // Reference to the SVG element

  // Draw the stack every time the stack state changes
  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);
      drawStack(stack, svg);
    }
  }, [stack]); // Re-render the stack on stack updates

  const handlePush = () => {
    const value = inputValue.trim(); // Get input value and remove extra spaces
    if (value) {
      // Add node to the stack
      const { stack: updatedStack, overflow } = addNode(stack, value);
      if (overflow) {
        setMessage("Stack overflow! Cannot push more elements.");
      } else {
        setStack(updatedStack); // Update stack state with new value
        setMessage(''); // Clear any error messages
        setInputValue(''); // Clear the input field
      }
    } else {
      setMessage("Please enter a value to push."); // Handle empty input
    }
  };

  const handlePop = () => {
    const { stack: updatedStack, empty } = removeNode(stack); // Remove the top element from stack
    if (empty) {
      setMessage("Stack is empty. Cannot pop elements.");
    } else {
      setStack(updatedStack); // Update stack state
      setMessage(''); // Clear any error messages
    }
  };

  return (
    <div className="stack-container">
      <h1 className="stack-title">Stack Data Structure</h1>
      
      <p className="stack-content">
    A <b>stack</b> is a linear data structure that follows the <b>Last In, First Out (LIFO)</b> principle. This means that the last element added to the stack is the first one to be removed. Imagine a stack of plates where you can only remove the top plate first!
  </p>
  <h2>Visualizing Stacks</h2>
  <p>
    The D3 visualization below represents the dynamic nature of a stack. Add elements to see the stack grow, and remove them to see the stack shrink.
  </p>
  <svg ref={svgRef} width={600} height={400}></svg> {/* SVG for D3 rendering */}
  <div className="stack-controls">
    <input
      style={{ backgroundColor: "white" }}
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Enter value to push"
    />
    <button onClick={handlePush}>Push</button>
    <button onClick={handlePop}>Pop</button>
  </div>
  {message && <p className="stack-message">{message}</p>}

  <h2 className="stack-subtitle">Characteristics of a Stack</h2>
  <ul>
    <li><b>LIFO:</b> Last In, First Out order for operations.</li>
    <li><b>Push:</b> Add an element to the top of the stack.</li>
    <li><b>Pop:</b> Remove the topmost element.</li>
    <li><b>Peek:</b> View the top element without removing it.</li>
  </ul>
  <img
    src="/images/Stack.png"
    alt="Stack Structure"
    className="stack-image"
    style={{ maxWidth: 400 }}
  />

  <h2>Stack Representation</h2>
  <p>
    A stack can be implemented using arrays or linked lists. Here's the structure for a stack using an array:
  </p>
  <pre className="code">
{`class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}`}
  </pre>

  <h2>Operations on a Stack</h2>
  <video width="70%" height="auto" controls>
    <source src="/videos/StackOperations.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <h3>1. Push</h3>
  <p>Add an element to the stack:</p>
  <pre className="code">
{`function push(stack, value) {
    stack.push(value);
}`}
  </pre>
  

  <h3>2. Pop</h3>
  <p>Remove the top element from the stack:</p>
  <pre className="code">
{`function pop(stack) {
    if (stack.isEmpty()) {
        console.log("Stack is empty");
        return;
    }
    return stack.pop();
}`}
  </pre>
  

  <h3>3. Peek</h3>
  <p>View the top element without removing it:</p>
  <pre className="code">
{`function peek(stack) {
    if (stack.isEmpty()) {
        console.log("Stack is empty");
        return null;
    }
    return stack.peek();
}`}
  </pre>

  <h3>4. Check if Empty</h3>
  <p>Determine if the stack is empty:</p>
  <pre className="code">
{`function isEmpty(stack) {
    return stack.isEmpty();
}`}
  </pre>

  <h2>Applications of Stacks</h2>
  <ul>
    <li>Expression evaluation and conversion (e.g., infix to postfix).</li>
    <li>Backtracking (e.g., navigating browser history).</li>
    <li>Function call management in programming (call stack).</li>
    <li>Undo operations in text editors.</li>
  </ul>

  <h2>Advantages of Stacks</h2>
  <ul>
    <li>Simple and efficient for managing function calls and LIFO operations.</li>
    <li>Useful for algorithmic problems involving recursion.</li>
  </ul>

  <h2>Disadvantages of Stacks</h2>
  <ul>
    <li>Fixed size (for array-based implementation).</li>
    <li>Limited access to elements (only top accessible).</li>
  </ul>

  
    </div>
  );
};

export default StackPage;
