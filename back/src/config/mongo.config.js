import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

console.log(`----------------------------------------------`);

console.log('Connected to mogoose ✨');

export default mongoose;
