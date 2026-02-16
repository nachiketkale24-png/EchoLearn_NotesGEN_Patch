import mongoose from 'mongoose';

const connectDB = async () => {
    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) {
        console.error('MONGO_URL is not set in environment; skipping DB connection.');
        return;
    }

    try {
        await mongoose.connect(mongoUrl);
        console.log('connected to database');
    } catch (error) {
        console.error('error connecting to database:', error.message || error);
    }
};

export default connectDB;