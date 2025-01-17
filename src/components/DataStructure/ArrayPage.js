import React, { useState, useRef } from 'react';
import { renderArray } from '../../d3/d3Array';
import '../../styles/DataStructures/ArrayPage.css';

function ArrayPage() {
  const [numElements, setNumElements] = useState(0);
  const svgRef = useRef(null);

  const generateArrayData = (numElements) => {
    const data = Array.from({ length: numElements }, () => Math.floor(Math.random() * 100));
    renderArray(data, svgRef.current);
  };

  return (
    <div className="page-container">
      <section className="header-section">
        <h1 className="title">Array Data Structure</h1>
        <p className="subtitle">Explore arrays with visualization, examples, and real-world insights.</p>
      </section>

      <section className="visualization-section">
        <h2 className="section-title">Visualize an Array</h2>
        <p className="section-subtitle">Enter the number of elements to create and explore an array.</p>
        <input
          type="number"
          className="input-box"
          value={numElements}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (!isNaN(value)) {
              setNumElements(value);
              generateArrayData(value);
            }
          }}
          placeholder="Number of elements"
        />
        <div ref={svgRef} className="svg-container"></div>
      </section>

      <section className="content-section">
        <h2 className="section-title">What is an Array?</h2>
        <p className="textcontent">
          An array is a collection of elements stored at contiguous memory locations. Arrays are fundamental in computer science and enable efficient data storage and manipulation.
        </p>
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240410101419/Getting-Started-with-Array-Data-Structure.webp"
          alt="Array in memory"
          className="content-image"
        />
      </section>

      <section className="content-section">
        <h2 className="section-title">Key Operations</h2>
        <ul className="info-list">
          <li>
            <strong>Traversal:</strong> Accessing each element sequentially.
            <pre className='code'>
                {`int a[] = {1,2,3,4,5};
for (let i = 0; i < a.length; i++) {
  System.out.println(a[i]);
}`}
</pre>
<pre className="code">{`Output:
1
2
3
4
5`}
              </pre>
          </li>
          <li>
  <strong>Insertion:</strong> Adding an element at a specific index in an array.
  <pre className="code">
    {`int[] a = {1, 2, 3, 4, 5};
int position = 2; // Index where we want to insert
int newElement = 10;

// Create a new array to accommodate the new element
int[] newArray = new int[a.length + 1];

for (int i = 0, j = 0; i < newArray.length; i++) {
  if (i == position) {
    newArray[i] = newElement; // Insert new element
  } else {
    newArray[i] = a[j++]; // Copy remaining elements
  }
}

System.out.println("Updated Array:");
for (int num : newArray) {
  System.out.println(num);
}`}
</pre>
<pre className="code">{`Output:
1
2
10
3
4
5`}
  </pre>
</li>
<li>
  <strong>Deletion:</strong> Removing an element at a specific index in an array.
  <pre className="code">
    {`int[] a = {1, 2, 3, 4, 5};
int position = 3; // Index to delete

// Create a new array with one less element
int[] newArray = new int[a.length - 1];

for (int i = 0, j = 0; i < a.length; i++) {
  if (i != position) {
    newArray[j++] = a[i]; // Copy elements except the one to be deleted
  }
}

System.out.println("Updated Array after Deletion:");
for (int num : newArray) {
  System.out.println(num);
}`}
</pre>
<pre className="code">{`Output:
1
2
3
5`}
  </pre>
</li>

          <li>
  <strong>Linear Search:</strong> Searching for an element by checking each element sequentially.
  <pre className="code">
    {`int[] a = {1, 2, 3, 4, 5};
int target = 3;
boolean found = false;

for (int i = 0; i < a.length; i++) {
  if (a[i] == target) {
    found = true;
    System.out.println("Element " + target + " found at index " + i);
    break;
  }
}

if (!found) {
  System.out.println("Element " + target + " not found.");
}`}
</pre>
<pre className="code">{`Output:
Element 3 found at index 2`}
  </pre>
</li>

        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Real-World Applications</h2>
        <p className="textcontent">
          Arrays are versatile and used across multiple domains, such as:
        </p>
        <ul className="info-list">
          <li>Implementing matrices for image processing.</li>
          <li>Storing and sorting data for algorithms like QuickSort.</li>
          <li>Serving as foundational structures for more complex data types.</li>
        </ul>
        <video width="80%" height="auto" controls>
          <source
            src="/videos/Array.mp4"
            type='video/mp4'
          />
        </video>
      </section>

      <section className="content-section">
        <p className="textcontent">
          Arrays form the backbone of data structures and algorithms, making them essential for every programmer.
        </p>
      </section>
    </div>
  );
}

export default ArrayPage;
