import React from 'react';
import './App.css';
import Avatar from './components/Avatar';

function App() {
  return (
    <div className="App">
      <Avatar theme='primary' testIdPrefix='abc' />
    </div>
  );
}

export default App;
