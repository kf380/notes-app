import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm'
import { activeNote, notedeleting, startNewNote, startSaveNote } from "../../actions/notes";

export const NoteScreen = () => {
    const dispatch = useDispatch()
    //me traigo  active y notes del estado de las notas
    const {active:note,notes} = useSelector( state => state.notes );
    const [formValues, handleInputChange,reset] = useForm(note)
    

    const { title, text, image,id } = formValues;
    //desestructuro los datos que voy a utilizar del formaValues
 
    const activeId = useRef(note.id)
    
    useEffect(() => {
        if( note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id
        }
    }, [note,reset])

    useEffect(() => {
        dispatch(activeNote(formValues.id,{...formValues}))
        }, [formValues,dispatch,notes])
    

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(startNewNote(formValues))
        window.location.reload();
    }

    const handleUpdate = (e)=>{
        e.preventDefault();
        dispatch(startSaveNote(title,text,image,id))
        window.location.reload();
        
      }
    
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(notedeleting(id))
        window.location.reload();
    }
 


    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <form
                    className="animate__animated animate__fadeIn animate__faster"
                >
                    <div className="notes__main-content">
                    <input
                        type="text"
                        placeholder="Some awesome title"
                        autoComplete="off"
                        className="notes__title-input"
                        name="title"
                        value={title}
                        onChange={handleInputChange}
                    />
                    <input
                        placeholder="What happened today"
                        name="text"
                        className="notes__title-input"
                        value={text}
                        onChange={handleInputChange}

                    ></input>
                    <div className="notes__url">
                    <label>Url de la imagen</label>
                    <input
                        type="url"
                        placeholder="Some awesome title"
                        autoComplete="off"
                        className="notes__text"
                        name="image"
                        value={image}
                        onChange={handleInputChange}
                    >
                    </input>
                    </div>
                    
                    <div className="notes__image">
                        <img
                            src={image}
                            alt=""
                            name="image"

                        />
                    </div>
                    </div>
                    <div note__button>
                    <button
                        className="btn btn-create"
                        onClick={(e)=>handleSave(e)}
                    >
                        Create
                    </button>
                    <button
                        className="btn btn-update"
                        onClick={handleUpdate}
                    >
                        Updated
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
