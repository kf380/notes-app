import axios from 'axios'
const URL = process.env.REACT_APP_API_URL
export const loadNotes = async ()=>{

    const notesSnap = await axios.get(`${URL}/notes`);
    const notes = [];

   notesSnap.forEach(snapHijo =>{
       notes.push({
           id: snapHijo.id, 
           ...snapHijo.data()
       })
   })

   return notes



}