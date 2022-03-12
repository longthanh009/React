import logo from './logo.svg';
import './App.css';
import HomepPgae from './components/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <HomepPgae />
        </p>
      </header>
    </div>
  );
}

export default App;
