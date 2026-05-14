import exp from 'express'
import { config } from 'dotenv'
import { connect } from 'mongoose'
import { userApp } from './APIs/UserAPI.js'
import cors from 'cors'

// read environment variables
config()

// create server
export const app = exp()

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5174',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}
app.use(cors(corsOptions))

// body parser
app.use(exp.json())

// forwarding routes
app.use('/user-api', userApp)

// connecting to DB
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL)
    console.log("DB connection is successful!")

    const port = process.env.PORT || 5000
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    })
  }
  catch (err) {
    console.log("DB connection error", err.message)
  }
}

connectDB()

// error handling
app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors
    })
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format"
    })
  }

  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value"
    })
  }

  res.status(500).json({
    message: "Internal Server Error"
  })
})
