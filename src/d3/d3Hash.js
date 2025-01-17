import * as d3 from 'd3';
const getCSSVariable = (variableName) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};
export const renderHashTable = (data, container) => {
  // Remove existing SVG content
  d3.select(container).selectAll('*').remove();

  // Dimensions and settings
  const width = 600;
  const height = 400;
  const bucketWidth = 100;
  const bucketHeight = 50;
  const spacing = 15;

  // Hash function simulation
  const hashFunction = (key, numBuckets) => {
    return key % numBuckets;
  };

  // Number of buckets
  const numBuckets = Math.ceil(data.length / 2); // Or you can set a fixed number of buckets

  // Create an array of empty buckets
  const buckets = Array.from({ length: numBuckets }, () => []);

  // Insert elements into the hash table
  data.forEach(d => {
    const hashKey = hashFunction(d.key, numBuckets);
    buckets[hashKey].push(d);
  });

  // Create SVG container
  const svg = d3.select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  // Create groups for each bucket
  const bucketGroups = svg.selectAll('.bucket-group')
    .data(buckets)
    .enter()
    .append('g')
    .attr('class', 'bucket-group')
    .attr('transform', (d, i) => `translate(${i * (bucketWidth + spacing)}, 100)`);

  // Add rectangles representing buckets
  bucketGroups.append('rect')
    .attr('width', bucketWidth)
    .attr('height', bucketHeight)
    .attr('fill', 'lightgray')
    .attr('stroke', 'black')
    .attr('stroke-width', 2);

  // Add bucket index labels
  bucketGroups.append('text')
    .attr('x', bucketWidth / 2)
    .attr('y', -10)
    .attr('text-anchor', 'middle')
    .text((d, i) => `Bucket ${i}`)
    .style('font-size', '14px')
    .style('fill', getCSSVariable('--text-color'));

  // Add values inside each bucket
  bucketGroups.each(function (bucketData, i) {
    const bucketGroup = d3.select(this);
    bucketGroup.selectAll('.bucket-text')
      .data(bucketData)
      .enter()
      .append('text')
      .attr('class', 'bucket-text')
      .attr('x', bucketWidth / 2)
      .attr('y', (d, j) => 25 + j * 20) // Space out multiple elements within the bucket
      .attr('text-anchor', 'middle')
      .text(d => `Key: ${d.key}, Value: ${d.value}`)
      .style('fill', 'black')
      .style('font-size', '12px');
  });
};
