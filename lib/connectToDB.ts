import React from 'react'
import mongoose from 'mongoose'

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("Db is Connected.....")
  } catch (error) {
    console.log("Getting Error in Connection Db " , error)
  }
}

export default connectToDB