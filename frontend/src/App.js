import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Distribution from './components/Distribution';
import Forecast from './components/Forecast';
import Objects from './components/Objects';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const saveToken = (userToken) => {
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  const PrivateRoute = ({ element: Element }) => {
    return token ? <Element /> : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div>
        <NavBar token={token} setToken={saveToken} />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setToken={saveToken} />} />
          <Route path="/distribution" element={<PrivateRoute element={Distribution} />} />
          <Route path="/forecast" element={<PrivateRoute element={Forecast} />} />
          <Route path="/objects" element={<PrivateRoute element={Objects} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
