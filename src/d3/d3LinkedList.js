import * as d3 from 'd3';

const getCSSVariable = (variableName) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};

const linkColor = getCSSVariable('--link-line-color');

export const createLinkedList = (svgRef, numNodes) => {
  // Clear the previous visualization
  d3.select(svgRef).selectAll("*").remove();

  const svg = d3.select(svgRef)
    .attr('width', 800)
    .attr('height', 200)
    .style('background-color', getCSSVariable('--content-bg')); // Dynamic background color

  // Generate node and link data
  const nodeData = generateNodeData(numNodes);
  const linkData = generateLinkData(nodeData);

  // Draw links (lines) between nodes
  svg.selectAll('.link')
    .data(linkData)
    .enter()
    .append('line')
    .attr('class', 'link')
    .attr('x1', d => nodeData[d.source].x)
    .attr('y1', d => nodeData[d.source].y)
    .attr('x2', d => nodeData[d.source].x) // Initial line at the source
    .attr('y2', d => nodeData[d.source].y) // Same y as the source
    .attr('stroke', linkColor) // Use dynamic link color
    .attr('stroke-width', 2)
    .transition()
    .duration(1000)
    .attr('x2', d => nodeData[d.target].x) // Move to target
    .attr('y2', d => nodeData[d.target].y); // Same y as the target

  // Draw nodes (circles)
  const node = svg.selectAll('.node')
    .data(nodeData)
    .enter()
    .append('g')
    .attr('class', 'node')
    .attr('transform', (d) => `translate(${d.x},${d.y})`);
    
  // Append circles to represent nodes
  node.append('circle')
    .attr('r', 0) // Start with a radius of 0
    .attr('fill', '#69b3a2')
    .transition()
    .duration(1000)
    .attr('r', 20); // Animate to radius of 20

  // Append text to each node
  node.append('text')
    .attr('dy', 5)
    .attr('text-anchor', 'middle')
    .text((d) => d.value)
    .style('fill', '#fff')
    .style('font-size', '12px');
};

// Function to generate node positions and data
const generateNodeData = (numNodes) => {
  const nodeData = [];
  const nodeSpacing = 800 / (numNodes + 1); // evenly space nodes

  for (let i = 0; i < numNodes; i++) {
    nodeData.push({
      x: nodeSpacing * (i + 1),
      y: 100, // Set y coordinate (same level for all nodes)
      value: i + 1, // Node value (1, 2, 3, ...)
    });
  }
  return nodeData;
};

// Function to generate links (connections) between nodes
const generateLinkData = (nodeData) => {
  const linkData = [];
  for (let i = 0; i < nodeData.length - 1; i++) {
    linkData.push({
      source: i,
      target: i + 1,
    });
  }
  return linkData;
};
