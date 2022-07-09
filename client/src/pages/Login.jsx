import React, { useState } from 'react'
import { Button, InputBase, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { authDispatch } from '../slice/userSlice'
 import {useDispatch} from 'react-redux'


const User = styled('Box')({
  display:'flex',
  justifyContent:'center',
  height:'685px',
  width:'100%',
  alignItems:'center',
})
const Search = styled('div')({
padding:'0px 10px',
borderRadius:'5px',
width:'100%'
})

const Login = () => {
  const dispatch =useDispatch()
    const navigate = useNavigate()
  const [error,setError] = useState(false)
 const [state,setState] = useState({
     username:'',
     password:''
 })
 
  const handleChange=(e)=>{
    setError(false)
    setState({...state,[e.target.name]:e.target.value})
  }

  const getUser=async(e)=>{
    setError(false)
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login',state)
       localStorage.setItem('user',JSON.stringify(res.data))
       dispatch(authDispatch(res.data))
       navigate('/show')
     
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  return (
    <User>
    <Box>
    <Search>
      <Typography variant='h5' sx={{textAlign:'center',fontFamily:'cursive',fontSize:'50px'}}>Login</Typography>
      <InputBase name='username' onChange={handleChange} placeholder='Username' style={{backgroundColor:"lightgrey",marginTop:'20px',borderRadius:'10px',padding:"5px",width:'400px'}}></InputBase> <br/>
      <InputBase name='password' onChange={handleChange} placeholder='Password' style={{backgroundColor:"lightgrey",marginTop:'20px',borderRadius:'10px',padding:"5px",width:'400px'}}></InputBase> <br/>
      <Button  onClick={getUser} sx={{marginLeft:'30px',marginTop:'30px',backgroundColor:'red'}} variant="contained">Login</Button>
      {error && <p style={{color:'red',textAlign:'center',marginTop:'10px'}}>Wrong credentials...please try again</p>}
    </Search>
    </Box>
 </User>
  )
}

export default Login
