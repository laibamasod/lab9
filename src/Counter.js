import React, { useState } from 'react';

const Counter = ({ bgColor }) => {
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const increaseCounter = () => {
    setCount(count + 1);
    setErrorMessage('');
  };

  const decreaseCounter = () => {
    if (count === 0) {
      setErrorMessage('Counter cannot be less than zero');
    } else {
      setCount(count - 1);
      setErrorMessage('');
    }
  };

  return (
    <div 
    style={{
        backgroundColor: bgColor,
        padding: '10px',
        borderRadius: '8px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        width: '300px',
      }}
    >
      <h2 style={{ color: "white" }}>Counter Component</h2>
      <span style={{ color: "white" }}>Counter: {count}</span>
      <br /> <br />
      <button onClick={increaseCounter}>INCREASE</button>
      <button onClick={decreaseCounter}>DECREASE</button>
      <br /><br />
      {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
    </div>
  );
};

export default Counter;
