import React from "react";
import logo from "./logo.svg";
import "./App.css";

import LogRocket from "logrocket";
LogRocket.init("sfetlo/testar");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. SKRIVER HÄR ABC -
          1234 - HEJ - KANEL
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
