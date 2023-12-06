export default function Section(prop) {
    // console.log("This is the prop", prop);
    return (
        <section className={prop.classname}>
            <p className="title">{prop.title}</p>
            <form action="" method="POST">
                {
                    prop.dates
                    ? (
                        <div className="dates">
                            <div className="field">
                                <label htmlFor="start">Start Year</label>
                                <input type="text" name="start" id="start" placeholder="start" />
                            </div>
                            <div className="field">
                                <label htmlFor="end">End Year</label>
                                <input type="text" name="end" id="end" placeholder="end" />
                            </div>
                        </div>
                      )
                    : null
                }
                {
                    prop.fields.map((field) => 
                        (
                            <div key={field.id} className="field">
                                <label htmlFor={field.id}>{field.label}</label>
                                <input type="text" name={field.id} id={field.id} placeholder={field.placeholder} />
                            </div>
                        )
                    )
                }
            </form>
            {
                prop.actions 
                ? (
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
                  )
                : null
            }
        </section>
    );
}

/* Structure of a prop
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