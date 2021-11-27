import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NotesContext } from "./context";

export function EditNoteScreen() {
    const { noteid } = useParams()
    const navigate = useNavigate()

    const { notes, setNotes } = useContext(NotesContext)

    const noteToEdit = notes.find(note => note.id === parseInt(noteid))

    const [title, setTitle] = useState(noteToEdit.title)
    const [content, setContent] = useState(noteToEdit.content)


    return (
        <>
            Edit Note
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="text" value={content} onChange={e => setContent(e.target.value)} />
            <button onClick={() => {

                setNotes([...notes.filter(n => n.id !== noteToEdit.id), { title, content, id: noteToEdit.id }])
                setTitle("")
                setContent("")
                navigate("/")
            }}>Save</button>
        </>
    );
}
