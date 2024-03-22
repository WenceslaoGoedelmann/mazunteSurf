import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AdminProtectedRoute = ({ children, redirectTo}) => {
    const { rol } = useSelector(state => state.user.currentUser)

   
  return rol === "50yun4admin" ? ( 
        children 
    ): (
        <Navigate to={redirectTo} /> 
    )
}

export default AdminProtectedRoute