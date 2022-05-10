import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
