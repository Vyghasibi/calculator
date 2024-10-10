"use client"
import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'left' }}>
      <h1>Calculator-Vygha</h1>
      <input 
        type="text" 
        value={input} 
        readOnly 
        style={{
          width: '60%',
          height: '40px',
          fontSize: '2rem',
          textAlign: 'right',
          marginBottom: '10px',
          padding: '10px',
          border: '10px solid #ccc',
          borderRadius: '5px',
        }} 
      />
      <div style={{ display: 'flex', justifyContent: 'right' }}>
        <div style={{ marginRight: '20px' }}>
          {['1', '2', '3', '4', '5',
           '6', '7', '8', '9', '0'].map((button) => (
            <button
              key={button}
              onClick={() => handleClick(button)}
              style={{
                width: '60px',
                height: '60px',
                fontSize: '1.5rem',
                margin: '5px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#4CAF50',
                color: 'white',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            >
              {button}
            </button>
          ))}
        </div>
        <div>
          {['+', '-', '*', 'C', '='].map((button) => (
            <button
              key={button}
              onClick={() => {
                if (button === 'C') {
                  handleClear();
                } else if (button === '=') {
                  handleCalculate();
                } else {
                  handleClick(button);
                }
              }}
              style={{
                width: '60px',
                height: '60px',
                fontSize: '1.5rem',
                margin: '5px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#f39c12',
                color: 'white',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
