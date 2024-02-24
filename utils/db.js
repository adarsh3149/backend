const mongoose = require('mongoose')

// const URL = "mongodb://127.0.0.1:27017/mern_admin"
// mongoose.connect(URI)

const URL = process.env.MONGODB_URI

const connectDB = async () =>{
    try {
        await mongoose.connect(URL)
        console.log("connection successful")
    } catch (error) {
        console.error("failed to connect database")
    }
}
module.exports = connectDB; 