const Images = require('../model/imageupload')

//uploading file

const postImage= async (req,res)=>{
  const splitArray = req.files.file.path.split('\\')
  const url = splitArray[splitArray.length-1]
    try {
      const image = await Images.create({
         imgId:req.body.imgId,
         image:url,
         userId:req.body.userId,
         filePath:req.files.file.path
      })
      
      res.status(200).json(image)
      
    } catch (error) {
     console.log(error)
    }
}

//getImage

const getImage =async (req,res)=>{
   try {
    
    const {id} = req.params
    const image = await Images.find({userId:id})
    res.status(200).json(image)
   } catch (error) {
    console.log(error)
   }
}

//delete file

const deleteImage = async(req,res)=>{
  try {
    const {id} = req.params
    const image = await Images.findOneAndDelete({_id:id})
    res.status(200).json(image)
  } catch (error) {
    console.log(error)
  }
}

//download file

const DownloadFile = async (req, res) => {
  try {
    let image = await Images.findOne({ _id: req.params.id });
    res.status(200).json(image.filePath);
    
  } catch (err) {
    console.log(err);
  }
};

module.exports = {postImage,getImage,deleteImage,DownloadFile}