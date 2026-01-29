import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import Records from './pages/Records';
import Booking from './pages/Booking';
import AIAssistant from './pages/AIAssistant';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="records" element={<Records />} />
          <Route path="booking" element={<Booking />} />
          <Route path="ai" element={<AIAssistant />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
