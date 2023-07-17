import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  );
}

export default App;
