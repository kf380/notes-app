import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {

  const {active} = useSelector( state => state.notes );
  // me traigo el estado de las notas, si esta activo, renderizo el NoteScreen, de lo contrario el NothingSelected
  return (
    <div className="journal__main-content animate__animated animate__fadeIn animate__faster ">
        <Sidebar/>
        <main>
        {/* <NoteScreen/> */}
   
          {
            (active)
            ? (<NoteScreen/>)
            : (<NothingSelected/>)
          }
        
        
        </main>
    </div>
  )
}
