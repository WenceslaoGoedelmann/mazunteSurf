import React from 'react'
import { useDispatch, useSelector } from "react-redux";

const Admin = () => {
    const {currentUser} = useSelector((state) => state.user);
  return (
    <button>turnos</button>
  )
}

export default Admin