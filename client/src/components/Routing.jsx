import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Show from '../pages/Show';
import PrivateRoute from './PrivateRoute';
import Shared from './Shared';


const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Shared/>}>
        <Route index element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/show'element={ 
           <PrivateRoute>
            <Show/>
           </PrivateRoute>
         } />
       </Route>
    </Routes>
  )
}

export default Routing
