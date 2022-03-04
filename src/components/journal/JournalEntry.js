import React from 'react'
import { useDispatch } from 'react-redux'
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({id,title,text,image}) => {
    const dispatch = useDispatch();
    // Esta constante la utili<o para clickear y activar esa nota
    const handleEntryClick =() =>{
        dispatch(activeNote(id,
            {title,image,text})
        )
    }

    return (
        <div className="journal__entry pointer animate__animated animate__fadeIn animate__faster"
        onClick={handleEntryClick}
        >
           
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {text}
                </p>
            </div>

            <div className="journal__entry-data-box">
            { image &&
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize:'cover',
                    backgroundImage:`url(${image})`

                }}
            />
            }

            </div>
        </div>
    )
}
