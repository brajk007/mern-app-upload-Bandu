import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'


const PrivateRoute = ({children}) => {
    const navigate = useNavigate()
    const [user,setUser] = useState('')

    useEffect(()=>{
      setUser(JSON.parse(localStorage.getItem('user'))) 
    },[])
    
  return user?children: navigate('/login')
}

export default PrivateRoute;
