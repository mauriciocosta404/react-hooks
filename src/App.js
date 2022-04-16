import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import DoubleCounter from './components/DoubleCounter';
import CounterProvider from './contexts/CounterContext';

function App() {
  
  return (
    <>
    <CounterProvider>
      <Counter/>
      <DoubleCounter/>   
    </CounterProvider>
    </>
  );
}

export default App;
