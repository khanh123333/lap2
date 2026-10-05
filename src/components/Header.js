import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="app-header">
      <h1 className="app-title">Mini Movie Manager</h1>
      <button 
        className="theme-btn" 
        onClick={toggleTheme}
        type="button"
        title="Toggle Theme"
      >
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </header>
  );
}

export default Header;
