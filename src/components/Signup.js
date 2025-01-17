import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!name || !username || !password || !email) {
      setError('Please fill in all fields');
      return;
    }
    const url = "http://localhost:8000/users/signup"
    const options = {
      method: "POST",
      credentials:"include",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name:name,
        username:username,
        email:email,
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
    if(response.status=="200")
      navigate('/home');
    // }


    // // Check if username already exists in local storage
    // const users = JSON.parse(localStorage.getItem('users')) || [];
    // const userExists = users.find((user) => user.username === username);

    // if (userExists) {
    //   setError('Username already exists');
    //   return;
    // }

    // // Store user details in local storage
    // const newUser = { name, username, password, email };
    // users.push(newUser);
    // localStorage.setItem('users', JSON.stringify(users));

    // // Automatically log the user in by storing the current user
    // localStorage.setItem('loggedInUser', JSON.stringify(newUser));
    // localStorage.setItem('isAuthenticated', 'true');

    // // Redirect to home or a protected page after successful signup and login
    
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className='signup-form'>
        {error && <p className="error-msg">{error}</p>}
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
