import React from "react";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> Responsive Cards Hover Effects</h1>
      <div className="card-container">
          <Cards />
      </div>
    </div>
  );
}

export default App;