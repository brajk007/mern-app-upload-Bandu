const express = require('express');
const {connectDB} = require('./db/connect')
require('dotenv').config()
const app = express();
const register = require('./routers/registerrouter')
const images = require('./routers/filerouter')
const login = require('./routers/loginrouter')
const cors = require('cors')
port = process.env.PORT || 8080

app.use(cors())
app.use('/images',express.static('./routers/uploads'))
app.use(express.json());

app.use('/api',register)
app.use('/api',login)
app.use('/api/img',images)


const start=async ()=>{
     try {
      await connectDB(process.env.MONGO_URL)
            
      app.listen(port,()=>{
         console.log(`listening from server ${port}`)
      })
     } catch (error) {
        console.log(error)
     }
}

start()