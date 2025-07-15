import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import './Theme.css'

function Theme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="themeToggle" onClick={toggleTheme}>{theme == 'dark' ? 'Светлая' : 'Тёмная'} тема</button>
  );
}

export default Theme;