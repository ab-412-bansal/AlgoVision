import React, { useState, useEffect } from 'react';
import '../styles/Compiler.css';

const Compiler = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('cpp');
  const [stdin, setStdin] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(null); // Start with null to indicate it's loading

  // Fetch initial attempts when the component mounts
  useEffect(() => {
    const fetchAttempts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/attempts', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch initial attempts');
        }

        const data = await response.json();
        setAttempts(data.remainingAttempts);
      } catch (err) {
        setError(`Error fetching attempts: ${err.message}`);
      }
    };

    fetchAttempts();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const handleCompile = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ script: code, stdin, language, versionIndex: '3' }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || 'Network error');
        setOutput('');
        return;
      }

      const result = await response.json();
      setOutput(result.output);
      setAttempts(result.remainingAttempts);
      setError('');
    } catch (error) {
      setError(`Fetch error: ${error.message}`);
      setOutput('');
    }
  };

  return (
    <div className="compiler-container">
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="cpp">C++</option>
        <option value="java">Java</option>
        <option value="python3">Python</option>
      </select>
      <textarea
        rows="10"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
      />
      <textarea className='input-box'
        rows="5"
        value={stdin}
        onChange={(e) => setStdin(e.target.value)}
        placeholder="Input for your program (optional)..."
        />
        {output && <pre>Output:<br/>{output}</pre>}
        {error && <pre style={{ color: 'red' }}>Error: {error}</pre>}
      <button onClick={handleCompile}>Compile & Run</button>
      <div>
        Attempts remaining:{' '}
        {attempts !== null ? attempts : 'Loading...'} {/* Display "Loading..." until attempts are fetched */}
      </div>
    </div>
  );
};

export default Compiler;
