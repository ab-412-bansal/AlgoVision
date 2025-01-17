import React from 'react';
import '../styles/TimeComplexity.css';

function TimeComplexity() {
  return (
<div className="time-complexity-container">
  <h2 className="time-complexity-title">Time Complexity</h2>
  <p className="time-complexity-content">
    <b>Time complexity</b> measures the amount of time an algorithm takes to complete as a function of its input size. It helps in evaluating an algorithm's efficiency and predicting its behavior for large datasets.
  </p>

  <h3>What is Time Complexity?</h3>
  <p>
    Time complexity represents the computational time required by an algorithm to execute. Understanding time complexity is essential for optimizing applications and ensuring they run efficiently on various input sizes.
  </p>
  <p>Time complexity is usually expressed using *Asymptotic Notations*:</p>
  <ul>
    <li><b>Big-O (O):</b> Represents the upper bound of an algorithm's runtime.</li>
    <li><b>Big-Ω (Omega):</b> Represents the lower bound of an algorithm's runtime.</li>
    <li><b>Big-Θ (Theta):</b> Represents the tight bound, meaning both upper and lower bounds.</li>
  </ul>

  <br />
  <h2><i>How Time Complexity is Calculated</i></h2>
  <p>
    Time complexity depends on the type of operations in the algorithm. For example, loops, recursive calls, and other operations contribute to the overall complexity.
  </p>
  <img
    src="/images/Time_Complexity_Graph.jpg"
    alt="Time Complexity Graph"
    style={{height:300}}
  />
  <br />

  <p>Let's explore some common complexities with examples:</p>

  <h3>Constant Time Complexity:  O(1) </h3>
  <p>Algorithms that execute in constant time, regardless of the input size, have  O(1)  complexity.</p>
  <pre>
    <span>int getFirstElement(int arr[], int size) &#123;</span><br/>
    <span>    return arr[0];</span><br/>
    <span>&#125;</span><br/>
  </pre>

  <h3>Linear Time Complexity: O(n) </h3>
  <p>Algorithms that grow linearly with the input size have  O(n)  complexity.</p>
  <pre>
    <span>int sumArray(int arr[], int size) &#123;</span><br/>
    <span>    int sum = 0;</span><br/>
    <span>    for (int i = 0; i &lt; size; i++) &#123;</span><br/>
    <span>        sum += arr[i];</span><br/>
    <span>    &#125;</span><br/>
    <span>    return sum;</span><br/>
    <span>&#125;</span><br/>
  </pre>
  <video width="70%" height="auto" controls>
    <source src="/videos/Time_Complexity1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <h3>Logarithmic Time Complexity:  O(log n) </h3>
  <p>
    Algorithms with logarithmic complexity reduce the problem size in each step, often involving divide-and-conquer strategies.
  </p>
  <pre>
    <span>int binarySearch(int arr[], int size, int target) &#123;</span><br/>
    <span>    int left = 0, right = size - 1;</span><br/>
    <span>    while (left &lt;= right) &#123;</span><br/>
    <span>        int mid = left + (right - left) / 2;</span><br/>
    <span>        if (arr[mid] == target)</span><br/>
    <span>            return mid;</span><br/>
    <span>        if (arr[mid] &lt; target)</span><br/>
    <span>            left = mid + 1;</span><br/>
    <span>        else</span><br/>
    <span>            right = mid - 1;</span><br/>
    <span>    &#125;</span><br/>
    <span>    return -1;</span><br/>
    <span>&#125;</span><br/>
  </pre>
  <video width="70%" height="auto" controls>
    <source src="/videos/Time_Complexity2.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <h3>Quadratic Time Complexity: O(n<sup>2</sup>)</h3>
  <p>Algorithms with O(n<sup>2</sup>) complexity involve nested loops iterating over the input size.</p>
  <pre>
    <span>void printPairs(int arr[], int size) &#123;</span><br/>
    <span>    for (int i = 0; i &lt; size; i++) &#123;</span><br/>
    <span>        for (int j = 0; j &lt; size; j++) &#123;</span><br/>
    <span>            printf("(%d, %d) ", arr[i], arr[j]);</span><br/>
    <span>        &#125;</span><br/>
    <span>    &#125;</span><br/>
    <span>&#125;</span><br/>
  </pre>

  <h3>Exponential Time Complexity: O(2<sup>n</sup>) </h3>
  <p>Algorithms with  O(2<sup>n</sup>)  complexity often involve solving problems recursively with multiple branches at each step.</p>
  <pre>
    <span>int fibonacci(int n) &#123;</span><br/>
    <span>    if (n &lt;= 1) return n;</span><br/>
    <span>    return fibonacci(n-1) + fibonacci(n-2);</span><br/>
    <span>&#125;</span><br/>
  </pre>
  <video width="70%" height="auto" controls>
    <source src="/videos/Time_Complexity3.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <h3>Asymptotic Notations</h3>
  <p>
    Understanding asymptotic notations is essential for analyzing algorithm efficiency. Here's a brief overview of Big-O, Big-Ω, and Big-Θ.
  </p>
  <video width="70%" height="auto" controls>
    <source src="/videos/Time_Complexity4.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <h3>Properties of Asymptotic Notations</h3>
  <p>Asymptotic notations follow specific mathematical properties that make them useful for algorithm analysis.</p>
  <video width="70%" height="auto" controls>
    <source src="/videos/Time_Complexity5.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <h3>Trade-Off Between Time and Space Complexity</h3>
  <p>
    There is often a trade-off between time and space complexity. Optimizing one may require compromising the other. For example, caching results can reduce time complexity at the cost of increased space usage.
  </p>

  <h2>Advantages of Optimizing Time Complexity</h2>
  <p>Optimizing time complexity has several benefits:</p>
  <ul>
    <li><b>Faster Execution:</b> Programs run faster, improving user experience.</li>
    <li><b>Scalability:</b> Efficient algorithms handle larger datasets effectively.</li>
    <li><b>Cost Efficiency:</b> Faster execution reduces energy consumption and computational costs.</li>
  </ul>
</div>

  );
}

export default TimeComplexity;
