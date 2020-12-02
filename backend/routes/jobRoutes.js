import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import multer from 'multer';
import path from 'path'
import Job from '../models/jobsModel.js'

const storage = multer.diskStorage({
    destination: "public/images",
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
    
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    }
  }).single("imageUrl");
    
    // // Check file Type
  function checkFileType(file, cb) {
  
    // Allowed ext
    const fileTypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimeType = fileTypes.test(file.mimetype);
  
    if (mimeType && extName) {
      return cb(null, true);
    } else {
      cb("Error: Images Only !!!");
    }
  }

// @desc    Fetch all data
// @route   GET /api/job
// @access  Public
router.get('/', asyncHandler(async (req, res) => {
    try {
        const jobs = await Job.find({})

        res.json(jobs)
        
    } catch (error) {
        console.log(error)
        res.status(400)
        throw new Error('Invalid Job Data')
    }
}))

// @desc   Adding JobCareer
// @route  POST /api/job
// @access     Private/admin
router.post('/', upload, asyncHandler(async (req, res) => {
    try {
        const { companyName, category, jobName, deadline } = req.body
      
        const job = await Job.create({
            companyName,
            category,
            jobName,
            deadline,
            imageName: req.file.originalname,
            imageUrl: req.file.path
        })

        if(job) {
            res.status(201).json({
                _id: job._id,
                companyName: job.companyName,
                category: job.category,
                jobName: job.jobName,
                deadline: job.deadline,
                imageName: job.imageName,
                imageUrl: job.imageUrl
            })
        } 
    } catch (error) {
        console.log(error)
        res.status(400)
        throw new Error('Invalid Job Data')
    }
}))

export default router