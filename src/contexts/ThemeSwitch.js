import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import '../styles/ThemeSwitch.css'; // Custom CSS for switch

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === 'dark'} // Checkbox checked if dark mode is active
      />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeSwitch;
