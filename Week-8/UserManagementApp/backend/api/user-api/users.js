import mongoose from 'mongoose'
import { UserModel } from '../../models/userModel.js'

const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 1) return
  if (global.__MONGO_CONNECT_PROMISE) {
    await global.__MONGO_CONNECT_PROMISE
    return
  }
  global.__MONGO_CONNECT_PROMISE = mongoose.connect(process.env.DB_URL, {
    // useUnifiedTopology and useNewUrlParser are default in mongoose v6+
  })
  await global.__MONGO_CONNECT_PROMISE
}

export default async function handler(req, res) {
  try {
    await connectToDatabase()
  } catch (err) {
    return res.status(500).json({ message: 'Database connection failed', error: err.message })
  }

  if (req.method === 'GET') {
    try {
      const users = await UserModel.find({ status: true })
      return res.status(200).json({ message: 'Users', payload: users })
    } catch (err) {
      return res.status(500).json({ message: 'Server error', error: err.message })
    }
  }

  if (req.method === 'POST') {
    try {
      const newUser = req.body
      const newUserDoc = new UserModel(newUser)
      const saved = await newUserDoc.save()
      return res.status(201).json({ message: 'User created', payload: saved })
    } catch (err) {
      return res.status(400).json({ message: 'Create failed', error: err.message })
    }
  }

  res.setHeader('Allow', 'GET,POST')
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
