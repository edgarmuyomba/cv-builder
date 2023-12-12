import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Aside from './components/Aside.jsx'
import Main from './components/Main.jsx'
import './css/index.css'
import './css/aside.css';
import './css/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Aside />
    <Main />
  </React.StrictMode>,
)
