import * as d3 from 'd3';

// Function to create a min-heap or max-heap
export function createHeaps(nodes, heapType) {
    const width = 800;
    const height = 600;
    const nodeRadius = 20;
    const levelHeight = 80;
    const widthBetweenNodes = 100;

    // Select the SVG element corresponding to the heapType
    const svg = d3.select(`#${heapType}-heap-svg`);

    // Clear any previous drawings
    svg.selectAll('*').remove();

    if (nodes <= 0) {
        return;
    }

    // Generate heap data based on the heap type (min or max)
    const heapData = generateHeapData(nodes, heapType);

    // Draw the heap structure
    drawHeap(svg, heapData, nodeRadius, levelHeight, widthBetweenNodes, heapType === 'min' ? 'Min Heap' : 'Max Heap');
}

// Function to generate random heap data
function generateHeapData(nodes, type) {
    const heapData = [];
    for (let i = 0; i < nodes; i++) {
        heapData.push({ id: i, value: Math.floor(Math.random() * 100) });
    }
    if (type === 'max') {
        heapData.sort((a, b) => b.value - a.value);  // Max-Heap: Sort descending
    } else {
        heapData.sort((a, b) => a.value - b.value);  // Min-Heap: Sort ascending
    }
    return heapData;
}

// Function to draw the heap structure
function drawHeap(svg, data, nodeRadius, levelHeight, widthBetweenNodes, title) {
    const rootX = svg.attr('width') / 2;
    const rootY = 40;

    // Add title text
    svg.append('text')
        .attr('x', rootX)
        .attr('y', 20)
        .attr('text-anchor', 'middle')
        .attr('font-size', '16px')
        .attr('fill', '#61dafb')
        .text(title);

    // Generate hierarchical structure for nodes
    const nodesData = data.map((d, i) => {
        const level = Math.floor(Math.log2(i + 1));  // Determine the level of the node in the tree
        const position = i - Math.pow(2, level) + 1; // Determine the position within the level
        return {
            id: d.id,
            value: d.value,
            x: rootX + (position - Math.pow(2, level - 1) + 0.5) * widthBetweenNodes,
            y: rootY + level * levelHeight
        };
    });

    // Draw edges (parent-child connections)
    svg.selectAll('.link')
        .data(nodesData.slice(1))  // Exclude the root node
        .enter().append('line')
        .attr('class', 'link')
        .attr('x1', d => d.x)
        .attr('y1', d => d.y)
        .attr('x2', d => {
            const parentIndex = Math.floor((d.id - 1) / 2);  // Get the parent index
            return nodesData[parentIndex].x;
        })
        .attr('y2', d => {
            const parentIndex = Math.floor((d.id - 1) / 2);  // Get the parent index
            return nodesData[parentIndex].y;
        })
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1);

    // Draw nodes (circles)
    svg.selectAll('.node')
        .data(nodesData)
        .enter().append('circle')
        .attr('class', 'heap-node')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', nodeRadius)
        .attr('fill', '#444')
        .attr('stroke', '#fff')
        .attr('stroke-width', 1);

    // Add labels (values inside nodes)
    svg.selectAll('.node-text')
        .data(nodesData)
        .enter().append('text')
        .attr('class', 'node-label')
        .attr('x', d => d.x)
        .attr('y', d => d.y + 5)
        .attr('text-anchor', 'middle')
        .attr('fill', '#fff')
        .text(d => d.value);
}
