import React from 'react';
import './App.css';
import List from './components/List';
import Navbar from './Navbar'
import News from './News';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <List/>
    <News/>
     
      
    </div>
  );
}

export default App;
