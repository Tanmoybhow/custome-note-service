import React from "react";

const Navbar = ({setShowList}) => {
  return (
    <div className="flex items-center justify-between gap-2 p-4 bg-gray-200">
        <div>
            <p className="text-sm md:text-2xl font-semibold">Custome Note Service</p>
        </div>
       <div className="flex gap-2">
       <a href="#" className="p-2 bg-blue-500 text-white rounded-sm" onClick={()=>{
        setShowList(false);
       }}>Add Note</a>
       <a href="#" className="p-2 bg-green-500 text-white rounded-sm" onClick={()=>{
        setShowList(true);
       }}>View Note</a>
       </div>
    </div>
  );
};

export default Navbar;
