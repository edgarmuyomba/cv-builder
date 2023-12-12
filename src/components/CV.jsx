import { Info, Contact, Profile, Work, Interests } from "./cv-sections";

export default function CV() {
    return (
      <div className="cv">
        <div className="side">
            <Info />
            <Contact />
        </div>
        <div className="main">
            <Profile />
            <Work />
            <Interests />
        </div>
      </div>  
    );
}