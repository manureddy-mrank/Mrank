import React from "react";
import "./App.css";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Page Summarizer</h1>
        <p>This page demonstrates a simple chatbot for summarizing content.</p>
      </header>
      <Chatbot />
    </div>
  );
}

export default App;
