import { types } from "../types/types";
//inicio el estado con un array de notas vacia, y el active en null(lo utilizo para saber que nota esta activa y que no)
const initialState = {
    notes: [],
    active: null
}


export const notesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]

            }
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
            case types.notesUpdated:
                return {
                    ...state,
                    notes:state.notes.map(
                        notes => notes.id === action.payload.id
                        ? action.payload.note
                        : notes
                    )
                }
//agrego una nota, concatenando el state y action.payload
        case types.notesAddNew:
            return {
                ...state,
                ...action.payload
            }
//me quedo con las notas, las cual no coinciden con id eliminado
        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter(notes => notes.id !== action.payload)
            }
//Para que no me quede activa una nota, luego de presionar logout
        case types.notesLogoutCleaning:
            return {
                ...state,
                active: null,
                notes: []
            }

        default:
            return state;

    }

}