import React, { useState } from "react";
import { getNotes } from "../utils/storage";
const NoteCard = ({item}) => {
    let notes = getNotes();
    const [readMore,setReadMore] = useState(false);
  return (
    <div id={item.id} className="w-full md:w-[200px] p-3 min-h-[100px] bg-yellow-100 shadow rounded flex flex-col overflow-x-hidden">
      <p className="text-2xl font-semibold">{item.title}</p>
      <div className="grow my-3">
      <p className={`${readMore?'':'line-clamp-2'} text-gray-700 grow`}>
        {item.content}
      </p>
      </div>
      <button className="bg-green-500 p-2 text-white rounded-sm" onClick={()=>{
        if(item.content.length>35){
            setReadMore((prev)=> !prev);
        }
      }}>{readMore?`Read Less`:`Read More`}</button>
    </div>
  );
};

export default NoteCard;