const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
      
     image:{
        type:String,
        required:[true,'image required']
      },   
     imgId:{
        type:Number,
        required:[true,'imageId required']
     },
     userId:{
      type:String,
     required:false
     },
     filePath:{
      type:String,
      required:false
     }
},{
    timestamps:true
})

module.exports = mongoose.model('Images',imageSchema)