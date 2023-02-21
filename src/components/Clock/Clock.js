import React, { useEffect, useState } from 'react';
import './Clock.css';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getHandAngle = (hand) => {
    const value = date[`get${hand}`]();
    const degrees = value * 6;
    return degrees;
  };

  const hourStyle = {
    transform: `rotate(${getHandAngle('Hours')}deg)`,
  };

  const minuteStyle = {
    transform: `rotate(${getHandAngle('Minutes')}deg)`,
  };

  const secondStyle = {
    transform: `rotate(${getHandAngle('Seconds')}deg)`,
  };

  return (
    <div className="clock">
      <div className="clock-face">
        <div className="hand hour-hand" style={hourStyle}></div>
        <div className="hand minute-hand" style={minuteStyle}></div>
        <div className="hand second-hand" style={secondStyle}></div>
        <div className="number twelve">XII</div>
        <div className="number one">I</div>
        <div className="number two">II</div>
        <div className="number three">III</div>
        <div className="number four">IV</div>
        <div className="number five">V</div>
        <div className="number six">VI</div>
        <div className="number seven">VII</div>
        <div className="number eight">VIII</div>
        <div className="number nine">IX</div>
        <div className="number ten">X</div>
        <div className="number eleven">XI</div>
        <div className="center-dot"></div>
      </div>
      <div className="digital">{date.toLocaleTimeString()}</div>
    </div>
  );
};

export default Clock;
