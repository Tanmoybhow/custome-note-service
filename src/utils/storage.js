const STORAGE_KEY = "my_notes";

export const saveNote = (note) => {
  try {
    const notes = getNotes();
    const newNotes = [...notes, note];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newNotes));
    return true;
  } catch (error) {
    console.error("Storage Error:", error);
    return false;
  }
};

export const getNotes = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};
// Why localStorage + key naming:
// localStorage is simple, fast, and persists data across sessions for a small app.
// 'my_notes' is a descriptive key, easy to find and avoids collisions with other apps.