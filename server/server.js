import 'dotenv/config'

import mongoose from 'mongoose';

import express from 'express'

const app = express()

const PORT = process.env.PORT || 2000;

const LINK = process.env.LINK 

await mongoose.connect(LINK)
console.log('mongodb connection successfull');

app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hello from Express Server!');
})

