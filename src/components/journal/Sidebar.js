import React from 'react'
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
import { startLogout } from '../../actions/auth';
import { addNewNote, startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    const {dni} = useSelector( state => state.auth )
// el dni del usuario lo utilizo para renderizarlo en la parte superior de mi sidebar,
// podriamos renderizar el nombre de la persona, si lo registramos con ese dato

//declaro la const dispatch
    const dispatch = useDispatch()
// en este handleLogout dispatcho la accion startLogut, la cual viene del archivo action/notes
    const handleLogout = ()=>{
        dispatch(startLogout())
    }

    const handleAddNew = ()=>{
// en este handleLogout dispatcho la accion starNewNote, la cual viene del archivo action/notes
// y la utilizo para crear nueva nota 
// *** el window. lo utilizo para refrescar la pagina (se que no es recomendado y hay otra manera, pero no la pude implentar)
        dispatch(startNewNote())
        window.location.reload();
    }
    


  return (
    <aside className="journal__sidebar">
        
    <div className="journal__sidebar-navbar">

        <h3 className="mt-5">
            <i className="far fa-moon"></i>
            <span> {dni} </span>
        </h3>

        <button 
        className="btn btn-danger"
        onClick={handleLogout}
        >
            Logout
        </button>

    </div>

    <div 
    className="journal__new-entry"
    onClick={handleAddNew}
    w
    >
        <i className="far fa-calendar-plus fa-5x "></i>
        <p className="mt-5">
            New entry
        </p>
    </div>

    <JournalEntries/>

    </aside>
  )
}
