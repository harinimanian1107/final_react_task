import React from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') || 'all';

  const servicesList = [
    { id: 'general', name: 'General Checkup', category: 'routine' },
    { id: 'cardiology', name: 'Cardiology Clinic', category: 'specialist' },
    { id: 'pediatrics', name: 'Pediatrics Department', category: 'specialist' },
  ];

  const filteredServices = filter === 'all' 
    ? servicesList 
    : servicesList.filter(s => s.category === filter);

  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '2rem' }}>
      {/* Sidebar with Search Params Filter */}
      <div style={{ width: '30%', borderRight: '1px solid #ccc', paddingRight: '1rem' }}>
        <h3>Our Departments</h3>
        <div style={{ marginBottom: '1rem' }}>
          <button onClick={() => setSearchParams({ filter: 'all' })} style={{ marginRight: '5px' }}>All</button>
          <button onClick={() => setSearchParams({ filter: 'routine' })} style={{ marginRight: '5px' }}>Routine</button>
          <button onClick={() => setSearchParams({ filter: 'specialist' })}>Specialist</button>
        </div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {filteredServices.map(service => (
            <li key={service.id} style={{ margin: '10px 0' }}>
              <Link to={`/services/${service.id}`} style={{ textDecoration: 'none', color: '#2980b9', fontWeight: 'bold' }}>
                👉 {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Nested View Area */}
      <div style={{ width: '70%', padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
        <Outlet />
      </div>
    </div>
  );
}