import * as d3 from 'd3';
import themes from '../styles/themes.css'

const getCSSVariable = (variableName) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
  };
  
  export const renderArray = (data, container) => {
    // Remove existing SVG content
    
    d3.select(container).selectAll('*').remove();
  
    // Dimensions and settings
    const width = 850;
    const height = 60;
    const rectWidth = 60;
    const rectHeight = 40;
    const spacing = 10;
  
    // Get theme colors from CSS variables
    const rectFillColor = getCSSVariable('--stack-bar-stroke-color');
    const rectStrokeColor = getCSSVariable('--button-border-color');
    const textFillColor = getCSSVariable('--navbar-text-color');
    const indexTextColor = getCSSVariable('--text-color');
    const rectTextColor = getCSSVariable('--footer-bg');
  
    d3.select(container)
    .style('border', `2px solid #2e003e`) // Apply border color and style
    .style('border-radius', '10px');
    // Create SVG container
    const svg = d3.select(container)
      .append('svg')
      .attr('width', width)
      .attr('height', height);
    
  
    // Array elements group
    const arrayGroup = svg.append('g')
      .attr('transform', `translate(${(width - (rectWidth + spacing) * data.length) / 2}, 40)`);
  
    // Add rectangles for array elements
    arrayGroup.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', rectWidth)
      .attr('height', rectHeight)
      .attr('x', (d, i) => i * (rectWidth + spacing))
      .attr('y', 0)
      .attr('fill', rectFillColor)
      .attr('stroke', 'black')
      .attr('stroke-width', 2)
      .transition()
      .duration(500)
      .attr('fill', rectFillColor);
  
    // Add text for array values
    arrayGroup.selectAll('text.value')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'value')
      .attr('x', (d, i) => i * (rectWidth + spacing) + rectWidth / 2)
      .attr('y', rectHeight / 2 + 5)
      .attr('text-anchor', 'middle')
      .text((d) => d)
      .style('fill', rectFillColor)
      .style('font-size', '16px');
  
    // Add indexing below each element
    arrayGroup.selectAll('text.index')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'index')
      .attr('x', (d, i) => i * (rectWidth + spacing) + rectWidth / 2)
      .attr('y', rectHeight + 20)
      .attr('text-anchor', 'middle')
      .text((d, i) => i)
      .style('fill', getCSSVariable('--text-color'))
      .style('font-size', '12px');
  };
  