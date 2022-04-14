import logo from './logo.jpeg';
import './App.css';
import Hello from './components/Intro.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       <Hello/>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Healthy Lungs powered by AI
          </a>
          
        
      </header>
    </div>
  );
}

export default App;
