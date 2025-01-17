import * as d3 from 'd3';

// Function to generate the graph data
export const generateGraphData = (vertices, edges, setErrorMessage) => {
  const nodes = Array.from({ length: vertices }, (_, i) => ({ id: i }));  // Zero-indexed node IDs
  const links = [];
  const maxEdges = (vertices * (vertices - 1)) / 2; // Maximum edges for an undirected graph

  if (edges > maxEdges) {
    setErrorMessage('Graph cannot be generated with the given vertices and edges');
    return { nodes: [], links: [] };
  }

  // Reset error if graph is valid
  setErrorMessage('');

  // Generate random edges
  const availableEdges = [];
  for (let i = 0; i < vertices; i++) {
    for (let j = i + 1; j < vertices; j++) {
      availableEdges.push([i, j]);
    }
  }

  while (links.length < edges) {
    const randomIndex = Math.floor(Math.random() * availableEdges.length);
    const [source, target] = availableEdges.splice(randomIndex, 1)[0];
    links.push({ source, target }); // Referencing nodes by their index (zero-indexed)
  }

  return { nodes, links };
};

// Function to render the graph using D3
export const renderGraph = (svgRef, nodes, links) => {
  const svg = d3.select(svgRef.current);
  svg.selectAll('*').remove(); // Clear previous renderings

  const width = 600;
  const height = 400;

  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id).distance(100))
    .force('charge', d3.forceManyBody().strength(-200))
    .force('center', d3.forceCenter(width / 2, height / 2));

  const link = svg.append('g')
    .attr('stroke', '#999')
    .attr('stroke-opacity', 0.6)
    .selectAll('line')
    .data(links)
    .enter().append('line')
    .attr('stroke-width', 2);

  const node = svg.append('g')
    .attr('stroke', '#fff')
    .attr('stroke-width', 1.5)
    .selectAll('circle')
    .data(nodes)
    .enter().append('circle')
    .attr('r', 10)
    .attr('fill', '#69b3a2')
    .call(d3.drag()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }));

  const text = svg.append('g')
    .selectAll('text')
    .data(nodes)
    .enter().append('text')
    .attr('x', d => d.x + 15)
    .attr('y', d => d.y + 5)
    .text(d => d.id + 1) // Display node IDs starting from 1 for clarity
    .style('fill', '#69b3a2');

  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    node
      .attr('cx', d => d.x)
      .attr('cy', d => d.y);

    text
      .attr('x', d => d.x + 15)
      .attr('y', d => d.y + 5);
  });
};
