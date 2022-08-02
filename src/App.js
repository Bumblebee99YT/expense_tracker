import React from 'react';
import './App.css';
import Child from './Child.js'
import { TransactionProvider } from './TransactionContext.js';

function App() {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}

export default App;
