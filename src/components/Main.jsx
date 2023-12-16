import CV from "./CV";

export default function Main({ resume_content, updateResume }) {
    return (
        <main>
            <CV updateResume={updateResume} resume={resume_content} />
        </main>
    );
};