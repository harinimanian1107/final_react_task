import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#3498db' : '#ffffff',
    textDecoration: 'none',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px',
    borderRadius: '4px',
    background: isActive ? '#34495e' : 'transparent'
  });

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: '#2c3e50', color: '#fff' }}>
      <h2 style={{ margin: 0, cursor: 'pointer' }} onClick={() => navigate('/')}>🏥 SMCH</h2>
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/services" style={linkStyle}>Services</NavLink>
        <NavLink to="/appointments" style={linkStyle}>Appointments</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
        {user ? (
          <>
            <NavLink to="/profile" style={linkStyle}>Welcome,{user.name}</NavLink>
            <button onClick={handleLogout} style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}>Logout</button>
          </>
        ) : (
          <NavLink to="/login" style={linkStyle}>Login</NavLink>
        )}
      </div>
    </nav>
  );
}