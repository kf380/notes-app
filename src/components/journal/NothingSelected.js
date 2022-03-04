import React from 'react'
// Este componente se renderiza cuando no hay ninguna nota activa
export const NothingSelected = () => {
  return (
    <div className="nothing__main-content">
        <p>
            Select something 
            <br/>  
            or create an entry!
        </p>
        <i className="far fa-star fa-4x mt-5"></i>
    </div>
  )
}

// se que el br de la linea 8, se trata de no utilizar