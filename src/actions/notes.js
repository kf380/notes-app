import NotesApi from "../api/NotesApi"
import { types } from "../types/types"
import axios from 'axios'



const URL = process.env.REACT_APP_API_URL

export const startNewNote=(data) =>async(dispatch)=>{

    try{
        const notes = await axios.post(`${URL}/notes`,data);
            dispatch({
            type: types.notesAddNew,
            payload:notes.data
        })
        // dispatch(activeNote(id,data))
        // dispatch(addNewNote(data))
        
    }catch(err){
        console.error(err)
    }
}




export const startSaveNote=(title,text,image,id) =>async(dispatch)=>{
    const data ={
        title:title,
        text:text,
        image:image,
    }
    try{
        const notes = await NotesApi.putNotes(id,data)
            dispatch({
            type: types.notesUpdated,
            payload:notes.data
        })
      
        
    }catch(err){
        console.error(err)
    }
}





export const notedeleting=(id)=>async(dispatch)=>{
    try{

        const notes = await NotesApi.deleteNotes(id)
        // const notes = await axios.delete(`${URL}/notes/${id}`);
            dispatch({
            type: types.notesDelete,
            payload:notes.data
        })
        
    }catch(err){
        console.error(err)
    }
}


export const activeNote = (id,note)=>({
    type: types.notesActive,
    payload:{
        id,
        ...note
    }
})




export const getNotes = () => async (dispatch) => {
    try {
        // const res = await axios.get(`${URL}/notes`);
        const res = await NotesApi.getNotes()
         dispatch({
            type: types.notesLoad,
            payload: res.data.notas
        })
    } catch (err) {
        console.log(err)
    }
 };
 

export const refreshNote = (id, note)=>({
    type:types.notesUpdated,
    payload:{
        id,
        note:{
            id,
            ...note
        }
    }
})
export const noteLogout =()=>({
    type: types.notesLogoutCleaning,

})
