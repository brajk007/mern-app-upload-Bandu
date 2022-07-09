import { AppBar, Avatar,  styled, Toolbar, Typography,Button,InputBase } from '@mui/material'
import React from 'react'
import { useEffect,useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const StyledToolbar = styled(Toolbar)({
   display:'flex',
})
const Icons = styled('div')({
   display:'flex',
   gap:'30px',
   alignItems:'center'
})
const Title = styled('div')({
    padding:'0px 10px',
    borderRadius:'5px',
    width:'30%',
    color:'white'
 })

 const Search = styled('div')({
    backgroundColor:'white',
    padding:'0px 10px',
    borderRadius:'5px',
    width:'40%',
    visibility:'hidden'
 })

const Nav = () => {
   const users = useSelector((state)=>state.data.users)
   const [user,setUser] = useState('')
   const navigate = useNavigate()
   const [flag,setFlag] = useState(false)
 
 

   const handleLogout=()=>{
      localStorage.removeItem('user')
      navigate('/login')
      setFlag(!flag)
   }
   useEffect(()=>{
         setUser(JSON.parse(localStorage.getItem('user')))
   },[flag,users])

  return (
        <>
        <AppBar position='sticky' >
       
         <StyledToolbar>
            <Typography variant='h6' sx={{marginLeft:'0px'}} >BANDURAAJ</Typography>
            <Title>
                <NavLink to='/show' style={{color:'white',textDecoration:'none'}} >Home</NavLink>
                {/* <NavLink to='/register' style={{color:'white',textDecoration:'none',marginLeft:"20px"}} >Add post</NavLink> */}
                {/* <><Button sx={{color:'white'}}>Logout</Button></> */}
             </Title>
             <Search> <InputBase placeholder='search...'></InputBase> </Search>
            <Title>
               {user? <><Button onClick={handleLogout} sx={{color:'white'}}>Logout</Button></>:<> <NavLink to='/login' style={{color:'white',textDecoration:'none'}} >Login</NavLink>
                <NavLink to='/register' style={{color:'white',textDecoration:'none',marginLeft:"20px"}} >Register</NavLink></>}
               
             </Title>
            <Icons>
             {user?<> <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png'  sx={{width:30,height:30}} /></>: <Avatar  sx={{width:30,height:30}} />}
            </Icons>
           
         </StyledToolbar> 
        </AppBar>
        </>
  )
}

export default Nav
