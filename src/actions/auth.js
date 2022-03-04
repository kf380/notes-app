import axios from "axios"
import { fetch1 } from "../helpers/fetch"
import { types } from "../types/types"
import { noteLogout } from "./notes"



const URL = process.env.REACT_APP_API_URL


export const startLogin =(dni,password) => {
    return async(dispatch)=>{
        const resp = await axios.post(`${URL}/auth`,{dni,password})
        const body = await resp.data
//hago un post a la ruta de auth y me traigo la data 
//en esta data viene el dni que lo guardo en localstorage para tener la sesion abierta.
        
        if(body.ok){
            localStorage.setItem('dni',body.dni)
        }
        dispatch(login({
            dni:body.dni,
            password:body.password
        }))

    }
}
export const startRegister =(dni,password) => {
    return async(dispatch)=>{
        const resp = await fetch1('auth/new',{dni,password},'POST')
        const body = await resp.json()


        
        if(body.ok){
            localStorage.setItem('dni',body.dni)
        }
        dispatch(login({
            dni:body.dni,
            password:body.password
        }))

    }
}


export const startLogout = () =>{
    return(dispatch)=>{
        localStorage.clear()
        dispatch(logout())
        dispatch(noteLogout())
    }

}

const login = (user)=>({
    type:types.authLogin,
    payload:user
})

const logout = ()=>({
    type:types.authLogout

})
