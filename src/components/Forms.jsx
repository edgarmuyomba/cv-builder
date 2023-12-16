import { useState } from "react";

function PersonalForm({ updateContent }) {
    var updates = {};

    return (
        <section className="personal">
            <p className="title">Personal Information</p>
            <form action="" method="POST">
                <div className="field">
                    <label htmlFor="fullname">Fullname</label>
                    <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        placeholder="First and Last name"
                        onChange={(e) => {
                            try {
                                updates['profile']['name'] = e.target.value;
                            } catch (TypeError) {
                                updates['profile'] = {};
                                updates['profile']['name'] = e.target.value;
                            }
                        }} />
                </div>
                <div className="field">
                    <label htmlFor="job">Job Title</label>
                    <input
                        type="text"
                        name="job"
                        id="job"
                        placeholder="Current Job Title"
                        onChange={(e) => {
                            try {
                                updates['profile']['job_title'] = e.target.value;
                            } catch (TypeError) {
                                updates['profile'] = {};
                                updates['profile']['job_title'] = e.target.value;
                            }
                        }} />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={(e) => {
                            try {
                                updates['contact']['email'] = e.target.value;
                            } catch (TypeError) {
                                updates['contact'] = {};
                                updates['contact']['email'] = e.target.value;
                            }
                        }} />
                </div>
                <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        onChange={(e) => {
                            try {
                                updates['contact']['phone'] = e.target.value;
                            } catch (TypeError) {
                                updates['contact'] = {};
                                updates['contact']['phone'] = e.target.value;
                            }
                        }} />
                </div>
                <div className="field">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                        onChange={(e) => {
                            try {
                                updates['contact']['location'] = e.target.value;
                            } catch (TypeError) {
                                updates['contact'] = {};
                                updates['contact']['location'] = e.target.value;
                            }
                        }} />
                </div>
                <div className="actions">
                    <button id="submit" type="submit" onClick={(e) => {
                        e.preventDefault();
                        updateContent((prevContent) => ({ ...prevContent, ...updates }));
                    }}>
                        Update
                    </button>
                </div>
            </form>
        </section>
    );
}

