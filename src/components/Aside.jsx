import { PersonalForm, EducationForm, WorkForm } from "./Forms";

export default function Aside({ content, updateContent }) {
    return (
        <aside>
            <PersonalForm updateContent={updateContent} />
            <EducationForm content={content} updateContent={updateContent} />
            <WorkForm />
        </aside>
    );
};