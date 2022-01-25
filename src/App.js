import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

import Login from './pages/login';
import Todo from './pages/todo';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={ false ? <Navigate replace to="/signin" /> : <Todo /> } />
          <Route 
              path="/signin" 
              element={false ? (<Navigate  replace to="/"/>) : <Login />}
          />
      </Routes>
    </div>
  );
}

export default App;
