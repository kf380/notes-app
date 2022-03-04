import axios from 'axios';
const URL = process.env.REACT_APP_API_URL

const NotesApi ={
    getNotes:()=>{
        return axios.get(`${URL}/notes`,);
    },
    postNotes:(data)=>{
        return axios.post(`${URL}/notes`,data);
    },
    putNotes:(id,data)=>{
        return axios.put(`${URL}/notes/${id}`,data);
    },
    deleteNotes:(id)=>{
        return axios.delete(`${URL}/notes/${id}`);
    }
}

export default NotesApi;