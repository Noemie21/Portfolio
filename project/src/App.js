import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/maintenance" element={<HomePage />} />
        <Route
          path="*"
          element={
            <Navigate to={ '/maintenance' } replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
