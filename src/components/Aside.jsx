import { PersonalForm, EducationForm, WorkForm } from "./Forms";

export default function Aside({ updateContent }) {
    return (
        <aside>
            <PersonalForm updateContent={updateContent} />
            <EducationForm />
            <WorkForm />
        </aside>
    );
};