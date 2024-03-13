import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Registration from './Components/Registration';
import Users from './Components/Users';
import axios from 'axios';
import Login from './Components/Login';
import { useEffect, useState } from 'react';
import ProtectedRoute from './Components/ProtectedRoute';


function App() {

  axios.defaults.baseURL = 'http://localhost:8000/user'

  return (
    <BrowserRouter>
      <div className='App' >
        <Navbar />
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='/users' element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          } />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App