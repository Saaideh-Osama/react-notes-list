import React from 'react'

import "./App.css";
import { useState } from "react";

function showForm() {
  document.getElementById("showFormbtn").style.display = "none";
}


function NotesContainer() {
    const [noteTitle , setNoteTitle] = useState(""); 
    

  const handleTitle = event => {
    setNoteTitle(event.target.value);
  };
   
    
  const [noteDescription , setNoteDescription] = useState(""); 

  const handleDescription = event => {
    setNoteDescription(event.target.value);
  };
  const [notesContent, setnotesContent] = useState([]);

  function addNote(){
    var date = new Date();
	var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
  setnotesContent([
    ...notesContent,
      { id: notesContent.length+1, title: noteTitle, description:noteDescription , createdAt: current_time},
    ]);
    document.getElementById("showFormbtn").style.display = "block";
    document.getElementById("note-title").value = "" ; 
    document.getElementById("note-body").value = "" ; 
  
  }
  
    
  return (
   
        <div id="notes-container">
           {notesContent.map((note)=>{
          return(
                  <div  className="note">
                      <div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title" >
           <h3> {note.title}</h3>
           {note.description}
        </div>

        <div class="ag-courses-item_date-box">
          Created at :{note.createdAt} 
          
        </div>
      </a>
    </div>
  </div>
</div>
</div> 

              )
          })}
          <div id="form-container" className='note'>
           
            <form id="addNote-form"  >
              <input type="text" id="note-title"  placeholder="Enter Note title" onChange={handleTitle}/>
              <input type="text" id="note-body" placeholder="Enter Note description" onChange={handleDescription} />
  
              <button type="button" class="button-86" onClick={addNote}>
                create Note
              </button>
            </form>
            <button type="button" onClick={showForm} id="showFormbtn">
            <i class="fa-solid fa-plus"></i>
            </button>
          </div>
         
        </div>
      );
  
}

export default NotesContainer


