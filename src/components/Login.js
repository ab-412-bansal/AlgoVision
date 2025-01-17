import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }
    const url = "http://localhost:8000/users/login"
    const options = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        username:username,
        password:password
      })
    }    
    const response = await fetch(url, options)
    const data = await response.json()
    if(data.msg){
      setError(data.msg)
    }
    // if(data.token){
    //   localStorage.setItem("token", data.token)
    //   localStorage.setItem("isAuthenticated","true")
    if(response.status=="200"){
      // alert("Login ok")
      navigate('/home');
    }
    // }

    // Fetch users from localStorage
    // const users = JSON.parse(localStorage.getItem('users')) || [];

    // // Check if the user exists
    // const user = users.find((user) => user.username === username && user.password === password);

    // if (user) {
    //   // If user exists, log them in
    //   localStorage.setItem('loggedInUser', JSON.stringify(user));
    //   localStorage.setItem('isAuthenticated', 'true');
    //   navigate('/home');
    // } else {
    //   setError('Invalid username or password');
    // }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">SignUp</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
