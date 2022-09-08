import Board from './components/board'
import './App.css';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light')
  return (
    <div className={`App ${theme}-theme`}>
      <Board theme={theme} />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change theme!</button>
    </div>
  );
}
export default App;
