import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username==''){
      login();
      navigate('/profile')
    }
  };

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '400px', margin: '0 auto' }}>
      <form 
        onSubmit={handleSubmit} 
        style={{ border: '1px solid #ccc', padding: '2rem', borderRadius: '8px', background: '#fff' }}
      >
        <h3 style={{ marginTop: 0 }}>Patient Login</h3>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Patient_name
          </label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="e.g. Mithran" 
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} 
          />
        </div>
        
        <button 
          type="submit" 
          style={{ width: '100%', padding: '10px', background: '#3498db', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Login
        </button>
      </form>
    </div>
  );
}