function EducationForm({ content, updateContent }) {
    const [open, setOpen] = useState(false);
    const [view, setView] = useState(true);

    var educ_record = {};

    return (
        open === true
            ? view === true
                ?
                <section className="education">
                    <div className="header" onClick={() => {
                        setOpen((open) => !open);
                        setView((view) => view = true);
                    }}>
                        <p className="title">
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>school</title><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" /></svg></span>
                            Education
                        </p>
                        <div className="drop">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Close</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
                        </div>
                    </div>

                    <div className="add-container">
                        <div className="add" onClick={() => {
                            setView((view) => view = !view);
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                            <p>Add Education</p>
                        </div>
                    </div>
                </section>
                :
                <section className="education">
                    <div className="header" onClick={() => {
                        setOpen((open) => !open);
                        setView((view) => view = true);
                    }}>
                        <p className="title">
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>school</title><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" /></svg></span>
                            Education
                        </p>
                        <div className="drop" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Close</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
                        </div>
                    </div>
                    <form action="" method="POST">
                        <div className="field">
                            <label htmlFor="school">School</label>
                            <input
                                type="text"
                                name="school"
                                id="school"
                                placeholder="School"
                                onChange={(e) => {
                                    educ_record['campus'] = e.target.value;
                                }} />
                        </div>
                        <div className="field">
                            <label htmlFor="degree">Degree</label>
                            <input
                                type="text"
                                name="degree"
                                id="degree"
                                placeholder="Degree"
                                onChange={(e) => {
                                    educ_record['course'] = e.target.value;
                                }} />
                        </div>
                        <div className="dates">
                            <div className="field">
                                <label htmlFor="start">Start Year</label>
                                <input
                                    type="number"
                                    min={1900}
                                    max={3000}
                                    name="start"
                                    id="start"
                                    placeholder="Start"
                                    onChange={(e) => {
                                        try {
                                            educ_record['period']['start'] = e.target.value;
                                        } catch (TypeError) {
                                            educ_record['period'] = {};
                                            educ_record['period']['start'] = e.target.value;
                                        }
                                    }} />
                            </div>
                            <div className="field">
                                <label htmlFor="end">End Year</label>
                                <input
                                    type="number"
                                    min={1900}
                                    max={3000}
                                    name="end"
                                    id="end"
                                    placeholder="End"
                                    onChange={(e) => {
                                        try {
                                            educ_record['period']['end'] = e.target.value;
                                        } catch (TypeError) {
                                            educ_record['period'] = {};
                                            educ_record['period']['end'] = e.target.value;
                                        }
                                    }} />
                            </div>
                        </div>
                    </form>
                    <div className="actions">
                        <button id="cancel" onClick={() => {
                            setView((view) => view = !view);
                            setOpen((open) => open = !open);
                        }}>Cancel</button>
                        <button id="save" onClick={() => {
                            var prevEducation = content.education;
                            prevEducation.push(educ_record);
                            updateContent((content) => ({ ...content, education: prevEducation }));
                            setView((view) => view = !view);
                        }}>Save</button>
                    </div>
                </section>
            : <section id="closed">
                <div className="header" onClick={() => {
                    setOpen((open) => !open);
                    setView((view) => view = true);
                }}>
                    <p className="title">
                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>school</title><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" /></svg></span>
                        Education
                    </p>
                    <div className="drop" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Open</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                    </div>
                </div>
            </section>
    );
}

function WorkForm({ content, updateContent }) {
    const [open, setOpen] = useState(false);
    const [view, setView] = useState(true);

    var work_record = {};

    return (
        open === true
            ?
            view === true
                ?
                <section className="work">
                    <div className="header" onClick={() => {
                        setOpen((open) => open = !open);
                        setView((view) => view = true);
                    }}>
                        <p className="title">
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>briefcase-variant</title><path d="M10 16V15H3L3 19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15H14V16H10M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H14V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7M14 7H10V5H14V7Z" /></svg></span>
                            Experience
                        </p>
                        <div className="drop">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Close</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
                        </div>
                    </div>
                    <div className="add-container">
                        <div className="add" onClick={() => {
                            setView((view) => view = !view);
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                            <p>Add Work</p>
                        </div>
                    </div>
                </section>
                :
                <section className="work">
                    <div className="header" onClick={() => {
                        setOpen((open) => open = !open);
                        setView((view) => view = true);
                    }}>
                        <p className="title">
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>briefcase-variant</title><path d="M10 16V15H3L3 19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15H14V16H10M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H14V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7M14 7H10V5H14V7Z" /></svg></span>
                            Experience
                        </p>
                        <div className="drop">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Close</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
                        </div>
                    </div>
                    <form action="" method="post">
                        <div className="field">
                            <label htmlFor="name">Company Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Company Name"
                                onChange={(e) => {
                                    work_record['company'] = e.target.value;
                                }} />
                        </div>
                        <div className="field">
                            <label htmlFor="position">Position (title)</label>
                            <input
                                type="text"
                                name="position"
                                id="position"
                                placeholder="Position"
                                onChange={(e) => {
                                    work_record['role'] = e.target.value;
                                }} />
                        </div>
                        <div className="dates">
                            <div className="field">
                                <label htmlFor="start">Start Year</label>
                                <input
                                    type="text"
                                    name="start"
                                    id="start"
                                    placeholder="Start"
                                    onChange={(e) => {
                                        try {
                                            work_record['period']['start'] = e.target.value;
                                        } catch (TypeError) {
                                            work_record['period'] = {};
                                            work_record['period']['start'] = e.target.value;
                                        }
                                    }} />
                            </div>
                            <div className="field">
                                <label htmlFor="end">End Year</label>
                                <input
                                    type="text"
                                    name="end"
                                    id="end"
                                    placeholder="End"
                                    onChange={(e) => {
                                        try {
                                            work_record['period']['end'] = e.target.value;
                                        } catch (TypeError) {
                                            work_record['period'] = {};
                                            work_record['period']['end'] = e.target.value;
                                        }
                                    }} />
                            </div>
                        </div>
                        {/* <div className="field">
                            <label htmlFor="location">Location</label>
                            <input 
                                    type="text" 
                                    name="location" 
                                    id="location" 
                                    placeholder="Location"
                                    onChange={(e) => {
                                        work_record['loca'] = e.target.value;
                                    }} />
                        </div> */}
                        <div className="field">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Job Description"
                                onChange={(e) => {
                                    work_record['description'] = e.target.value;
                                }} />
                        </div>
                    </form>
                    <div className="actions">
                        <button id="cancel" onClick={() => {
                            setView((view) => view = !view);
                            setOpen((open) => open = !open);
                        }}>Cancel</button>
                        <button id="save" onClick={() => {
                            var prevWork = content.work;
                            prevWork.push(work_record);
                            updateContent((content) => ({ ...content, work: prevWork }));
                            setView((view) => view = !view);
                        }}>Save</button>
                    </div>
                </section>
            :
            <section className="work">
                <div className="header" onClick={() => {
                    setOpen((open) => open = !open);
                    setView((view) => view = true);
                }}>
                    <p className="title">
                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>briefcase-variant</title><path d="M10 16V15H3L3 19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15H14V16H10M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H14V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7M14 7H10V5H14V7Z" /></svg></span>
                        Experience
                    </p>
                    <div className="drop" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Open</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                    </div>
                </div>
            </section>
    );
}

export { PersonalForm, EducationForm, WorkForm };