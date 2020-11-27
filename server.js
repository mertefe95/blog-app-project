const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/User');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors())
app.use(express.json())
app.use('/api', userRouter)

const uri = process.env.ATLAS_URI

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB connection has established.')
})



const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server ${PORT} is running`)
})