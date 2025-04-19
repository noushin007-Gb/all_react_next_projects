import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './path-to-component/Dashboard';
import AdminReadingBooks from './path-to-component/AdminReadingBooks';
import AdminDashboardForm from './pages/admin-dashboard-form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-reading-books" element={<AdminReadingBooks />} />
        <Route path="/admin-dashboard-form" element={<AdminDashboardForm />} />
      </Routes>
    </Router>
  );
}

export default App;
