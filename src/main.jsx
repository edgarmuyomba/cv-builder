import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Aside from './components/Aside.jsx'
import './css/index.css'
import './css/aside.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Aside />
  </React.StrictMode>,
)
