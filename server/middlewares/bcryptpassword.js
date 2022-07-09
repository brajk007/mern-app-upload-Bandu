const bcrypt = require('bcrypt');

const encryptedPassword = async (req,res,next)=>{
         try {
            const hash = await bcrypt.hash(req.body.password,10);
            req.body.password = hash;
             next()
   
         } catch (error) {
           res.send('error is encrypted password')  
         }

 }

 module.exports = {encryptedPassword};