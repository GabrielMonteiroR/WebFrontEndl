import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const startTimer = () => {
    setIsActive(true);
  };

  return (
    <div className="timer-container">
      <h1 className="timer">Timer: {seconds} seconds</h1>
      <button className="timer-button" onClick={startTimer}>Start Timer</button>
    </div>
  );
};

export default Timer;
