import React from 'react'
import{Box,Stack,styled,Typography,Button} from '@mui/material'
import {Link} from 'react-router-dom'

const Div=styled('Box')({
    backgroundColor:'lightcyan',
    height:'150px',
    width:'600px',
    textAlign:'center',
    marginTop:'30px',
    borderRadius:'15px',
    boxShadow:"5px 6px 7px 6px black"
})

const Home = () => {
  return (
  <Box>
    <Stack direction='row' justifyContent='center' >
        <Div>
        <Typography variant='h6' sx={{fontFamily:'cursive',marginTop:'10px'}}>Welcome</Typography>
        <Link to='/register' className='nocss'>
        <Button color="success" variant="contained" sx={{marginLeft:"10px",marginTop:'20px',boxShadow:"3px 3px 5px 2px black"}} type='success' > Register </Button>
        </Link>
        <Link to='/login' className='nocss'>
        <Button color="success" variant="contained" sx={{marginLeft:"10px",marginTop:'20px',boxShadow:"3px 3px 5px 2px black"}} type='success' > Login </Button>
        </Link>
        </Div>
    </Stack>
  </Box>
  )
}

export default Home