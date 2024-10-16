import logo from "./logo.svg";
import "./App.css";
import PortfolioPage from "./components/mainPageStructure";
// import "./styles/background.css";
// import "/styles/background.html";
import LinesBackground from "./components/linesBackground";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <LinesBackground />
      <PortfolioPage />
    </div>
  );
}

export default App;
