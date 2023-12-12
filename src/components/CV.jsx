import { Info, Contact, Profile, Work, Interests } from "./cv-sections";

export default function CV(resume) {
    return (
      <div className="cv">
        <div className="side">
            <Info props={resume.education}/>
            <Contact {...resume.contact} />
        </div>
        <div className="main">
            <Profile {...resume.profile} />
            <Work props={resume.work} />
            <Interests />
        </div>
      </div>  
    );
}