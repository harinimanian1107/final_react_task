export const initialState = [
  { id: 1, doctor: "Dr. Agilan (Cardiology)", date: "2026-06-20", time: "10:00 AM" },
  { id: 2, doctor: "Dr. Yugan (Pediatrics)", date: "2026-06-22", time: "02:30 PM" }
];

export const appointmentReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_APPOINTMENT':
      return [...state, { id: Date.now(), ...action.payload }];
    case 'UPDATE_APPOINTMENT':
      return state.map(app => app.id === action.payload.id ? action.payload : app);
    case 'DELETE_APPOINTMENT':
      return state.filter(app => app.id !== action.payload);
    default:
      return state;
  }
};