

import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, redirectTo}) => {
    const { currentUser } = useSelector(state => state.user)

  return currentUser ? ( /* si existe un usuario logueado */
        children /* accedo a la ruta que deseo ir */
    ): (
        <Navigate to={redirectTo} state={{ redirectedFromCheckout: true }}/> /* si no redirijo a otra ruta  y le paso como prop la pagina a la que queria ir para que luego que se loguee lo redirija al checkout*/
    )
}

export default ProtectedRoute


