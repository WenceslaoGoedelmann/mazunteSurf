import React from 'react'
import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';

import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Verify from '../pages/Verify/Verify';
import Turno from '../pages/CrearTurno/Turno';
import User from '../pages/UserProfile/User';




const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path='/' element={<Home />} />
     
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/verify' element={<Verify />} />
      <Route path='/turno' element={<Turno />} />
      <Route path='/user' element={<User />} />
    </ReactDomRoutes>
  )
}

export default Routes