import React, { useState, useEffect, useRef } from 'react';
import { renderHashTable } from '../../d3/d3Hash';
import '../../styles/DataStructures/HashPage.css';

function HashPage() {
  const [numElements, setNumElements] = useState(0);
  const [hashData, setHashData] = useState([]);
  const svgRef = useRef(null);

  // Generate random hash table data
  const generateHashData = (numElements) => {
    const data = Array.from({ length: numElements }, (_, i) => ({
      key: i + 1,
      value: Math.floor(Math.random() * 100) // Generate random values for the hash table
    }));
    setHashData(data);
  };

  useEffect(() => {
    if (numElements > 0) {
      renderHashTable(hashData, svgRef.current);
    }
  }, [hashData, numElements]);

  return (
    <div className="hash-container">
  <h1 className="hash-title">Hash Data Structure</h1>
  <p className="hash-content">
    A <b>hash table</b> is a data structure that stores key-value pairs for efficient data retrieval. It uses a <b>hash function</b> to compute an index into an array of buckets or slots, from which the desired value can be found. Hashing is widely used for its fast lookup, insertion, and deletion capabilities.
  </p>
  <h2>Visualizing Hash Tables</h2>
  <p>
    Below, you can interact with the hash table visualization. Add elements and observe how the hash table organizes the data.
  </p>
  <div className="hash-controls">
    <p>Enter the number of key-value pairs to populate the hash table:</p>
    <input
      type="number"
      value={numElements}
      onChange={(e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
          setNumElements(value);
          generateHashData(value);
        }
      }}
      placeholder="Enter number of elements"
      style={{ marginRight: "10px", padding: "5px" }}
    />
  </div>

  <svg ref={svgRef} width={800} height={400}></svg> {/* SVG for D3 rendering */}

  <h2>Characteristics of a Hash Table</h2>
  <ul>
    <li><b>Key-Value Pair Storage:</b> Data is stored as key-value pairs for easy retrieval.</li>
    <li><b>Hash Function:</b> Determines the index for each key in the array.</li>
    <li><b>Collisions:</b> When two keys hash to the same index, a resolution technique is required.</li>
  </ul>
  <img
    src="/images/HashTable.png"
    alt="Hash Table Structure"
    className="hash-image"
    style={{ maxWidth: 400 }}
  />

  <h2>Hash Table Representation</h2>
  <p>
    Below is an example implementation of a simple hash table:
  </p>
  <pre className="code">
{`class HashTable {
    constructor(size) {
        this.size = size;
        this.buckets = Array(size).fill(null).map(() => []);
    }

    hash(key) {
        let hashValue = 0;
        for (let char of key) {
            hashValue += char.charCodeAt(0);
        }
        return hashValue % this.size;
    }

    insert(key, value) {
        const index = this.hash(key);
        this.buckets[index].push([key, value]);
    }

    retrieve(key) {
        const index = this.hash(key);
        for (let [storedKey, storedValue] of this.buckets[index]) {
            if (storedKey === key) return storedValue;
        }
        return null;
    }
}`}
  </pre>

  <h2>Operations on a Hash Table</h2>
  <video width="70%" height="auto" controls>
    <source src="/videos/HashOperations.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <h3>1. Insertion</h3>
  <p>Add a key-value pair to the hash table:</p>
  <pre className="code">
{`function insert(hashTable, key, value) {
    hashTable.insert(key, value);
}`}
  </pre>

  <h3>2. Retrieval</h3>
  <p>Retrieve a value by its key:</p>
  <pre className="code">
{`function retrieve(hashTable, key) {
    return hashTable.retrieve(key);
}`}
  </pre>

  <h3>3. Deletion</h3>
  <p>Remove a key-value pair from the hash table:</p>
  <pre className="code">
{`function deleteKey(hashTable, key) {
    const index = hashTable.hash(key);
    hashTable.buckets[index] = hashTable.buckets[index].filter(([storedKey]) => storedKey !== key);
}`}
  </pre>

  <h2>Types of Hashing</h2>
  <ul>
    <li><b>Open Addressing:</b> Collisions are resolved by finding another open slot within the hash table.</li>
    <li><b>Chaining:</b> Collisions are resolved using linked lists at each index.</li>
    <li><b>Double Hashing:</b> A secondary hash function is used to resolve collisions.</li>
  </ul>

  <h2>Applications of Hash Tables</h2>
  <ul>
    <li>Implementing associative arrays or dictionaries.</li>
    <li>Database indexing for fast retrieval of records.</li>
    <li>Data caching (e.g., in-memory caching systems).</li>
    <li>Symbol tables in compilers and interpreters.</li>
  </ul>

  <h2>Advantages of Hash Tables</h2>
  <ul>
    <li>Fast lookup and retrieval of data.</li>
    <li>Efficient for large datasets.</li>
    <li>Simple implementation for average-case scenarios.</li>
  </ul>

  <h2>Disadvantages of Hash Tables</h2>
  <ul>
    <li>Collisions can degrade performance in the worst case.</li>
    <li>Hash functions need careful design to avoid clustering.</li>
    <li>Fixed-size arrays can limit capacity or waste memory.</li>
  </ul>

  
  
</div>

  );
}

export default HashPage;
