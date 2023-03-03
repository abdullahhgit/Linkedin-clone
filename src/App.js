import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element="" />

          {/* Header */}
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Feed />
            {/* Widgets */}
            
          </div>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
