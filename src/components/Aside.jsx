import Section from "./Section";

export default function Aside() {
    const sections = [
        {
            classname: "personal",
            title: "Personal Information",
            dates: false,
            actions: false,
            fields: [
                {
                    id: "fullname",
                    label: "Fullname",
                    placeholder: "First and Last name"
                },
                {
                    id: "email",
                    label: "Email",
                    placeholder: "Email"
                },
                {
                    id: "phone",
                    label: "Phone",
                    placeholder: "Phone"
                },
                {
                    id: "address",
                    label: "Address",
                    placeholder: "Address"
                }
            ]
        },
        {
            // <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>school</title><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" /></svg></span>
            classname: "education",
            title: "Education",
            dates: true,
            actions: true,
            fields: [
                {
                    id: "school",
                    label: "School",
                    placeholder: "School"
                },
                {
                    id: "degree",
                    label: "Degree",
                    placeholder: "Degree"
                },
            ]
        },
        {
            // <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>briefcase-variant</title><path d="M10 16V15H3L3 19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15H14V16H10M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H14V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7M14 7H10V5H14V7Z" /></svg></span>
            classname: "work",
            title: "Experience",
            dates: true,
            actions: true,
            fields: [
                {
                    id: "name",
                    label: "Company Name",
                    placeholder: "Company Name"
                },
                {
                    id: "position",
                    label: "Position (title)",
                    placeholder: "Position held"
                },
                {
                    id: "location",
                    label: "Location",
                    placeholder: "Location"
                },
                {
                    id: "description",
                    label: "Description",
                    placeholder: "Job Description"
                }
            ]
        }
    ];
    return (
        <aside>
            {
                sections.map((section, index) => <Section key={index} {...section} />)
            }
        </aside>
    );
};

/* Structure of a section
    {   
        classname: 
        title:
        dates: Boolean,
        actions: Boolean
        fields: [
            field: {
                id:
                label:
                placeholder:
            }
        ]
    }

*/