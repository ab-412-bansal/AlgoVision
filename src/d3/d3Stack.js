import * as d3 from 'd3';

// Function to get CSS variable value
const getCSSVariable = (variableName) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};

const barColor = getCSSVariable("--stack-bar-color");
const barStrokeColor = getCSSVariable("--stack-bar-stroke-color");
const textColor = getCSSVariable("--stack-text-color");
const topLabelColor = getCSSVariable("--stack-top-label-color");

const width = 600;
const height = 400;
const barWidth = 50;
const spacing = 10;
const maxStackSize = 10;

function drawStack(stack, svg) {
  svg.selectAll("*").remove(); // Clear previous drawings

  // Append rectangles for the stack
  svg
    .selectAll("rect")
    .data(stack)
    .enter()
    .append("rect")
    .attr("x", (d, i) => width / 2 - barWidth / 2)
    .attr("y", (d, i) => height - (i + 1) * (barWidth + spacing))
    .attr("width", barWidth)
    .attr("height", barWidth)
    .attr("fill", barColor)
    .attr("stroke", barStrokeColor);

  // Append text labels for each rectangle
  svg
    .selectAll("text.value")
    .data(stack)
    .enter()
    .append("text")
    .attr("x", width / 2)
    .attr("y", (d, i) => height - (i + 1) * (barWidth + spacing) + barWidth / 2)
    .attr("text-anchor", "middle")
    .style("alignment-baseline", "middle")
    .style("fill", "black")
    .text(d => d);

  // Add a label "Top" for the top element
  if (stack.length > 0) {
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", height - (stack.length) * (barWidth + spacing) - 10) // Position above the top element
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("fill", topLabelColor)
      .attr("font-size", "16px")
      .text("Top");
  }
}

function addNode(stack, value) {
  if (stack.length >= maxStackSize) {
    return { stack, overflow: true }; // Overflow case
  }

  const newStack = [...stack, value]; // Create a new stack with the added value
  return { stack: newStack, overflow: false };
}

function removeNode(stack) {
  if (stack.length === 0) {
    return { stack, empty: true }; // Empty case
  }

  const newStack = stack.slice(0, -1); // Remove the last element
  return { stack: newStack, empty: false };
}

export { drawStack, addNode, removeNode };
