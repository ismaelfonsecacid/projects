import logo from './logo.svg';
import './App.css';
import Dice from './components/dice';

function App() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <h1>Roll A Dice</h1>
      <Dice />
    </div>
  );
}

export default App;
