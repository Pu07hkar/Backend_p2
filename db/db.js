import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try{
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("database is connected at ", connectioninstance.connection.host);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

export default connectDB;