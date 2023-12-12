import CV from "./CV";

export default function Main(resume_content) {
    return (
        <main>
            <CV {...resume_content} />
        </main>
    );
};