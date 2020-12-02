import mongoose from 'mongoose'

const jobSchema  = mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true,
    },

    jobName: {
        type: String,
        required: true,
    },

    deadline: {
        type: Date,
        default: Date.now,
        // required: true
    },

    imageName: {
        type: String,
        default: "none",
        required: true
    },
    
    imageUrl: {
        type: String,
        required: true
    }
})

const Job = mongoose.model('Job', jobSchema)

export default Job