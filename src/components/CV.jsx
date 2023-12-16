import { Info, Contact, Profile, Work } from "./cv-sections";
import { forwardRef } from "react";

const CV = forwardRef(({ resume, updateResume }, ref) => {
    return (
      <div className="cv" ref={ref}>
        <div className="side">
            <Info content={resume.education} updateContent={updateResume}/>
            <Contact {...resume.contact} />
        </div>
        <div className="main">
            <Profile {...resume.profile} />
            <Work content={resume.work} updateContent={updateResume} />
        </div>
      </div>  
    );
});

export default CV;