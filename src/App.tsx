import './App.css';
import Game from './components/Game';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Game />
    </ThemeProvider>
  );
}
export default App;
