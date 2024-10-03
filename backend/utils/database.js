const mongoose = require("mongoose")

const connectDB = async() => {
    try {
       const connection = await mongoose.connect("mongodb://localhost:27017")
       console.log(`DATABASE connected`)
    } catch (error) {
        console.log("DATABASE connection failed",error)
        process.exit(0);
    }
}

module.exports = connectDB