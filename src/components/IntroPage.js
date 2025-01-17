import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/IntroPage.css'; 

function IntroPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); 
    }, 5000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [navigate]);

  return (
    <div className="intro-page">
      <div className="circular-overlay"></div>
      <div className="text-content">
        <h1>AlgoVision</h1>
        <h2>Visualize and Master Data Structures</h2>
      </div>
    </div>
  );
}

export default IntroPage;
