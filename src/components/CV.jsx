import { Info, Contact, Profile, Work, Interests } from "./cv-sections";

export default function CV({ resume, updateResume }) {
    return (
      <div className="cv">
        <div className="side">
            <Info content={resume.education} updateContent={updateResume}/>
            <Contact {...resume.contact} />
        </div>
        <div className="main">
            <Profile {...resume.profile} />
            <Work content={resume.work} updateContent={updateResume} />
            <Interests />
        </div>
      </div>  
    );
}