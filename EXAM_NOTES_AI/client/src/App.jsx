import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Auth from './pages/auth';
export const serverURL = "http://localhost:8000";
function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
