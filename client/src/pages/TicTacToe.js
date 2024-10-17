import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [mode, setMode] = useState('two-player');
    const [isGameOver, setIsGameOver] = useState(false);

    const handleClick = (index) => {
        if (board[index] || isGameOver) return;

        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);

        const winner = calculateWinner(newBoard);
        if (winner) {
            setIsGameOver(true);
            return;
        }

        if (mode === 'vs-computer' && isXNext) {
            // Switch to the next player and make the computer move
            setIsXNext(false);
            setTimeout(() => computerMove(newBoard), 500);
        } else {
            // Switch to the next player
            setIsXNext(!isXNext);
        }
    };

    const computerMove = (newBoard) => {
        const emptySquares = newBoard.map((value, index) => value === null ? index : null).filter(v => v !== null);
        if (emptySquares.length === 0) return;

        const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
        newBoard[randomIndex] = 'O';
        setBoard(newBoard);

        const winner = calculateWinner(newBoard);
        if (winner) {
            setIsGameOver(true);
        } else {
            setIsXNext(true); // Switch back to player
        }
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = calculateWinner(board);
    const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

    const renderSquare = (index) => (
        <button 
            className={`square ${board[index]}`} 
            onClick={() => handleClick(index)}
        >
            {board[index]}
        </button>
    );

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setIsGameOver(false);
    };

    return (
        <div className="game-container">
            <div className="game">
                <div className="status">{status}</div>
                <div className="mode-selection">
                    <button onClick={() => setMode('two-player')} className={mode === 'two-player' ? 'active' : ''}>2 Player</button>
                    <button onClick={() => setMode('vs-computer')} className={mode === 'vs-computer' ? 'active' : ''}>Vs Computer</button>
                </div>
                <div className="board">
                    <div className="board-row">
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </div>
                </div>
                <button className="reset" onClick={resetGame}>
                    Reset Game
                </button>
            </div>
        </div>
    );    
};

export default TicTacToe;
