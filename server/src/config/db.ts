import mongoose from 'mongoose'

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL!)
        console.log('database connected')
    }catch(error){
        console.log('Error in database connection', error);
    }
}

export default connectDB;