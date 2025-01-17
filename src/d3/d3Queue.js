import * as d3 from 'd3';

const width = 600;
const height = 200;
const barWidth = 50;
const spacing = 10;
const maxQueueSize = 10;

function drawQueue(queue, svg) {
  svg.selectAll("*").remove(); // Clear previous drawings

  const numElements = queue.length;
  const totalWidth = numElements * (barWidth + spacing);

  // Append rectangles for the queue
  svg
    .selectAll("rect")
    .data(queue)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * (barWidth + spacing))
    .attr("y", height / 2 - barWidth / 2)
    .attr("width", barWidth)
    .attr("height", barWidth)
    .attr("fill", "steelblue")
    .attr("stroke", "black");

  // Append text labels for each rectangle
  svg
    .selectAll("text")
    .data(queue)
    .enter()
    .append("text")
    .attr("x", (d, i) => i * (barWidth + spacing) + barWidth / 2)
    .attr("y", height / 2)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill", "black")
    .text(d => d);

  // Add "Front" and "Rear" labels
  if (queue.length > 0) {
    svg.append("text")
    .attr("x", barWidth / 2) // Position at the center of the first element
    .attr("y", height / 2 - barWidth - 10) // Above the front element
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("fill", "red")
      .attr("font-size", "16px")
      .text("Front");

    svg.append("text")
        .attr("x", (queue.length - 1) * (barWidth + spacing) + barWidth / 2) // Position at the center of the last element
        .attr("y", height / 2 - barWidth - 10) // Above the rear element
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("fill", "green")
      .attr("font-size", "16px")
      .text("Rear");
  }
}

function enqueue(queue, value) {
  if (queue.length >= maxQueueSize) {
    return { queue, overflow: true }; // Overflow case
  }

  const newQueue = [...queue, value]; // Add value to the rear
  return { queue: newQueue, overflow: false };
}

function dequeue(queue) {
  if (queue.length === 0) {
    return { queue, empty: true }; // Empty case
  }

  const newQueue = queue.slice(1); // Remove from the front
  return { queue: newQueue, empty: false };
}

export { drawQueue, enqueue, dequeue };
