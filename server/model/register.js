const mongoose = require('mongoose')

const regiSchema = new mongoose.Schema({
      username:{
          type:String,
          required:[true,'must be provided']
      },
      email:{
          type:String,
          required:[true,'must be provided'],
      },
      password:{
          type:String,
          required:[true,'must be provided']
      },

},{
    timestamps:true
})

module.exports = mongoose.model('Register',regiSchema)