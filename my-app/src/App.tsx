import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import UsersList from "./users/UsersList"
import UserDetailPage from './users/UserDetailPage';

function App() {
  return (
    <div className="py-5 md:p-10 text-gray-400">
      <Routes>
        <Route path='/' element={<Navigate to="user"/>} />
        <Route path='/user' element={<UsersList/>} />
        <Route path='/user/:id' element={<UserDetailPage/>} />
      </Routes>
    </div>
  );
}

export default App;
