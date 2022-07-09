const router = require('express').Router()
const {postImage,getImage,deleteImage,DownloadFile} = require('../controllers/filecontroller')
const multiparty = require('connect-multiparty')
const path = require('path')
const multiMiddleware = multiparty({uploadDir:path.resolve(__dirname,"uploads")})

router.get('/:id',getImage)
router.post('/',multiMiddleware,postImage)
router.delete('/:id',deleteImage)
router.get('/download/:id',DownloadFile)

module.exports = router;