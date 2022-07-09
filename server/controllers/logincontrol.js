const Login = require('../model/register');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//
const login = async(req,res)=>{
       try {
          const user = await Login.findOne({username:req.body.username})
          if(!user){
              return res.status(404).send("wrong credentials")
          }
          const validate = await bcrypt.compare(req.body.password,user.password);
          if(!validate){
             return res.status(404).send('wrong credentials')
          }
      //   const token = jwt.sign(user.email,'banduraj')
         res.status(200).json(user)
       

       } catch (error) {
          res.status(404).send(error)
       }
}


module.exports = {login}