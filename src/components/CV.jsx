import { Info, Contact, Profile, Work } from "./cv-sections";
import { forwardRef } from "react";

const CV = forwardRef(({ resume, updateResume }, ref) => {
  return (
    <div className="cv" ref={ref}>
      <div className="top">
        <Profile {...resume.profile} />
      </div>
      <div className="bottom">
        <Info content={resume.education} updateContent={updateResume} />
        <Contact {...resume.contact} />
        <Work content={resume.work} updateContent={updateResume} />
      </div>
    </div>
  );
});

export default CV;