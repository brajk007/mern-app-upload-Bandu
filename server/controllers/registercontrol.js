const Register = require('../model/register');

const registeruser = async (req,res)=>{ 
        const {username,email,password} = req.body;
               try {
                let user = new Register({
                  username,
                  email,
                  password,
                
             })
             await user.save() 
             res.status(200).json(user)

            } catch(error){
                console.log(error)
          }  
}


module.exports = {registeruser}