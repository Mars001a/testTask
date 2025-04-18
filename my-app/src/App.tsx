import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import UsersList from "./features/users/UsersList"
import UserDetailPage from './features/users/UserDetailPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="user"/>} />
      <Route path='/user' element={<UsersList/>} />
      <Route path='/user/:id' element={<UserDetailPage/>} />
    </Routes>
  );
}

export default App;
