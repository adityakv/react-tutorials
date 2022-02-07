import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate, Routes } from 'react-router-dom';

import Login from './pages/login';
import Todo from './pages/todo';

function App() {
  const isloggedIn = useSelector(state => state.isloggedIn)
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={ !isloggedIn ? <Navigate replace to="/signin" /> : <Todo /> } />
          <Route 
              path="/signin" 
              element={isloggedIn ? (<Navigate  replace to="/"/>) : <Login />}
          />
      </Routes>
    </div>
  );
}

export default App;
