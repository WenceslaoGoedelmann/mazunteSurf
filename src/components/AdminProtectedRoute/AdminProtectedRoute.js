import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AdminProtectedRoute = ({ children, redirectTo}) => {
    const { rol } = useSelector(state => state.user.currentUser)

   
  return rol === "50yun4admin" ? ( /* si existe un usuario logueado */
        children /* accedo a la ruta que deseo ir */
    ): (
        <Navigate to={redirectTo} /> /* si no redirijo a otra ruta  y le paso como prop la pagina a la que queria ir para que luego que se loguee lo redirija al checkout*/
    )
}

export default AdminProtectedRoute