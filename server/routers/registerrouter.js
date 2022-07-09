const router = require('express').Router()
const {registeruser}   = require('../controllers/registercontrol')
const multiparty = require('connect-multiparty')
const path = require('path')
const {encryptedPassword} = require('../middlewares/bcryptpassword');
const multiMiddleware = multiparty({uploadDir:path.resolve(__dirname,"uploads")})


router.post('/register',multiMiddleware,encryptedPassword,registeruser)



module.exports = router;