import { Box, Button, Fade, Modal, styled,InputBase } from '@mui/material'
import React,{useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios';
import fileDownload from "js-file-download";
import { useNavigate } from 'react-router-dom';

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
 };

const Image = styled('Box')({
       display:'grid',
       gridTemplateColumns:'auto auto auto ',
       margin:'30px',
       marginLeft:'80px',
     
    })
const Div = styled('div')({
 marginTop:'20px',
 display:'flex',
 justifyContent:'center'   
 })    

const Show = () => {
   const navigate = useNavigate()
   const [open, setOpen] = React.useState(false);
   const [file,setFile] = useState('');
   const [list,setList] = useState([])
   const [flag,setFlag] = useState(false);
   const [user,setUser] = useState(null);
   const [imgId,setImgId] = useState('');
   const [val,setVal] = useState('')
 
 useEffect(()=>{
   setUser(JSON.parse(localStorage.getItem('user')))
   
  },[])
   
  useEffect(()=>{
   if(user!==null){
          const getData=async ()=>{
          const res = await axios.get(`http://localhost:5000/api/img/${user._id}`);
          setList(res.data)
          console.log(res.data)
      }
      getData()
   }
   
 },[user,flag])


   
  const handleChange=(e)=>{
   setFile(e.target.files[0])
  }

  const handleFile=()=>{
     const imgId = Math.floor(100000 + Math.random() * 900000)
     const formData = new FormData()
         formData.append('file',file)
         formData.append('imgId',imgId)
         formData.append('userId',user._id)
       
     const config={
         headers:{
               'content-type':'multipart/form-data'
        }
     }
     axios.post('http://localhost:5000/api/img',formData,config).then(()=>{
         alert('image uploaded successfully')
         setFlag(!flag)
     }).catch((err)=>console.log(err))
  }

  const handleDelete=async (id)=>{
      try {
        await axios.delete(`http://localhost:5000/api/img/${id}`)
        alert('item deleted successfully')
        setFlag(!flag)
      } catch (error) {
        console.log(error)
      }
  }

  const handleDownload=(ele)=>{
     setOpen(true)
     setImgId(ele)

  }

  const handleClose = () => setOpen(false);

  const downloadFile =  () => {
   let key = val
   let pass = imgId.imgId
  console.log(key,pass)
   if (pass == key) {
      axios
       .get(`http://localhost:5000/api/img/download/${imgId._id}`)
       .then((res) => {
         console.log(res)
         const splitArray = res.data.split("\\");
         const newArray = splitArray[splitArray.length - 1];
         fileDownload(splitArray.join("\\"), newArray,);
         console.log(newArray)
         alert("File Downloaded.");
         navigate("/show");
       })
       .catch((err) => {
         console.log(err);
       });
   } else {
     alert("File can't downloaded. Password dosent matches");
   }
 };

  return (
   <>
      <Div>
        <input onChange={handleChange}  type='file'/>
        <Button variant='contained' onClick={handleFile} color='primary' >Upload</Button>
      </Div>
      <Image>
        {
        list.map((ele)=>{
                return  <>
       <Card sx={{ maxWidth: 345,  marginTop:'20px' }}>          
        <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={`http://localhost:5000/images/${ele.image}`}
          alt="image "
        />
        <CardContent>
         <Div>
         <Typography gutterBottom variant="h5" component="div">
          <DeleteIcon onClick={()=>handleDelete(ele._id)} sx={{color:'red'}} />
          </Typography>
          <Typography variant="body2" color="text.secondary">
             <DownloadIcon onClick={()=>handleDownload(ele)}  sx={{color:'green',marginLeft:"20px"}} />
          </Typography>
         </Div>
        </CardContent>
      </CardActionArea>
      <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
                download image id =  {imgId.imgId}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <InputBase onChange={(e)=>setVal(e.target.value)} sx={{border:'1px solid black'}} placeholder="enter image id" />
              <Button onClick={downloadFile} sx={{marginLeft:'20px'}} variant='contained'>download</Button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
    </Card>
 </>
                
     
  })
}
     
      </Image>

   </>
  )
}

export default Show
