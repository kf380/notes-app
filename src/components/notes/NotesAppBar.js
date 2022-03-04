import React from 'react'
import { useSelector } from 'react-redux'


export const NotesAppBar = () => {
  const {active} = useSelector( state => state.notes );
// me traigo los datos de la nota activa y renderizo el titulo  

  return (
    <div className="notes__appbar">
        <span>{active.title}</span>

        
        
    </div>
  )
}
