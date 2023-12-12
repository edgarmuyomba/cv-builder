function PersonalForm({ updateContent }) {
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
                            console.log(e.target.value);
                            updateContent((content) => ({...content, name: e.target.value}))
                        }} />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" name="phone" id="phone" placeholder="Phone" />
                </div>
                <div className="field">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" placeholder="Address" />
                </div>
                <div className="field">
                    <label htmlFor="job">Job Title</label>
                    <input type="text" name="job" id="job" placeholder="Current Job Title" />
                </div>
            </form>
        </section>
    );
}

function EducationForm() {
    return (
        <section className="education">
            <p className="title">
                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>school</title><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" /></svg></span>
                Education
            </p>
            <form action="" method="POST">
                <div className="field">
                    <label htmlFor="school">School</label>
                    <input type="text" name="school" id="school" placeholder="School" />
                </div>
                <div className="field">
                    <label htmlFor="degree">Degree</label> 
                    <input type="text" name="degree" id="degree" placeholder="Degree" />
                </div>
                <div className="dates">
                    <div className="field">
                        <label htmlFor="start">Start Year</label>
                        <input type="text" name="start" id="start" placeholder="Start" />
                    </div>
                    <div className="field">
                        <label htmlFor="end">End Year</label>
                        <input type="text" name="end" id="end" placeholder="End" />
                    </div>
                </div>
            </form>
            <div className="actions">
                    <button id="delete">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg>
                        </span>
                        Delete
                    </button>
                    <button id="cancel">Cancel</button>
                    <button id="save">Save</button>
                </div>
        </section>
    );
}

function WorkForm() {
    return (
        <section className="work">
            <p className="title">
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>briefcase-variant</title><path d="M10 16V15H3L3 19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15H14V16H10M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H14V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7M14 7H10V5H14V7Z" /></svg></span>
                Experience
            </p>
            <form action="" method="post">
                <div className="field">
                    <label htmlFor="name">Company Name</label>
                    <input type="text" name="name" id="name" placeholder="Company Name" />
                </div>
                <div className="field">
                    <label htmlFor="position">Position (title)</label>
                    <input type="text" name="position" id="position" placeholder="Position" />
                </div>
                <div className="dates">
                    <div className="field">
                        <label htmlFor="start">Start Year</label>
                        <input type="text" name="start" id="start" placeholder="Start" />
                    </div>
                    <div className="field">
                        <label htmlFor="end">End Year</label>
                        <input type="text" name="end" id="end" placeholder="End" />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" id="location" placeholder="Location"/>
                </div>
                <div className="field">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" placeholder="Job Description" />
                </div>
            </form>
            <div className="actions">
                <button id="delete">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg>
                    </span>
                    Delete
                </button>
                <button id="cancel">Cancel</button>
                <button id="save">Save</button>
            </div>
        </section>
    );
}

export { PersonalForm, EducationForm, WorkForm };