import React, { useState } from 'react';
import "./App.css"

var colors = ['#16a085',
'#27ae60',
'#2c3e50',
'#f39c12',
'#e74c3c',
'#9b59b6',
'#FB6964',
'#342224',
'#472E32',
'#BDBB99',
'#77B1A9',
'#73A857'];

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  }
];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const App = () => {
  const [quote, setQuote] = useState(getRandomQuote());

  const generateQuote = () => {
    const newQuote = getRandomQuote();
    setQuote(newQuote);
    var color = Math.floor(Math.random() * colors.length);
    document.getElementById('wrapper').style.backgroundColor = colors[color];
    document.getElementById('new-quote').style.backgroundColor = colors[color];
    document.getElementById('tweet-btn').style.backgroundColor = colors[color];
    document.getElementById('text').style.color = colors[color];
    document.getElementById('author').style.color = colors[color];            
  };

  return (
    <div className="App" id="wrapper">
      <div className="quote_box" id="quote-box">
      <div className="quote-container">
        <p className="quote-text" id="text" align="center"> " {quote.quote} "</p>
        </div>
        <p className="quote-author" id="author" align="right">- {quote.author}</p>
      <button onClick={generateQuote} className="button" id="new-quote" align="right">New Quote</button>
      <a href="twitter.com/intent/tweet" target="_blank">
      <button className="button" id="tweet-btn">Tweet</button>
      </a>
      </div>
    </div>
    
  );
};

export default App;
