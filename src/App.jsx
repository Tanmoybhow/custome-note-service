import { useState } from 'react';
import './App.css'
import AddNote from './components/AddNote'
import Navbar from './components/Navbar'
import NoteList from './components/NoteList'
import ReadMoreNote from './components/ReadMoreNote';

function App() {
  const [showList,setShowList] = useState(false);

  return (
    <>
    <Navbar setShowList={setShowList}/>
    {showList?<NoteList/>:<AddNote/>}
    <ReadMoreNote/>
    
    </>
  )
}

export default App

// Why this nav approach for simplicity:
// Conditional rendering keeps navigation logic minimal and avoids routing overhead.
