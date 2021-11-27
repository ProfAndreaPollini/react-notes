import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "./context";

export function CreateNoteScreen() {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const { notes, setNotes } = useContext(NotesContext)

  const navigate =  useNavigate()

  return (
    <>
      Create Note
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={() => {
        setNotes([...notes, { title, content ,id: notes.length + 1}])
        setTitle("")
        setContent("")
        navigate("/")
      }}>Save</button>
    </>
  );
}
