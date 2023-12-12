import { useState } from "react";

export default function StateTest() {
    const [title, setTitle] = useState('Edgar Muyomba');
    return (
        <>
            <p className="title">{title}</p>
            <input type="text" name="" id="" onChange={(e) => {
                setTitle(e.target.value);
            }} />
        </>
    )
}