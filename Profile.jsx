import React from 'react'
import { AuthContext } from '../context/AuthContext';
export function Profile() {
  const { user } = React.useContext(AuthContext);
  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Protected Patient Dashboard</h2>
      <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '8px', marginTop: '1.5rem' }}>
        <h3>Welcome Back, {user?.name}!</h3>
        
      </div>
    </div>
  );
}
