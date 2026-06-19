import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// View File Modules
import Home from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';
import { Login } from './pages/Login';
import Services from './pages/Services';
import GeneralCheckup from './pages/GeneralCheckup';
import Cardiology from './pages/Cardiology';
import Pediatrics from './pages/Pediatrics';
// import ServiceDetail from './pages/ServiceDetail';
import Appointments from './pages/Appointments';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f5f6fa', fontFamily: 'system-ui, sans-serif' }}>
          <Navbar />
          
          <main style={{ flex: '1 0 auto' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              
              {/* Nested Application Routing Configuration */}
              <Route path="/services" element={<Services />}>
                <Route index element={<p style={{ color: '#7f8c8d' }}>Please select a department from the left listing panel to inspect services details.</p>} />
                <Route path="general" element={<GeneralCheckup />} />
                <Route path="cardiology" element={<Cardiology />} />
                <Route path="pediatrics" element={<Pediatrics />} />
              </Route>

              {/* CRUD Interactions Section */}
              <Route path="/appointments" element={<Appointments />} />
              
              {/* Authenticated Protected Route Execution */}
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />

              {/* Catch-All Fallback Rule */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <footer style={{ background: '#2c3e50', color: '#bdc3c7', padding: '1rem', textAlign: 'center', borderTop: '4px solid #34495e', flexShrink: 0 }}>
            © 2026 Sanagam Integrated Clinical Systems. Managed under compliant framework regulations.
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}