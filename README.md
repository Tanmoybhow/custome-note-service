# 📝 Custom Note Service – React Frontend Project

A simple note-taking app built with **React** that allows users to add and view notes using browser **localStorage** (no backend). Designed for clarity, responsive UI, and clean state management.

## Live Demo & Code

- **Live Site**: https://mininote-app.netlify.app/
- **GitHub Repo**: https://github.com/Tanmoybhow/custome-note-service

---

## Project Setup

1. Clone the repository  
   `git clone https://github.com/Tanmoybhow/custome-note-service`

2. Navigate to the project folder  
   `cd note-app`

3. Install dependencies  
   `npm install`

4. Start the development server  
   `npm run dev` 

---

# Objectives

- Create a simple React app to add/view notes.
- Store data client-side using localStorage.
- Document component design and implementation decisions.

---

# State Management

- `useState` is used to manage form inputs and UI toggles.

> `// Why I chose useState + this submit handler:`  
> It’s simple and effective for managing local UI state in a small app.

---

# Storage Strategy

- Notes are saved in `localStorage` using a utility file `storage.js`.

> `// Why localStorage + key naming:`  
> localStorage is lightweight and perfect for persisting small user data. The key `'my_notes'` is simple and avoids collision with other app data.

---

# Component Design

- **App.jsx**: Main component handling navigation between Add/View.
- **Navbar.jsx**: Contains tab buttons to switch between pages.

> `// Why this nav approach for simplicity:`  
> Simple `useState` toggle eliminates the need for routing in a small app.

- **AddNote.jsx**: Controlled inputs for title and content. Submits note to storage and clears form after submission.

- **NoteList.jsx**: Loads notes from localStorage and renders a grid layout of note cards.

> `// Why useEffect to sync storage → state:`  
> Ensures notes are loaded only once when the component mounts.

- **NoteCard.jsx**: Displays individual notes with a toggle for long content.

---

## Styling

Styled using **Tailwind CSS**.

> `// Why Tailwind for styling:`  
> Utility classes allow for quick layout and responsive design without writing custom CSS.

---

# Error & Loading Handling

- `try/catch` used in `storage.js` to handle storage errors.

> `// Why display error banner:`  
> To inform the user if their browser fails to store data due to quota or permission issues.

---

# Summary

This app fulfills all requirements of the assignment:

- Clean React architecture
- Client-side note persistence
- Thoughtful component and styling choices
- Simple, functional UX with clear navigation

---

🧑‍💻 Built with ❤️ by Tanmoy Bhowmik

