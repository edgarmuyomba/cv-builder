import { PersonalForm, EducationForm, WorkForm } from "./Forms";

export default function Aside() {
    return (
        <aside>
            <PersonalForm />
            <EducationForm />
            <WorkForm />
        </aside>
    );
};