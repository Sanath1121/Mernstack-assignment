import mongoose from 'mongoose'
import { UserModel } from '../../models/userModel.js'

const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 1) return
  if (global.__MONGO_CONNECT_PROMISE) {
    await global.__MONGO_CONNECT_PROMISE
    return
  }
  global.__MONGO_CONNECT_PROMISE = mongoose.connect(process.env.DB_URL)
  await global.__MONGO_CONNECT_PROMISE
}

export default async function handler(req, res) {
  // CORS preflight handling — respond to OPTIONS before connecting to DB
  const allowed = (process.env.CORS_ORIGIN || 'http://localhost:5173,http://localhost:5174')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  
  const { origin } = req.headers
  const echo = origin || allowed[0]
  res.setHeader('Access-Control-Allow-Origin', echo)
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  
  // Respond to preflight immediately
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  try {
    await connectToDatabase()
  } catch (err) {
    return res.status(500).json({ message: 'Database connection failed', error: err.message })
  }

  const requestUrl = req.url || ''
  const { pathname } = requestUrl ? new URL(requestUrl, 'http://localhost') : { pathname: '' }
  const id = decodeURIComponent(pathname.split('/').filter(Boolean).pop() || '')

  if (!id) {
    return res.status(400).json({ message: 'Missing user id' })
  }

  if (req.method === 'GET') {
    try {
      const user = await UserModel.findOne({ _id: id, status: true })
      if (!user) return res.status(404).json({ message: 'User not found' })
      return res.status(200).json({ message: 'User found', payload: user })
    } catch (err) {
      return res.status(400).json({ message: 'Invalid ID', error: err.message })
    }
  }

  if (req.method === 'PUT') {
    try {
      const updated = await UserModel.findByIdAndUpdate(id, { $set: req.body }, { new: true })
      if (!updated) return res.status(404).json({ message: 'User not found' })
      return res.status(200).json({ message: 'User Updated', payload: updated })
    } catch (err) {
      return res.status(400).json({ message: 'Update failed', error: err.message })
    }
  }

  if (req.method === 'PATCH') {
    try {
      const activated = await UserModel.findByIdAndUpdate(id, { $set: { status: true } }, { new: true })
      if (!activated) return res.status(404).json({ message: 'User not found' })
      return res.status(200).json({ message: 'User Activated', payload: activated })
    } catch (err) {
      return res.status(400).json({ message: 'Activate failed', error: err.message })
    }
  }

  if (req.method === 'DELETE') {
    try {
      const deleted = await UserModel.findByIdAndUpdate(id, { $set: { status: false } }, { new: true })
      if (!deleted) return res.status(404).json({ message: 'User not found' })
      return res.status(200).json({ message: 'User removed' })
    } catch (err) {
      return res.status(400).json({ message: 'Delete failed', error: err.message })
    }
  }

  res.setHeader('Allow', 'GET,PUT,PATCH,DELETE')
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
