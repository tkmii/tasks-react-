import './App.css';
import Theme from './components/Theme';
import Content from './components/Content';
import ThemeContext from './context/ThemeContext';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light'; 
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} className={theme}>
      <div className={`body ${theme}`}>
        <div className="wrapper">
          <Theme />
          <Content />
        </div>
        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;