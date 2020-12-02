import path from 'path'
import express from 'express'
import Image from '../models/imagesModel.js'
const router = express.Router()
import upload from '../middleware/multer.js'



  router.post('/images', upload, async(req, res, next) => {
    // console.log(req.file)
    try {
        const newImage = new Image({
            imageName: req.file.originalname,  
            imageUrl: req.file.path
        });

        newImage.save()
            .then((result) => {
                console.log(result);
                res.status(200).json({
                    success: true,
                    document: result
                });
            })
            .catch((err) => next(err));

    } catch (error) {
        console.log(error)
    }
  })

  export default router