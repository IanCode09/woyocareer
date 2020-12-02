import mongoose from 'mongoose'

const imageSchema = mongoose.Schema({
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

const Image = mongoose.model('Image', imageSchema)

export default Image