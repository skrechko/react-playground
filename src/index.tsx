import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 1. Підключити AuthProvider
// 2. Передати юзера через пропс user;
// 3. Вивести ім'я юзера в компоненті AuthConsumer;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const currentUser = {
  name: 'John Doe',
  email: 'john@t.net',
  avatar: 'https://www.gravatar.com/avatar/0?d=mp',
  phoneNumbers: ['123-456-7890', '123-456-7891'],
  jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
