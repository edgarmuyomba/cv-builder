import React from 'react'
import ReactDOM from 'react-dom/client'
import Aside from './components/Aside.jsx'
import Main from './components/Main.jsx'
import './css/index.css'
import './css/aside.css';
import './css/main.css';
import { useState } from 'react';

function Resume() {
  const resume_content = {
    profile: {
      name: 'Abu Sayed Ahmed',
      job_title: 'Graphic Designer'
    },
    contact: {
      phone: '+880 1866 388881',
      email: 'iwantsahmed@gmail.com',
      location: 'Chattogram, Bangladesh'
    }
  };

  const [content, setContent] = useState(resume_content);
  
  return (
    <>
      <Aside />
      <Main />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>,
)


/* 
  cv-prop = {
    info: {
      educ_record: {
        course: ...,
        campus: ...,
        years: ...
      }
    },
    contact: {
      phone: ...,
      email: ...,
      location: ...,
    },
    profile: {
      name: ...,
      job_title: ...
    },
    work: {
      work_record: {
        role: ...,
        company: ...,
        period: {
          start: ..,
          end: ..
        }
      }
    }
  }
*/