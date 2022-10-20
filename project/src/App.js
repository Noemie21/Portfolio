import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MaintenancePage from './Pages/MaintenancePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/maintenance" element={<MaintenancePage />} />
        <Route
          path="*"
          element={
            <Navigate to={ '/maintenance' } replace />
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
