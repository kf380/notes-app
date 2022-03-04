import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {

const {notes} = useSelector(state => state.notes)

// me traigo el notes del estado y lo mapeo para renderizar todas las notas

  return (
    <div className="journal__entries">
        
        {  notes.length !==0 ?
            notes?.map(note => (
              <JournalEntry 
               key={note.id}
               {...note} 
                
                />
            ))
            : null
        }

    </div>
  )
}
