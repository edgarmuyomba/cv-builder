function Info() {
    return (
        <div className="info">
            <img src="https://picsum.photos/250/300" alt="" className="profile_image" />
            <div className="education">
                <p className="title">EDUCATION</p>
                <div className="tag"></div>
                <div className="educ_record">
                    <p className="course">SCIENCE</p>
                    <p className="campus">Hajera Taju University College</p>
                    <p className="years">2016-2018</p>
                </div>
                <div className="educ_record">
                    <p className="course">SCIENCE</p>
                    <p className="campus">Hajera Taju University College</p>
                    <p className="years">2016-2018</p>
                </div>
            </div>
        </div>
    );
}

function Contact() {
    return (
        <div className="contact_details">
            <div className="icons">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>phone</title>
                    <path
                        d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>email</title>
                    <path
                        d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>map-marker</title>
                    <path
                        d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                </svg>
            </div>
            <div className="contact">
                <p className="title">Phone</p>
                <p className="value">+880 1866 388881</p>
            </div>
            <div className="contact">
                <p className="title">Email</p>
                <p className="value">iwantsahmed@gmail.com</p>
            </div>
            <div className="contact">
                <p className="title">Location</p>
                <p className="value">Chattogram, Bangladesh</p>
            </div>
        </div>
    );
}

function Profile() {
    return (
        <div className="profile">
            <p className="name">Abu Sayed Ahmed</p>
            <p className="job">Graphic Designer</p>
            <p className="title">PROFILE</p>
            <div className="tag"></div>
            <p className="brief">
                I am Abu Sayed Ahmed. Son of Mohammed Abu Tayab and Nasrin Sultana Khanam. Born on 28th December, 1999. Blood group A+</p>
        </div>
    );
}

function Work() {
    return (
        <div className="work">
            <p className="title">WORK EXPERIENCE</p>
            <div className="tag"></div>
            <div className="work_record">
                <p className="role">Data Analyst / Data Entry Operator</p>
                <p className="company">
                    <span className="period">2020-2021</span>
                    Intelligent Image Management Limited
                </p>
                <p className="description">Worked as a data analyst / data entry operator. Led a team and worked with a personalized application</p>
            </div>
            <div className="work_record">
                <p className="role">Data Analyst / Data Entry Operator</p>
                <p className="company">
                    <span className="period">2020-2021</span>
                    Intelligent Image Management Limited
                </p>
                <p className="description">Worked as a data analyst / data entry operator. Led a team and worked with a personalized application</p>
            </div>
        </div>
    );
}

function Interests() {
    return (
        <div className="interests">
            <p className="title">INTERESTS</p>
            <div className="tag"></div>
            <ul>
                <li>
                    <div className="icon"></div>
                    <p className="name">Travel</p>
                </li>
                <li>
                    <div className="icon"></div>
                    <p className="name">Music</p>
                </li>
                <li>
                    <div className="icon"></div>
                    <p className="name">Writing</p>
                </li>
            </ul>
        </div>
    );
}

export { Info, Contact, Profile, Work, Interests };