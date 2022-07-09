const router = require('express').Router()
const {login} = require('../controllers/logincontrol')

router.route('/login').post(login)


module.exports = router;