import React, { useEffect,useState, useContext } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';
import '../styles/HomePage.css';
import ThemeSwitch from '../contexts/ThemeSwitch';
import '../styles/themes.css';
import { ThemeContext } from '../contexts/ThemeContext';
import SearchBar from './Searchbar'

function HomePage() {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);
  const location = useLocation();
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');

  const isActive = (path) => location.pathname === path;
  // useEffect(async () => {
  //     const url = "http://localhost:8000/users/authenticate"
  //     const options = {
  //       credentials:"include",
  //       method: "GET"
  //     }    
  //     const response = await fetch(url, options)
  //     const data = await response.json()
  //     if(data.msg){
  //       setError(data.msg)
  //     }
  //     console.log("data: ", data)
  //     // return
  //     // if(data.response.status=="401")
  //     //   navigate('/login');
  
    
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
    if(data.msg){
      setError(data.msg)
    }
  navigate('/login');
};


  return (
    <div data-theme={theme}>
      <div className="homepage-container">
        <header className="top-navbar">
          <button className="hamburger-btn" onClick={toggleSidebar}>
            &#9776;
          </button>
          <div className="logo">AlgoVision</div>
          <nav className="nav-links">
            <Link to="/home" className={isActive('/home') ? 'active-link' : ''}>Home</Link>
            <Link to="/home/time-complexity" className={isActive('/home/time-complexity') ? 'active-link' : ''}>Time Complexity</Link>
            <Link to="/home/space-complexity" className={isActive('/home/space-complexity') ? 'active-link' : ''}>Space Complexity</Link>
            <Link to="/home/contact" className={isActive('/home/contact') ? 'active-link' : ''}>Contact Us</Link>
            <Link to="/home/compiler" className={isActive('/home/compiler') ? 'active-link' : ''}>Compiler</Link>
            <Link to="/home/chatbot" className={isActive('/home/chatbot') ? 'active-link' : ''}>Chatbot</Link>
            <SearchBar/>
            <div className="theme-switch-container">
              <ThemeSwitch />
            </div>
          </nav>
        </header>
        <div className="main-content">
          <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/data-structure/array" className={isActive('/data-structure/array') ? 'active-link' : ''}>Array</Link></li>
              <li><Link to="/data-structure/linked-list" className={isActive('/data-structure/linked-list') ? 'active-link' : ''}>Linked List</Link></li>
              <li><Link to="/data-structure/stack" className={isActive('/data-structure/stack') ? 'active-link' : ''}>Stack</Link></li>
              <li><Link to="/data-structure/queue" className={isActive('/data-structure/queue') ? 'active-link' : ''}>Queue</Link></li>
              <li><Link to="/data-structure/heap" className={isActive('/data-structure/heap') ? 'active-link' : ''}>Heap</Link></li>
              <li><Link to="/data-structure/hash" className={isActive('/data-structure/hash') ? 'active-link' : ''}>Hash</Link></li>
              <li><Link to="/data-structure/tree" className={isActive('/data-structure/tree') ? 'active-link' : ''}>Tree</Link></li>
              <li><Link to="/data-structure/graph" className={isActive('/data-structure/graph') ? 'active-link' : ''}>Graph</Link></li>
            </ul>
              <span className='quiz-button'><Link to="/home/quiz" className={isActive('/home/quiz') ? 'active-link' : ''}>Wanna take a Quiz?</Link></span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </aside>
          <div className="content-area">
            <Outlet />
            {isActive('/home') && (
              <div className="home-container">
                <h1 className="home-title">Data Structures</h1>
                <div className="home-content">
                <p>
                  <b>Data structures</b> are the fundamental building blocks of computer programming. They define how data is organized, stored, and manipulated within a program. Understanding data structures is very important for developing efficient and effective algorithms.
                </p>
                <br/>
                <h3>What is Data Structures?</h3>
                <p>
                A <i>data structure</i> is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.
                </p>
                <p>
                  A data structure is not only used for organizing the data. It is also used for processing, retrieving, and storing data. There are different basic and advanced types of data structures that are used in almost every program or software system that has been developed. So we must have good knowledge about data structures. 

                </p>
                <br/>
                <h2><i>Classification of Data Structures</i></h2>
                <img src = {'https://media.geeksforgeeks.org/wp-content/uploads/20220520182504/ClassificationofDataStructure-660x347.jpg'} alt='Classification of Data Structures'/>
                <br/>
                <br/>
                <h3>Types of Data Structures</h3>
                <ul>
    <li>Primitive data structure</li>
    <li>Non-primitive data structure</li>
  </ul>

  <h4>Primitive Data Structure</h4>
  <p>The primitive data structures are primitive data types. The int, char, float, double, and pointer are the primitive data structures that can hold a single value.</p>
  <h4>Non-Primitive Data Structure</h4>
  <p>The non-primitive data structure is divided into two types:</p>
  <ul>
    <li>Linear data structure</li>
    <li>Non-linear data structure</li>
  </ul>

  <h4><i>Linear Data Structure</i></h4>
  <p>The arrangement of data in a sequential manner is known as a linear data structure. The data structures used for this purpose are Arrays, Linked list, Stacks, and Queues. In these data structures, one element is connected to only one other element in a linear form.</p>

  <h4><i>Non-Linear Data Structure</i></h4>
  <p>When one element is connected to the 'n' number of elements, it is known as a non-linear data structure. The best example is trees and graphs. In this case, the elements are arranged in a random manner.</p>
<br/>
  <h3>Data Structure Classification</h3>
  <p>Data structures can also be classified as:</p>
  <ul>
    <li><b>Static data structure:</b> It is a type of data structure where the size is allocated at the compile time. Therefore, the maximum size is fixed.</li>
    <li><b>Dynamic data structure:</b> It is a type of data structure where the size is allocated at the run time. Therefore, the maximum size is flexible.</li>
  </ul>
<br/>
  <h3>Major Operations</h3>
  <p>The major or the common operations that can be performed on data structures are:</p>
  <ul>
    <li><b>Searching:</b> We can search for any element in a data structure.</li>
    <li><b>Sorting:</b> We can sort the elements of a data structure either in ascending or descending order.</li>
    <li><b>Insertion:</b> We can also insert a new element in a data structure.</li>
    <li><b>Updation:</b> We can replace an existing element with another element.</li>
    <li><b>Deletion:</b> We can remove an element from a data structure.</li>
  </ul>
<br/>
  <h2>Advantages of Data Structures</h2>
  <p>The following are the advantages of data structures:</p>
  <ul>
    <li><b>Efficiency:</b> If the choice of a data structure for implementing a particular ADT(Abstract Data Type) is proper, it makes the program very efficient in terms of time and space.</li>
    <li><b>Reusability:</b> The data structure provides reusability, meaning that multiple client programs can use the same data structure.</li>
    <li><b>Abstraction:</b> The data structure specified by an ADT also provides a level of abstraction. The client cannot see the internal working of the data structure and doesn't have to worry about the implementation details, only the interface.</li>
  </ul>

              </div>
            </div>
          )}
        </div>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} AlgoVision. All rights reserved.</p>
      </footer>
    </div>
     </div> 
  );
}

export default HomePage;

