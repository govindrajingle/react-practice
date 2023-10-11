import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

const App = () => {
  const [quote, setQuote] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setQuote(response.data[0]);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="app-container" style={{ backgroundColor: 'black', color: 'yellow' }}>
      <h1 className="heading">Ron Swanson Quote</h1>
      <p className="quote">{quote}</p>
      <p className="time">Current Time: {currentTime}</p>
    </div>
  );
};

export default App;
