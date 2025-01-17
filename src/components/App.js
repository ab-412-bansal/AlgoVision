import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../Routes/AppRoutes';
import { SidebarProvider } from '../contexts/SidebarContext'; // Import SidebarProvider
import { ThemeProvider } from '../contexts/ThemeContext'; // Import ThemeProvider
// In App.js or index.js
import '../styles/themes.css';


function App() {
  return (
    <Router>
      <ThemeProvider>
      <SidebarProvider>
          <AppRoutes />
      </SidebarProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
