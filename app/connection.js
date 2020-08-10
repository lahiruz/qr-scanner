
const mongoose =  require("mongoose");
// const DB_URL = "mongodb+srv://qruser:qr1234@qrcluster.ebqb3.azure.mongodb.net/qr_reader?retryWrites=true&w=majority";

const connectDB = async () =>{
    await mongoose.connect(process.env.MONGODB_URI, { // process.env.MONGODB_URI
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("DB Connecetd");
}

module.exports = connectDB;
