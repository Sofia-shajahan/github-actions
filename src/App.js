import logo from "./logo.svg";
import "./App.css";
import Link from "./Link";
import CheckboxWithLabel from "./CheckBox";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </Link>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CheckboxWithLabel labelOn="on" labelOff="off" />
      </header>
    </div>
  );
}

export default App;
