import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            dbName: "Wirewise"
        });

        console.log('MongoDB Connected')
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;