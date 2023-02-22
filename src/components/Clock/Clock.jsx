import React, { useEffect, useState } from 'react';
import './Clock.css';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDate(new Date());
    }, 1000);

    return () => clearTimeout(timerId);
  }, [date]);

  const getHandAngle = (hand) => {
    let value = date[`get${hand}`]();
    if (hand === 'Hours') {
      value = value > 12 ? value - 12 : value;
      const degrees = value * 30 + date[`get${'Minutes'}`]() * 0.5;
      return degrees
    }
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
        <div className="hand hour-hand" style={hourStyle} data-testid="hour-hand"></div>
        <div className="hand minute-hand" style={minuteStyle} data-testid="minute-hand"></div>
        <div className="hand second-hand" style={secondStyle} data-testid="second-hand"></div>
        <div className="number twelve">12</div>
        <div className="number one">1</div>
        <div className="number two">2</div>
        <div className="number three">3</div>
        <div className="number four">4</div>
        <div className="number five">5</div>
        <div className="number six">6</div>
        <div className="number seven">7</div>
        <div className="number eight">8</div>
        <div className="number nine">9</div>
        <div className="number ten">10</div>
        <div className="number eleven">11</div>
        <div className="center-dot"></div>
      </div>
      <div className="digital" data-testid="digital">{date.toLocaleTimeString()}</div>
    </div>
  );
};

export default Clock;
