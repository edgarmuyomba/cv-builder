import CV from "./CV";
import Clear from "./clear";

export default function Main({ resume_content, updateResume }) {
    return (
        <>
            <main>
                <CV updateResume={updateResume} resume={resume_content} />
            </main>
            <Clear updateContent={updateResume} />
        </>
    );
};