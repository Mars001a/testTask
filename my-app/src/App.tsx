import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import UsersList from "./features/users/UsersList"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="user"/>} />
      <Route path='/user' element={<UsersList/>} />
      <Route path='/user/:id' element={<UsersList/>} />
    </Routes>
  );
}

export default App;
