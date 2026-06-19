// src/pages/Home.js
import React from 'react';
import { useFetch } from '../hooks/useFetch';

const rosterMock = [
  { name: 'Dr. Agilan', role: 'Cardiology Head', active: true },
  { name: 'Dr. Yugan', role: 'Chief Pediatrician', active: false },
  { name: 'Dr. Ezhil', role: 'General Medicine Executive', active: true }
];

export default function Home() {
  const { data: staff, loading } = useFetch(rosterMock);

  return (
    <div style={{ padding: '3rem 2rem', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>Sangam Medical Care Hospital</h1>
      <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>Welcome to Sangam Medical Care. Access real-time multi-department tools instantly.</p>
      <hr style={{ margin: '2.5rem 0', borderColor: '#f1f2f6' }} />
      <h3>On-Duty Professional Status</h3>
      {loading ? <p>Synchronizing healthcare registry database files...</p> : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
          {staff.map((doc, idx) => (
            <div key={idx} style={{ padding: '1.5rem', borderRadius: '8px', border: '1px solid #e1e8ed', background: '#fff' }}>
              <h4>{doc.name}</h4>
              <p style={{ color: '#95a5a6', fontSize: '0.9rem' }}>{doc.role}</p>
              <span style={{ display: 'inline-block', padding: '4px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', background: doc.active ? '#eafaf1' : '#fdedec', color: doc.active ? '#2cc71' : '#e74c3c' }}>
                {doc.active ? '● Operational' : '○ Standby'}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}







