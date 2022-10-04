import React from 'react';
import { NavBar } from './components/NavBar';
import { Board } from './components/Board';
import { Keyboard } from './components/Keyboard';
import { WordleContextProvider } from './context/WordleContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="game">
        <WordleContextProvider>
          <Board />
          <Keyboard />
        </WordleContextProvider>
      </div>
    </div>
  );
}

export default App;
