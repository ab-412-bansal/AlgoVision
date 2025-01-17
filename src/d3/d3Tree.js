import * as d3 from 'd3';

const getCSSVariable = (variableName) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};

const linkColor = getCSSVariable('--link-line-color');

// Function to create the tree structure and render it
export const createTree = (svgRef, numNodes) => {
  // Clear any previous visualization
  d3.select(svgRef).selectAll("*").remove();

  // If number of nodes is 0, don't render anything
  if (numNodes === 0) return;

  const svg = d3.select(svgRef)
    .attr('width', 800)
    .attr('height', 400)
    .style('background-color', getCSSVariable('--content-bg'));

  // Add some margins to prevent overlap with the box border
  const margin = { top: 50, right: 20, bottom: 20, left: 20 };

  // Generate tree data based on the number of nodes
  const treeData = generateTreeData(numNodes);

  // Create a D3 tree layout with adjusted size
  const treeLayout = d3.tree()
    .size([700, 300 - margin.top]);

  // Create a hierarchy from tree data
  const root = d3.hierarchy(treeData);

  // Compute the new tree layout
  treeLayout(root);

  // Add links between nodes
  svg.selectAll('.link')
    .data(root.links())
    .enter()
    .append('line')
    .attr('class', 'link')
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y + margin.top)  // Shift down by margin
    .attr('x2', d => d.source.x)
    .attr('y2', d => d.source.y + margin.top)
    .attr('stroke', linkColor)
    .attr('stroke-width', 2)
    .transition()
    .duration(1000)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y + margin.top);  // Shift down by margin

  // Add nodes (circles)
  const node = svg.selectAll('.node')
    .data(root.descendants())
    .enter()
    .append('g')
    .attr('class', 'node')
    .attr('transform', (d) => `translate(${d.x},${d.y + margin.top})`);  // Shift down by margin
    
  // Append circles for nodes
  node.append('circle')
    .attr('r', 0)  // Start with radius 0
    .attr('fill', '#69b3a2')
    .transition()
    .duration(1000)
    .attr('r', 20);  // Animate to radius of 20

  // Append text to each node
  node.append('text')
    .attr('dy', 5)
    .attr('text-anchor', 'middle')
    .text((d) => d.data.name)
    .style('fill', '#fff')
    .style('font-size', '12px');
};

// Generate tree data for a complete binary tree based on the number of nodes
const generateTreeData = (numNodes) => {
  if (numNodes === 0) return null;  // Return null for 0 nodes

  const nodes = [];
  for (let i = 1; i <= numNodes; i++) {
    nodes.push({ name: i });
  }

  // Build a complete binary tree using a queue
  const rootNode = nodes[0];
  const queue = [rootNode];
  let i = 1;

  while (i < numNodes) {
    const currentNode = queue.shift();

    // Assign the left child
    if (i < numNodes) {
      currentNode.children = [nodes[i]];
      queue.push(nodes[i]);
      i++;
    }

    // Assign the right child
    if (i < numNodes) {
      currentNode.children.push(nodes[i]);
      queue.push(nodes[i]);
      i++;
    }
  }

  return rootNode;
};
