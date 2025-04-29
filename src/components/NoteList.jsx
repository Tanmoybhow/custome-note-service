import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import { getNotes } from "../utils/storage";
const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = getNotes();
    setNotes(storedNotes);
  }, []);
  return (
    <div className="w-[90%] py-5 md:w-[70%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
      {notes.length == 0 ? (
        <p className="text-center font-medium text-2xl">Add Note</p>
      ) : (
        [...notes].reverse().map((item, i) => {
          return <NoteCard key={i} item={item} />;
        })
      )}
    </div>
  );
};

export default NoteList;

// Why useEffect to sync storage → state:
// useEffect ensures that notes are loaded once on component mount for efficient rendering.
