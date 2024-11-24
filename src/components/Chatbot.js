import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const extractPageText = () => {
    const elements = document.body.getElementsByTagName("*");
    let text = "";

    for (let element of elements) {
      if (element.tagName !== "SCRIPT" && element.tagName !== "STYLE") {
        text += element.textContent.trim() + " ";
      }
    }

    return text;
  };

  const summarizeText = (text) => {
    // Simplistic summary logic (returns the first 300 characters)
    return text.length > 300 ? text.substring(0, 300) + "..." : text;
  };

  const handleSummarize = () => {
    setLoading(true);
    const pageText = extractPageText();
    const summary = summarizeText(pageText);

    setTimeout(() => {
      setMessages([...messages, { user: true, text: "Summarize this page" }, { user: false, text: summary }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="chatbot">
      <div className="chatbot-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chatbot-message ${msg.user ? "user" : "bot"}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="chatbot-message bot">Summarizing...</div>}
      </div>
      <button className="chatbot-button" onClick={handleSummarize}>
        Summarize Page
      </button>
    </div>
  );
};

export default Chatbot;
