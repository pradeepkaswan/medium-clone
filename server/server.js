import express from 'express'
import authRoutes from './routes/auth.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import cors from 'cors'
import admin from 'firebase-admin'
import serviceAccountKey from './config/service-account-key.json' assert { type: 'json' }

dotenv.config()

const app = express()

// Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
})

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/auth', authRoutes)

connectDB()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
