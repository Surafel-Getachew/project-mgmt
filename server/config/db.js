const mongoose = require("mongoose");

const connectDB = async() => {
    const conn = await mongoose.connect("mongodb://localhost:27017/mgmt");
    console.log(`MongoDB connected ${conn.connection.host}`.cyan.underline.bold);
}

module.exports = connectDB