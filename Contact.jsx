import React from 'react';
import { useFetch } from '../hooks/useFetch';
// src/pages/Contact.js
export function Contact() {
  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Emergency Coordination Desk</h2>
      <div style={{ background: '#fdfefe', border: '1px solid #e1e8ed', padding: '2rem', borderRadius: '8px', marginTop: '1.5rem' }}>
        <p>🚨 **Emergency Dispatch Primary:** +91 1234567890</p>
        <p>📧 **Digital Inquiries Routing Office:** helpdesk@medicalcare.org</p>
        <p>📍 **Central Facility Location:** Sangam Medical Care,Salem-1</p>
      </div>
    </div>
  );
}