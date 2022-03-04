import { combineReducers, createStore,compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { notesReducer } from "../reducers/notesReducer";
// este archivo contiene el estado actual de la aplicacion
//importo el combineReducers porque voy a trabajar con varios reducers
//thunk lo utilizo para escribir logica asincronica y para obtener datos  
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers=combineReducers({
    auth:authReducer,
    notes:notesReducer
})



export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
