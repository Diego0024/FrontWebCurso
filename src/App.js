
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
 import Dashboard from './components/Dashboard';
 import Login from './components/Login';
 import Profile from './components/Profile';
 import Admin from './components/Admin';
import Navbar from './components/Navbar';
import React from 'react';




function App() {
  return (
    <div className="App">
    <HashRouter>
      
        <Navbar />
       
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </HashRouter>
    
  </div>
  );
}

export default App;
