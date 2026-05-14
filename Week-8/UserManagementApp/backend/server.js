import exp from 'express'
import { config } from 'dotenv'
import { connect } from 'mongoose'
import { userApp } from './APIs/UserAPI.js'
import cors from 'cors'

// read environment variables
config()

// create server
export const app = exp()

const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:5173,http://localhost:5174')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

// CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true)
    }

    return callback(new Error('CORS policy: origin not allowed'))
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}
app.use(cors(corsOptions))

// body parser
app.use(exp.json())

app.get('/', (req, res) => {
  res.json({ message: 'User Management API is running' })
})

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

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

  if (err.message?.includes('CORS policy')) {
    return res.status(403).json({
      message: err.message
    })
  }

  res.status(500).json({
    message: "Internal Server Error"
  })
})
