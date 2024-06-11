const mongoose = require("mongoose");
const URI= process.env.Mongo_URI;
mongoose.connect(URI);

const connectDB = async () => {
try {
    await mongoose.connect(URI);
    console.log("connected db suces full")
} catch (error) {
    console.log(error)
    process.exit(0)
}
}


module.exports = connectDB;
