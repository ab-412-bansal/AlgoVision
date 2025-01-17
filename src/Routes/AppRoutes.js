// src/Routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IntroPage from '../components/IntroPage';
import HomePage from '../components/HomePage';
import DataStructuresPage from '../components/DataStructuresPage';
import TimeComplexity from '../components/TimeComplexity';
import SpaceComplexity from '../components/SpaceComplexity';
import Contact from '../components/Contact';
import ArrayPage from '../components/DataStructure/ArrayPage';
import LinkedListPage from '../components/DataStructure/LinkedListPage';
import StackPage from '../components/DataStructure/StackPage';
import QueuePage from '../components/DataStructure/QueuePage';
import HashPage from '../components/DataStructure/HashPage';
import HeapPage from '../components/DataStructure/HeapPage';
import TreePage from '../components/DataStructure/TreePage';
import GraphPage from '../components/DataStructure/GraphPage';
import Compiler from '../components/Compiler'; // Import Compiler
import Chatbot from '../components/Chatbot'; // Import Chatbot
import Quiz from '../components/Quiz'; // Import Quiz
import ProtectedRoute from './ProtectedRoute';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Signup from '../components/Signup';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<Signup />}/>
      <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>}>
        <Route path="time-complexity" element={<ProtectedRoute><TimeComplexity /></ProtectedRoute>} />
        <Route path="space-complexity" element={<ProtectedRoute><SpaceComplexity /></ProtectedRoute>} />
        <Route path="contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="compiler" element={<ProtectedRoute><Compiler /></ProtectedRoute>} />
        <Route path="chatbot" element={<ProtectedRoute><Chatbot /></ProtectedRoute>} /> 
        <Route path="quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} /> 
      </Route>
      <Route path="/data-structure" element={<ProtectedRoute><DataStructuresPage /></ProtectedRoute>}>
        <Route path="array" element={<ProtectedRoute><ArrayPage /></ProtectedRoute>} />
        <Route path="linked-list" element={<ProtectedRoute><LinkedListPage /></ProtectedRoute>} />
        <Route path="stack" element={<ProtectedRoute><StackPage /></ProtectedRoute>} />
        <Route path="queue" element={<ProtectedRoute><QueuePage /></ProtectedRoute>} />
        <Route path="hash" element={<ProtectedRoute><HashPage /></ProtectedRoute>} />
        <Route path="heap" element={<ProtectedRoute><HeapPage /></ProtectedRoute>} />
        <Route path="tree" element={<ProtectedRoute><TreePage /></ProtectedRoute>} />
        <Route path="graph" element={<ProtectedRoute><GraphPage /></ProtectedRoute>} />
        <Route path="compiler" element={<ProtectedRoute><Compiler /></ProtectedRoute>} />
        <Route path="chatbot" element={<ProtectedRoute><Chatbot /></ProtectedRoute>} /> 
        <Route path="quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} /> 
      </Route>
      
    </Routes>
  );
}

export default AppRoutes;
