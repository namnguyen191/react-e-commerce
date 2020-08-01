const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// IMPORT ROUTES
const userRoutes = require('./routes/user');


const app = express();
// GLOBAL VARIABLES INIT
dotenv.config();

// MONGODB CONNECTION
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
)
.then(() => {
    console.log('MONGO DB CONNECTED');
})
mongoose.connection.on('error', err => {
    console.log(`MONGO DB Connection Errors: ${err.message}`);
});

//APP ROUTES MIDDLEWARES
app.use('/api',userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});