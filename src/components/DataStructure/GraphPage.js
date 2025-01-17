import React, { useState, useEffect, useRef } from 'react';
import { generateGraphData, renderGraph } from '../../d3/d3Graph';
import '../../styles/DataStructures/GraphPage.css';

function GraphPage() {
  const [numVertices, setNumVertices] = useState(0);
  const [numEdges, setNumEdges] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const svgRef = useRef(null);

  useEffect(() => {
    const { nodes, links } = generateGraphData(numVertices, numEdges, setErrorMessage);
    if (!nodes.length && !links.length) return;  // Exit if there's an error
    renderGraph(svgRef, nodes, links);
  }, [numVertices, numEdges]);

  return (
    <div className="graph-container">
  <h1 className="graph-title">Graph Data Structure</h1>
  <p className="graph-content">
    A <b>graph</b> is a collection of nodes (also called vertices) and edges that connect pairs of nodes. Graphs can represent a wide variety of systems, such as social networks, communication systems, and more. They are widely used to model relationships between objects in many real-world applications.
  </p>
  <h2>Visualizing Graphs</h2>
  <p>
    The D3 visualization below represents the dynamic nature of a Graphs. Add nodes and vertices to see the Graph expand.
    </p>
  <input
    type="number"
    value={numVertices}
    onChange={(e) => setNumVertices(Math.max(0, parseInt(e.target.value) || 0))}
    placeholder="Number of vertices"
    className="graph-input"
  />
  
  <input
    type="number"
    value={numEdges}
    onChange={(e) => setNumEdges(Math.max(0, parseInt(e.target.value) || 0))}
    placeholder="Number of edges"
    className="graph-input"
  />
  
  {errorMessage && <p className="error-message">{errorMessage}</p>}
  <svg ref={svgRef} width="600" height="400"></svg>
  
  <h2 className="graph-subtitle">Types of Graphs</h2>
  <img
    src="/images/TypesOfGraphs.jpg"
    alt="Types of graphs"
    className="tree-image"
    style={{ maxWidth: 600 }}
  />
  <ul>
    <li><b>Directed Graph (Digraph):</b> Edges have direction, represented as  G = (V, E) .</li>
    <li><b>Undirected Graph:</b> Edges have no direction, the relationship is bidirectional.</li>
    <li><b>Weighted Graph:</b> Each edge has a weight or cost associated with it.</li>
    <li><b>Unweighted Graph:</b> Edges have no weights.</li>
    <li><b>Cyclic Graph:</b> Contains at least one cycle.</li>
    <li><b>Acyclic Graph:</b> Does not contain any cycles, e.g., Directed Acyclic Graph (DAG).</li>
    <li><b>Complete Graph:</b> Every pair of distinct vertices is connected by a unique edge.</li>
    <li><b>Bipartite Graph:</b> Vertices are divided into two disjoint sets, with edges only between the sets.</li>
  </ul>

  <h2>Graph Representation</h2>
  <p>
    Graphs can be represented in two main ways:
  </p>
  
  <h3>1. Adjacency Matrix</h3>
  <img
    src="/images/Adjacencymatrix.png"
    alt="Adjacency Matrix Representaion of graph"
    className="tree-image"
    style={{ maxWidth: 600 }}
  />
  <p>A 2D array used to represent a graph where rows and columns represent vertices. Each cell indicates whether an edge exists between the respective vertices.</p>
  
  <h3>2. Adjacency List</h3>
  <img
    src="/images/AdjacencyList.png"
    alt="Adjacency List Representaion of graph"
    className="tree-image"
    style={{ maxWidth: 600 }}
  />
  <p>A collection of lists where each vertex has a list of adjacent vertices.</p>
  
  <h2>Graph Algorithms</h2>
  <h3>1. Breadth-First Search (BFS)</h3>
  <p>BFS explores vertices level by level starting from a source vertex.</p>
  <pre className="code">
{`function bfs(graph, start) {
  let visited = new Set();
  let queue = [start];
  visited.add(start);

  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node);

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}`}
  </pre>

  <h3>2. Depth-First Search (DFS)</h3>
  <p>DFS explores as far as possible along each branch before backtracking.</p>
  <pre className="code">
{`function dfs(graph, node, visited = new Set()) {
  console.log(node);
  visited.add(node);

  for (let neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}`}
  </pre>

  <h2>Graph Algorithms (Shortest Path, MST)</h2>
  
  <h3>1. Dijkstra’s Algorithm (Shortest Path)</h3>
  <video width="70%" height="auto" controls>
    <source src="/videos/Dijkstra.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <p>Dijkstra’s algorithm finds the shortest path between a source node and all other nodes in a weighted graph.</p>
  <pre className="code">
{`function dijkstra(graph, start) {
  let distances = {};
  let pq = new PriorityQueue();
  pq.enqueue(start, 0);
  distances[start] = 0;

  while (!pq.isEmpty()) {
    let { node } = pq.dequeue();
    
    for (let neighbor in graph[node]) {
      let newDist = distances[node] + graph[node][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.enqueue(neighbor, newDist);
      }
    }
  }
  return distances;
}`}
  </pre>

  <h3>2. Kruskal’s Algorithm (Minimum Spanning Tree)</h3>
  <video width="70%" height="auto" controls>
    <source src="/videos/Kruskal.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <p>Kruskal’s algorithm finds the minimum spanning tree (MST) by adding the shortest edges one by one, ensuring no cycles are formed.</p>
  <pre className="code">
{`function kruskal(nodes, edges) {
  edges.sort((a, b) => a.weight - b.weight);
  let parent = {};
  let rank = {};

  function find(node) {
    if (parent[node] === undefined) parent[node] = node;
    if (parent[node] !== node) parent[node] = find(parent[node]);
    return parent[node];
  }

  function union(node1, node2) {
    let root1 = find(node1);
    let root2 = find(node2);

    if (root1 !== root2) {
      if (rank[root1] > rank[root2]) {
        parent[root2] = root1;
      } else {
        parent[root1] = root2;
        if (rank[root1] === rank[root2]) rank[root2]++;
      }
    }
  }

  let mst = [];
  for (let edge of edges) {
    let { u, v, weight } = edge;
    if (find(u) !== find(v)) {
      mst.push(edge);
      union(u, v);
    }
  }
  return mst;
}`}
  </pre>

  <h2>Applications of Graphs</h2>
  <ul>
    <li><b>Social Networks:</b> Representing relationships between users.</li>
    <li><b>Routing Algorithms:</b> Shortest path in maps, like GPS systems.</li>
    <li><b>Web Search Engines:</b> Representing the structure of the web for crawling.</li>
    <li><b>Recommendation Systems:</b> Graphs represent items, users, and interactions.</li>
    <li><b>Network Flow Problems:</b> Used in managing traffic or bandwidth.</li>
    <li><b>Computer Networks:</b> Representing routers, switches, and connections.</li>
  </ul>

  <h2>Graph Problems</h2>
  <ul>
    <li><b>Finding Shortest Path:</b> Algorithms like Dijkstra’s, Bellman-Ford.</li>
    <li><b>Detecting Cycles:</b> Using DFS or Union-Find.</li>
    <li><b>Graph Coloring:</b> Assigning colors to vertices so no two adjacent vertices have the same color.</li>
    <li><b>Topological Sorting:</b> For Directed Acyclic Graphs (DAGs), to order tasks or operations.</li>
  </ul>
</div>

  );
}

export default GraphPage;
