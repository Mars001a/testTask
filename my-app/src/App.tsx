import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import UsersList from "./features/users/UsersList"
import UserDetailPage from './features/users/UserDetailPage';

function App() {
  return (
    <div className="p-10 text-gray-400">
      <Routes>
        <Route path='/' element={<Navigate to="user"/>} />
        <Route path='/user' element={<UsersList/>} />
        <Route path='/user/:id' element={<UserDetailPage/>} />
      </Routes>
    </div>
  );
}

export default App;
