import React from 'react';
import '../styles/SpaceComplexity.css';

function SpaceComplexity() {
  return (
    <div className="space-complexity-container">
      <h2 className="space-complexity-title">Space Complexity</h2>
      <p className="space-complexity-content">
      
      <b>Space complexity</b> is a measure of the amount of working storage an algorithm needs. It quantifies the memory required by a program during its execution, including the memory for variables, input data, auxiliary structures, and recursion stack.
    </p>
    {/* <br /> */}
    <h3>What is Space Complexity?</h3>
    <p>
      Space complexity represents the total memory required by an algorithm to execute, as a function of the input size. Understanding space complexity is crucial for optimizing programs, especially for applications running on devices with limited memory resources.
    </p>
    <p>
      It can be divided into two main components:
    </p>
    <ul>
      <li>
        <b>Fixed Part:</b> This includes memory required for constants, program code, and variables that do not depend on the input size.
      </li>
      <li>
        <b>Variable Part:</b> This includes dynamic memory allocated for inputs, intermediate computations, and outputs, depending on the input size.
      </li>
    </ul>
    <br />
    <h2><i>How Space Complexity is Calculated</i></h2>
    <img src="/images/Space_Complexity.webp"
      alt="Space Complexity Calculation"
      style={{height:500}}/>
    <br />
    <br />
    <p>
      Space complexity is calculated as:
      <br />
      <code>Total Space = Fixed Part + Variable Part</code>
      </p>
      <p>
        For example, in recursive algorithms, additional memory is required for function call stacks. Similarly, iterative algorithms may require auxiliary data structures like arrays or hash tables.
      </p>
      <pre>
        <span>int add (int n) &#123;</span><br/>
        <span>    if (n &lt;= 0)&#123;</span><br/><span>        return 0;</span><br/><span>  &#125;  </span><br/><span>    return n + add (n-1);</span><br/><span>&#125;</span><br/><br/><span>Here each call add a level to the stack :</span><br/><br/><span>1.  add(4)</span><br/><span>2.    -&gt; add(3)</span><br/><span>3.      -&gt; add(2)</span><br/><span>4.        -&gt; add(1)</span><br/><span>5.          -&gt; add(0)</span><br/><br/><span>Each of these calls is added to call stack and takes up actual memory.</span><br/><span>So it takes O(n) space.</span>
      </pre>
      <p>Now look at below function:</p>
      <pre><span>int addSequence (int n)&#123;</span><br/><span>    int sum = 0;</span><br/><span>    for (int i = 0; i &lt; n; i++)&#123;</span><br/><span>        sum += pairSum(i, i+1);</span><br/><span>    &#125;</span><br/><span>    return sum;</span><br/><span>&#125;</span><br/><br/><span>int pairSum(int x, int y)&#123;</span><br/><span>    return x + y;</span><br/><span>&#125;</span><br/><br/><span>There will be roughly O(n) calls to pairSum. However, those </span><br/><span>calls do not exist simultaneously on the call stack,</span><br/><span>so you only need O(1) space.</span></pre>
    <br />
    <h3>Types of Space Complexity</h3>
    <ul>
      <li>
        <b>Constant Space (O(1)):</b> Algorithms that require a fixed amount of memory irrespective of input size. Example: Swapping two variables.
      </li>
      <li>
        <b>Linear Space (O(n)):</b> Algorithms that require memory proportional to input size. Example: Storing an array of size n.
      </li>
      <li>
        <b>Quadratic Space (O(n²)):</b> Algorithms where memory requirements grow quadratically with input size. Example: 2D arrays.
      </li>
    </ul>
    <br />
    <h3>Trade-Off Between Time and Space Complexity</h3>
    <p>
      There is often a trade-off between time and space complexity. For example, an algorithm can save memory by recomputing values (trading time for space) or save time by storing intermediate results (trading space for time).
    </p>
    <video width="80%" height="auto" controls>
      <source
        src="/videos/Space_Complexity.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <br />
    <h2>Advantages of Optimizing Space Complexity</h2>
    <p>Optimizing space complexity has several benefits:</p>
    <ul>
      <li>
        <b>Efficient Resource Utilization:</b> Reduces memory overhead, making applications run smoothly on resource-constrained devices.
      </li>
      <li>
        <b>Improved Scalability:</b> Applications can handle larger datasets without running out of memory.
      </li>
      <li>
        <b>Reduced Costs:</b> Optimized programs require less computational resources, lowering infrastructure costs.
      </li>
    </ul>
      
    </div>
  );
}

export default SpaceComplexity;
