import React from 'react'
import ReactDOM from 'react-dom/client'
import Aside from './components/Aside.jsx'
import Main from './components/Main.jsx'
import './css/index.css'
import './css/aside.css';
import './css/main.css';
import './css/print.css';
import { useState } from 'react';

function Resume() {
  const resume_content = {
    profile: {
      name: 'Edgar Muyomba',
      job_title: 'Software Engineer',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga debitis veritatis optio blanditiis laborum eligendi consectetur repellendus eveniet! Laboriosam sapiente cumque recusandae repellat laudantium a, iste eum dolores earum saepe.'
    },
    contact: {
      phone: '+256 758 101 803',
      email: 'edgarmatthew247@gmail.com',
      location: 'Makerere, Kikoni'
    },
    education: [
      {
        course: 'Computer Science',
        campus: 'Makerere University',
        period: {
          start: '2022',
          end: '2024'
        }
      },
      {
        course: 'Science',
        campus: 'Hajera Taju University College',
        period: {
          start: '2016',
          end: '2018'
        }
      }
    ],
    work: [
      {
        role: 'Mobile Application Developer',
        company: 'Ridelink Inc',
        description: 'Worked as a data analyst / data entry operator. Led a team and worked with a personalized application',
        period: {
          start: '2023',
          end: 'Present'
        }
      },
      {
        role: 'Data Analyst / Data Entry Operator',
        company: 'Intelligent Image Management Limited',
        description: 'Worked as a data analyst / data entry operator. Led a team and worked with a personalized application',
        period: {
          start: '2020',
          end: '2023'
        }
      }
    ]
  };

  const [content, setContent] = useState(resume_content);
  
  return (
    <>
      <Aside content={content} updateContent={setContent} />
      <Main updateResume={setContent} resume_content={content} />
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