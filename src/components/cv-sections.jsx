function Info({ props }) {
    return (
        <div className="info">
            <img src="https://picsum.photos/250/300" height={300} width={250} alt="" className="profile_image" />
            <div className="education">
                <p className="title">EDUCATION</p>
                <div className="tag"></div>
                {
                    props.map((educ_record, index) => {
                        return (
                            <div key={index} className="educ_record">
                            <div className="delete">
                                <svg fill="#dc3545" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>
                            </div>
                                <p className="course">{educ_record.course}</p>
                                <p className="campus">{educ_record.campus}</p>
                                <p className="years">{educ_record.period.start}-{educ_record.period.end}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

function Contact(props) {
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
                <p className="value">{props.phone}</p>
            </div>
            <div className="contact">
                <p className="title">Email</p>
                <p className="value">{props.email}</p>
            </div>
            <div className="contact">
                <p className="title">Location</p>
                <p className="value">{props.location}</p>
            </div>
        </div>
    );
}

function Profile(props) {
    return (
        <div className="profile">
            <p className="name">{props.name}</p>
            <p className="job">{props.job_title}</p>
            <p className="title">PROFILE</p>
            <div className="tag"></div>
            <p className="brief">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga debitis veritatis optio blanditiis laborum eligendi consectetur repellendus eveniet! Laboriosam sapiente cumque recusandae repellat laudantium a, iste eum dolores earum saepe.
                Illo porro, fuga eius sed praesentium voluptas fugiat explicabo vel repellendus fugit numquam iste non voluptatibus rem molestiae quibusdam natus nemo eos, harum obcaecati? Ad eius possimus repudiandae suscipit nisi.
                Eum provident sed adipisci. Consectetur officia dolores tempore dolorum, provident commodi dolor earum nisi laborum similique odit asperiores enim iusto dignissimos cum impedit. Impedit quae expedita rem, nulla mollitia voluptatum.
                Laudantium, est voluptatum eveniet porro eaque voluptatibus deserunt consectetur numquam voluptate maxime consequatur praesentium officiis quidem aliquam sed quos suscipit odit ipsa illo corrupti. Consectetur cupiditate incidunt minima sunt animi!
                Repellendus quas esse veniam voluptatem fuga qui ducimus, sit iste dolores non a quasi nihil iusto unde dicta excepturi rerum molestiae sint quae odit asperiores corporis quos at. Ea, accusantium?
            </p>
        </div>
    );
}

function Work({ props }) {
    return (
        <div className="work">
            <p className="title">WORK EXPERIENCE</p>
            <div className="tag"></div>
            {
                props.map((work_record, index) => {
                    return (
                        <div key={index} className="work_record">
                            <div className="delete">
                                <svg fill="#dc3545" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>
                            </div>
                            <p className="role">{work_record.role}</p>
                            <p className="company">
                                <span className="period">{work_record.period.start}-{work_record.period.end}</span>
                                {work_record.company}
                            </p>
                            <p className="description">{work_record.description}</p>
                        </div>
                    );
                })
            }
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