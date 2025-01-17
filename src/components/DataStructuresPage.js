import React, { useEffect,useState,useContext } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';
import { ThemeContext } from '../contexts/ThemeContext'; // Import ThemeContext
import '../styles/DataStructurePage.css';
import ThemeSwitch from '../contexts/ThemeSwitch';
import SearchBar from './Searchbar';
import Quiz from './Quiz';
function DataStructuresPage() {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);
  const location = useLocation();
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState('');

  const isActive = (path) => location.pathname === path;
//   useEffect(async () => {
//     const url = "http://localhost:8000/users/authenticate"
//     const options = {
//       credentials:"include",
//       method: "GET",
//       headers: {
//         "Content-Type":"application/json"
//       },
//       body: JSON.stringify({
//       })
//     }    
//     const response = await fetch(url, options)
//     const data = await response.json()
//     if(data.response.status=="401")
//       navigate('/login');
// }, []);


const handleLogout = async () => {
  const url = "http://localhost:8000/users/logout"
  const options = {
    method: "POST",
    credentials:"include",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
    })
  }    
  const response = await fetch(url, options)
  const data = await response.json()
  
navigate('/login');
};

  return (
    <div className={`homepage-container ${theme}`}> {/* Apply theme class */}
      <header className="top-navbar">
        <button className="hamburger-btn" onClick={toggleSidebar}>
          &#9776;
        </button>
        <div className="logo">
          <Link to="/home" className="logo-links">AlgoVision</Link>
        </div>
        <nav className="nav-links">
        <Link to="/data-structure/compiler" className={isActive('/data-structure/compiler') ? 'active-link' : ''}>
            Compiler
          </Link>
          <Link to="/data-structure/chatbot" className={isActive('/data-structure/chatbot') ? 'active-link' : ''}>
            Chatbot
          </Link>
          <SearchBar/>
          <div className="theme-switch-container">
          <ThemeSwitch /> 
        </div>
        </nav>
      </header>
      <div className="main-content">
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
            <li>
              <Link to="/data-structure/array" className={isActive('/data-structure/array') ? 'active-link' : ''}>
                Array
              </Link>
            </li>
            <li>
              <Link to="/data-structure/linked-list" className={isActive('/data-structure/linked-list') ? 'active-link' : ''}>
                Linked List
              </Link>
            </li>
            <li>
              <Link to="/data-structure/stack" className={isActive('/data-structure/stack') ? 'active-link' : ''}>
                Stack
              </Link>
            </li>
            <li>
              <Link to="/data-structure/queue" className={isActive('/data-structure/queue') ? 'active-link' : ''}>
                Queue
              </Link>
            </li>
            <li>
              <Link to="/data-structure/heap" className={isActive('/data-structure/heap') ? 'active-link' : ''}>
                Heap
              </Link>
            </li>
            <li>
              <Link to="/data-structure/hash" className={isActive('/data-structure/hash') ? 'active-link' : ''}>
                Hash
              </Link>
            </li>
            <li>
              <Link to="/data-structure/tree" className={isActive('/data-structure/tree') ? 'active-link' : ''}>
                Tree
              </Link>
            </li>
            <li>
              <Link to="/data-structure/graph" className={isActive('/data-structure/graph') ? 'active-link' : ''}>
                Graph
              </Link>
            </li>
            {/* Add more data structures here */}

          </ul>
          <span className='quiz-button'><Link to="/home/quiz" className={isActive('/home/quiz') ? 'active-link' : ''}>Wanna take a Quiz?</Link></span>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </aside>
        <div className="content-area">
          <Outlet />
        </div>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} AlgoVision. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default DataStructuresPage;


