import { Button, InputBase, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React,{ useState} from 'react'
import { useNavigate } from 'react-router-dom'


const User = styled('Box')({
    display:'flex',
    justifyContent:'center',
    height:'685px',
    width:'100%',
    alignItems:'center',
})
const Details = styled('div')({
  padding:'0px 10px',
  borderRadius:'5px',
  width:'100%'
})

const Register = () => {
  const navigate = useNavigate()
  const [error,setError] = useState(false)
  const [state,setState] = useState({
         username:'',
         email:'',
         password:''
  })

  const handleChange=(e)=>{
    setError(false)
      setState({...state,[e.target.name]:e.target.value})
  }


 const registerData= async (e)=>{
    e.preventDefault();
    setError(false)
     
     try {
       await axios.post('http://localhost:5000/api/register',state)
       alert('registered successfully')
      navigate('/login')
    
     } catch (error) {
       console.log(error);
       setError(true)
     }
 }

  return (
      <User>
         <Box>
         <Details>
           <Typography variant='h5' sx={{textAlign:'center',fontFamily:'cursive',fontSize:'50px'}}>Sign Up</Typography>
           <InputBase onChange={handleChange} name='username' placeholder='Username' style={{backgroundColor:"lightgrey",marginTop:'20px',borderRadius:'10px',padding:"5px",width:'400px'}}></InputBase> <br/>
           <InputBase onChange={handleChange} name='email' placeholder='Email' style={{backgroundColor:"lightgrey",marginTop:'20px',borderRadius:'10px',padding:"5px",width:'400px'}}></InputBase> <br/>
           <InputBase onChange={handleChange} name='password' placeholder='Password' style={{backgroundColor:"lightgrey",marginTop:'20px',borderRadius:'10px',padding:"5px",width:'400px'}}></InputBase> <br/>
           <Button onClick={registerData} sx={{marginLeft:'30px',marginTop:'30px',backgroundColor:'red'}} variant="contained">Sign up</Button>
            {error && <p style={{color:'red',textAlign:'center',marginTop:'10px'}}>Something went wrong...please try again</p>}
         </Details>
         </Box>
      </User>
  )
}

export default Register
