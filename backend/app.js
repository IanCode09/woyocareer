import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import exphbs from 'express-handlebars'

import connectDB from './config/db.js'

import jobRoutes from './routes/jobRoutes.js'
import imageRoutes from './routes/imageRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()
const app = express()

// if(process.env.NODE_ENV === 'development') {
//     app.use(morgan('dev'))
// }

// app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
// app.set('view engine', '.hbs')

// app.use('/', (req, res) => {
//     res.send('Woyo Career Backend Here')
// })


app.use(express.json())

app.use('/api/job', jobRoutes)
app.use('/api/job', imageRoutes)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 9000

app.listen( 
    port,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
)
