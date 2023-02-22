import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const notes = [
  {
    id: 1, 
    content: 'HTML is easy',
    date: '2023-02-14',
    important: true
  },
  {
    id: 2, 
    content: 'Browser can execute only Javascript',
    date: '2023-02-15',
    important: false
  },
  {
    id: 3, 
    content: 'GET andd POST are  the most important methods of HTTP protocol',
    date: '2023-02-15',
    important: true
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App notes={notes} />
  </React.StrictMode>
);
