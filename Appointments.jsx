import React, { useReducer, useState, useRef } from 'react';
import { appointmentReducer, initialState } from '../reducers/appointmentReducer';

export default function Appointments() {
  const [appointments, dispatch] = useReducer(appointmentReducer, initialState);
  const [form, setForm] = useState({ doctor: '', date: '', time: '' });
  const [editingId, setEditingId] = useState(null);
  const [errors, setErrors] = useState({});
  
  const doctorInputRef = useRef(null); // Demonstrating useRef

  // Handle Input Changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Simple Form Validation
  const validateForm = () => {
    let tempErrors = {};
    if (!form.doctor) tempErrors.doctor = "Doctor preference is required.";
    if (!form.date) tempErrors.date = "Please select a valid date.";
    if (!form.time) tempErrors.time = "Please pick an appointment slot.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Create / Update Action
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (editingId) {
      dispatch({ type: 'UPDATE_APPOINTMENT', payload: { id: editingId, ...form } });
      setEditingId(null);
    } else {
      dispatch({ type: 'ADD_APPOINTMENT', payload: form });
    }
    
    setForm({ doctor: '', date: '', time: '' }); // Reset
    doctorInputRef.current.focus(); // Refocus to doctor selection
  };

  // Edit Prep Trigger
  const startEdit = (app) => {
    setEditingId(app.id);
    setForm({ doctor: app.doctor, date: app.date, time: app.time });
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>📅 Schedule & Manage Appointments</h2>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} style={{ background: '#f5f6fa', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h3>{editingId ? "✏️ Modify Appointment" : "🆕 Book New Appointment"}</h3>
        <div style={{ marginBottom: '10px' }}>
          <label>Choose Doctor: </label>
          <select name="doctor" value={form.doctor} onChange={handleChange} ref={doctorInputRef} style={{ width: '100%', padding: '8px' }}>
            <option value="">-- Select Specialist --</option>
            <option value="Dr. Smith (Cardiology)">Dr. Smith (Cardiology)</option>
            <option value="Dr. Adams (Pediatrics)">Dr. Adams (Pediatrics)</option>
            <option value="Dr. Taylor (General Medicine)">Dr. Taylor (General Medicine)</option>
          </select>
          {errors.doctor && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.doctor}</span>}
        </div>

        <div style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>Date: </label>
            <input type="date" name="date" value={form.date} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
            {errors.date && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.date}</span>}
          </div>
          <div style={{ flex: 1 }}>
            <label>Time Slot: </label>
            <input type="time" name="time" value={form.time} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
            {errors.time && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.time}</span>}
          </div>
        </div>

        <button type="submit" style={{ padding: '10px 20px', background: '#2980b9', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {editingId ? "Save Modifications" : "Confirm Booking"}
        </button>
      </form>

      {/* Appointments List Render (Read & Delete) */}
      <h3>Your Active Schedule</h3>
      {appointments.length === 0 ? <p>No active appointments scheduled.</p> : (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {appointments.map(app => (
            <div key={app.id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4>{app.doctor}</h4>
                <p style={{ margin: 0, color: '#555' }}>📆 {app.date} | ⏰ {app.time}</p>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => startEdit(app)} style={{ background: '#f39c12', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
                <button onClick={() => dispatch({ type: 'DELETE_APPOINTMENT', payload: app.id })} style={{ background: '#e74c3c', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}