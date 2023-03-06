import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from './components/Login';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
