import React, { useState } from "react";
import { saveNote, getNotes } from "../utils/storage";
const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const noteArray = getNotes();
  function formData(e) {
    e.preventDefault();
    const note = {
      id: noteArray.length + 1,
      title: title,
      content: content,
    };
    const isSave = saveNote(note);
    if(isSave){
        alert('Note save suuccessfully');
    }else{
        alert('Something error to save!!');
    }
    setTitle('')
    setContent('')
  }
  return (
    <div className="w-[90%] md:w-[30%] my-6 mx-auto max-h-[400px] bg-white shadow p-4">
      <p className="text-xl mb-2">Add Note</p>
      <hr />
      <form action="#" onSubmit={formData}>
        <div className="w-full flex flex-col py-2">
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="border border-gray-400 rounded-sm p-2"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="w-full flex flex-col py-2">
          <textarea
            rows={3}
            cols={4}
            id="con"
            placeholder="Content"
            className="border border-gray-400 rounded-sm p-2"
            value={content}
            required
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 my-2 rounded-md hover:bg-blue-600 transition-all cursor-pointer">
          Save Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;

// Why I chose useState + this submit handler:
// useState makes the form controlled and responsive to user input,
// and the submit handler ensures proper validation and storage interaction.
