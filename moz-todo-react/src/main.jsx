import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// eslint-disable-next-line 
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

/*
const BUTTONS = [
  {name: "All"},
  {name: "Active"},
  {name: "Completed"},
];
*/


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA} buttons={BUTTONS} />
  </React.StrictMode>,
)
