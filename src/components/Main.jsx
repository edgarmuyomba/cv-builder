import CV from "./CV";
import Clear from "./clear";
import Print from "./Print";

export default function Main({ resume_content, updateResume }) {
    return (
        <>
            <main>
                <CV updateResume={updateResume} resume={resume_content} />
            </main>
            <div className="extra">
                <Print content={resume_content}/>
                <Clear updateContent={updateResume} />
            </div>
        </>
    );
};