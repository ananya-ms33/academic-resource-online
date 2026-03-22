//config.ts
//if localhost open in local host if not use the real website
const isLocal = typeof window !== 'undefined' && window.location.hostname === 'localhost';


export const CONFIG = {
  API_URL: isLocal ? 'http://localhost:3000' : 'https://academic-resource-online.onrender.com',

  STUDENT_APP_URL: isLocal ? 'http://localhost:5173' : 'https://academic-resource-online-student.onrender.com'
};
