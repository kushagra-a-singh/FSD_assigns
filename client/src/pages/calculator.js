import React, { useState, useEffect } from 'react';
import styles from './calculator.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Calculator = () => {
    const [input, setInput] = useState('');  // Input for calculator
    const [result, setResult] = useState('');
    const [history, setHistory] = useState([]);

    // Function to handle button clicks
    const handleClick = (value) => {
        if (value === 'C') {
            setInput('');  
            setResult(''); 
        } else if (value === '=') {
            try {
                const evalResult = eval(input).toString();
                setResult(evalResult);
                setHistory([...history, `${input} = ${evalResult}`]);  // Store history
            } catch (error) {
                setResult('Error');
            }
        } else {
            // Prevent multiple operators in a row
            const operators = ['+', '-', '*', '/'];
            if (operators.includes(value) && operators.includes(input.slice(-1))) return;
            setInput(input + value);
        }
    };

    // Handle keyboard events
    useEffect(() => {
        const handleKeyPress = (event) => {
            const key = event.key;
            if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
                handleClick(key);
            } else if (key === 'Enter') {
                handleClick('=');
            } else if (key === 'Backspace') {
                setInput(input.slice(0, -1));
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [input, history]);

    return (
        <div className="calculator">
            
            <div className="content">
                <div className="calculator-display">
                    <input type="text" value={input} placeholder="0" readOnly />
                    <div className="result">{result}</div>
                </div>
                <div className="calculator-buttons">
                    {['C', '/', '*', '-', '7', '8', '9', '+', '4', '5', '6', '=', '1', '2', '3', '.', '0']
                        .map((value) => (
                            <button key={value} onClick={() => handleClick(value)}>{value}</button>
                        ))}
                </div>
                <div className="history">
                    <h3>History</h3>
                    <ul>
                        {history.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Calculator;
