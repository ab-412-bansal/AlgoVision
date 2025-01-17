import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const searchMappings = {
  "home":"/home",
  "datastructures":"/home",
  "datastructure":"/home",
  "linkedlist": "/data-structure/linked-list",
  "array": "/data-structure/array",
  "stack": "/data-structure/stack",
  "queue": "/data-structure/queue",
  "heap": "/data-structure/heap",
  "hash": "/data-structure/hash",
  "tree": "/data-structure/tree",
  "graph": "/data-structure/graph",
  "timecomplexity": "/home/time-complexity",
  "spacecomplexity": "/home/space-complexity",
  "compiler": "/home/compiler",
  "chatbot": "/home/chatbot",
  "quiz": "/home/quiz",
};

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const cleanedQuery = searchQuery.toLowerCase().replace(/\s+/g, '');
    const targetUrl = searchMappings[cleanedQuery];
    if (targetUrl) {
      navigate(targetUrl);
    } else {
      alert('No matching page found.');
    }
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit" className="search-btn">Go</button>
    </form>
  );
}

export default SearchBar;
